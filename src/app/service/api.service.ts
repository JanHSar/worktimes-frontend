import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  // Connect to API on this url
  private apiUrl: string = 'http://localhost:3000';
  
  constructor(
    private http: HttpClient
  ) { }

  /**
   * GET request
   * @param path 
   * @param options 
   * @returns API response
   */
  async get(path: string, options: any = null): Promise<any> {
    return await firstValueFrom(
      this.http.get(this.apiUrl + path, options)
      );
  }

  /**
   * POST request
   * @param path 
   * @param data 
   * @param options 
   * @returns API response
   */
  async post(path: string, data: object, options: any = {}): Promise<any> {
    return await firstValueFrom(
      this.http.post(this.apiUrl + path, data, options)
    );
  }

    /**
   * PUT request
   * @param path 
   * @param data 
   * @param options 
   * @returns API response
   */
    async put(path: string, data: object, options: any = {}): Promise<any> {
      return await firstValueFrom(
        this.http.put(this.apiUrl + path, data, options)
      );
    }

  /**
   * PATCH request
   * @param path 
   * @param data 
   * @param options 
   * @returns API response
   */
  async patch(path: string, data: object, options: any = {}): Promise<any> {
    return await firstValueFrom(
      this.http.patch(this.apiUrl + path, data, options)
    );
  }

    /**
   * DELETE request
   * @param path 
   * @param data 
   * @param options 
   * @returns API response
   */
    async delete(path: string, options: any = {}): Promise<any> {
      return await firstValueFrom(
        this.http.delete(this.apiUrl + path, options)
      );
    }
}
