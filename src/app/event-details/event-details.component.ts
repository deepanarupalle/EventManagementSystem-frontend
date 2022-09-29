import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  
  id:number
  event:Event
  constructor(private route: ActivatedRoute, private eventService: EventService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.eventService.getEventById(this.id).subscribe(data =>{
      this.event=data;
    });
  }

}

  

