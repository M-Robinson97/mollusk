import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  private baseUrl = 'localhost:5000'; // Example API URL

  constructor(private http: HttpClient) {}
  // Get all messages
  getMessages(): Observable<any> {
    return this.http.get(`${this.baseUrl}/messages`);
  }

  // Create a new message
  createMessage(post: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/posts`, post);
  }
}
