import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class WorktimeService {

  constructor(
    private api: ApiService
  ) { }


  /**
   * Get todays worktimes
   * @returns todays worktimes
   */
  async getToday() {
    const res = await this.api.get('/workTimes/today', {});
    return res;
  }

  /**
   * Create new WorkTime entry
   */
  async start() {
    const res = await this.api.post('/workTimes/start', {});
    return res;
  }

    /**
   * Stop last WorkTime entry
   */
    async stop(workTimeId: number) {
      const workTime = await this.api.patch('/workTimes/stop', {workTimeId: workTimeId});
      return workTime;
    }

    /**
     * Get work times vor given day
     * @param year 
     * @param month 
     * @param day 
     */
    async getTimesForDay(year: number, month: number, day: number): Promise<[]> {
      const workTimes = await this.api.get('/workTimes', {year, month, day});
      return workTimes;
    }
}
