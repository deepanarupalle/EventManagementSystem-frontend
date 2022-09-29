import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  
  events: any[];
  
  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEvents();
  }

  private getEvents(){
    this.eventService.getEventsList().subscribe(data => {
      this.events = data;
    });
  }

  eventDetails(id: number){
    this.router.navigate(['event-details', id]);
  }

  updateEvent(id: number){
    this.router.navigate(['update-event', id]);
  }
  
  deleteEvent(id: number){
    this.eventService.deleteEvent(id).subscribe( data => {
      console.log(data);
      this.getEvents();
    })
  }
 
  
  }


  