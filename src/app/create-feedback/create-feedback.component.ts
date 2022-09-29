import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-create-feedback',
  templateUrl: './create-feedback.component.html',
  styleUrls: ['./create-feedback.component.css']
})
export class CreateFeedbackComponent implements OnInit {


  
  feedback: Feedback = new Feedback();
  constructor(private feedbackService: FeedbackService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveFeedback(){
    this.feedbackService.createFeedback(this.feedback).subscribe( data =>{
      console.log(data);
      this.goToFeedbackList();
    },
    error => console.log(error));
  }

  goToFeedbackList(){
    this.router.navigate(['/feedbacks']);
  }
  
  onSubmit(){
    console.log(this.feedback);
    this.saveFeedback();
  }
}


