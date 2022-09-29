import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { PaymentComponent } from './payment/payment.component';


//import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    CreateEventComponent,
    UpdateEventComponent,
    EventDetailsComponent,
    EventListComponent,
    FeedbackListComponent,
    CreateFeedbackComponent,
    CreateFeedbackComponent,
    FeedbackListComponent,
    HomeComponent,
    //LoginComponent,
    CreatePaymentComponent,
    PaymentComponent,
    //FeedbackDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
