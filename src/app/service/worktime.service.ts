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
      const res = await this.api.patch('/workTimes/stop', {workTimeId: workTimeId});
      return res;
    }
}
