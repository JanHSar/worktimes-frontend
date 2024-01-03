import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { WorktimeService } from '../../service/worktime.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [NgbDatepickerModule, CommonModule, CommonModule, FormsModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  today = inject(NgbCalendar).getToday();

  selectedDate?: NgbDateStruct;
  date: { year: number; month: number; };
  workTimes: [] | undefined;


  constructor(
    private workTimeService: WorktimeService
  ) {
    this.date = this.today;
  }

  /**
   * Update detail viel box to show work times
   * @param date 
   */
  async updateDetail(date: NgbDateStruct) {
    if(this.selectedDate) {
      const workTimes = await this.workTimeService.getTimesForDay(this.selectedDate?.year, this.selectedDate?.month, this.selectedDate?.day)
      this.workTimes = workTimes;
    }
  }
}
