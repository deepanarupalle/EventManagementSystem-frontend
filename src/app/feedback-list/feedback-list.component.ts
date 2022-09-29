import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

    
  feedbacks: any[];
  
  constructor(private feedbackService: FeedbackService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFeedbacks();
  }

  private getFeedbacks(){
    this.feedbackService.getFeedbacksList().subscribe(data => {
      this.feedbacks = data;
    });
  }

  // eventDetails(id: number){
  //   this.router.navigate(['event-details', id]);
  // }

  // updateEvent(id: number){
  //   this.router.navigate(['update-event', id]);
  // }
  
  deleteFeedback(id: number){
    this.feedbackService.deleteFeedback(id).subscribe( data => {
      console.log(data);
      this.getFeedbacks();
    })
  }
 
  
  }


  
