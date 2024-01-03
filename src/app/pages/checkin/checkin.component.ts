import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-checkin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkin.component.html',
  styleUrl: './checkin.component.scss'
})
export class CheckinComponent {
  active: boolean = false;

  /**
   * Start timer
   */
  startTime() {
    if (!this.active) {
      this.active = true;
    }
  }

  /**
   * Stop timer
   */
  stopTime() {
    if (this.active) {
      this.active = false;
    }
  }
}
