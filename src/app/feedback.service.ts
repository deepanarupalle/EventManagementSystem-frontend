import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

   
  private baseURL = "http://localhost:9090/api/Feedback/view";
  private end="http://localhost:9090/api/Feedback/add";
  constructor(private httpClient: HttpClient) { }
  getFeedbacksList(): Observable<Feedback[]>{
    return this.httpClient.get<Feedback[]>(`${this.baseURL}`);
  }

  createFeedback(feedback:Feedback): Observable<Object>{
  
    return this.httpClient.post(`${this.end}`,feedback);
  
  }

/* getEventById(id:number): Observable<Event>{
  return this.httpClient.get<Event>(`${this.baseURL}/${id}`);
  }

  updateEvent(id: number, event: Event): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, event);
  }*/
  
  deleteFeedback(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}

