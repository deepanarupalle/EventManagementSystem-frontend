import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../event';


@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {


  event: Event = new Event();
  private _route: any;
  constructor(private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEvent(){
    this.eventService.createEvent(this.event).subscribe( data =>{
      console.log(data);
      this.goToEventList();
    },
    error => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/events']);
  }
  
  onSubmit(){
    console.log(this.event);
    this.saveEvent();
  }
  onSave(){
    this._route.navigate('/payment')
  }
}

  

