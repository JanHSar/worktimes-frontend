import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private api: ApiService
  ) { }

  /**
   * Log in a user and store xApiKey
   * @param userName 
   * @param password 
   * @returns User
   */
  async logIn(userName: string, password: string): Promise<any> {
    const res = await this.api.post('/users/auth', {userName, password});
    
    // Store xApiKey
    if(res.xApiKey !== '') {
      localStorage.setItem('xApiKey', res.xApiKey);
    }

    return res;
  }
}
