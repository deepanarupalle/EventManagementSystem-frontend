import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Event} from './event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  
  private baseURL = "http://localhost:9090/api/v1/events";
  private end="http://localhost:9090/api/v1/add";
  constructor(private httpClient: HttpClient) { }
  getEventsList(): Observable<Event[]>{
    return this.httpClient.get<Event[]>(`${this.baseURL}`);
  }

  createEvent(event:Event): Observable<Object>{
  
    return this.httpClient.post(`${this.end}`,event);
  
  }

  getEventById(id:number): Observable<Event>{
  return this.httpClient.get<Event>(`${this.baseURL}/${id}`);
  }

  updateEvent(id: number, event: Event): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, event);
  }
  
  deleteEvent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  
}

