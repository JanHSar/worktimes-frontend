import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WorktimeService } from '../../service/worktime.service';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.scss'
})
export class CheckinComponent {
  active: boolean = false;
  activeWorkTime?: {
    id: number,
    start: Date,
    end: Date
  };


  constructor(
    private workTimeStervice: WorktimeService
  ) {}

  async ngOnInit() {
    // TODO get current status
    this.active = await this.getCurrentStatus();
  }

  /**
   * 
   * @returns current work status
   */
  async getCurrentStatus(): Promise<boolean> {
    const workTimes = await this.workTimeStervice.getToday();
    if(workTimes.length > 0) {
      // Last WorkTime not ended
      const lastWorkTimeEntry = workTimes[workTimes.length -1];
      if(lastWorkTimeEntry.end === null) {
        this.activeWorkTime = lastWorkTimeEntry;
        return true;
      }
    }
    return false;
  }

  /**
   * Start timer
   */
  async startTime() {
    if (!this.active) {
      const workTime = await this.workTimeStervice.start();
      this.activeWorkTime = workTime;
      this.active = true;
    }
  }

  /**
   * Stop timer
   */
  async stopTime() {
    if (this.active) {
      await this.workTimeStervice.stop(this.activeWorkTime!.id);
      this.activeWorkTime = undefined;
      this.active = false;
    }
  }
}
