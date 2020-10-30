import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getActiveUsers() {
    return this.http.get<any>(`${environment.mockApiBaseURL}/users`);
  }

  getUserPosts() {
    return this.http.get<any>(`${environment.mockApiBaseURL}/posts`);
  }
}
