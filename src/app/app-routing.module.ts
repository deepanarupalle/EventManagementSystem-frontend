import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
//import { CreatePaymentComponent } from './create-payment/create-payment.component';
//import { CreateFeedbackComponent } from './create-feedback/create-feedback.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [


  {path: 'users', component: UserListComponent},
  {path: 'create-user', component:   CreateUserComponent},
 
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update-user/:id', component:  UpdateUserComponent},
  {path: 'user-details/:id', component:   UserDetailsComponent},

  {path: 'events', component: EventListComponent},
  {path: 'create-event', component:CreateEventComponent},
 
 {path: '', redirectTo: 'events', pathMatch: 'full'},
  {path: 'update-event/:id', component: UpdateEventComponent},
   {path: 'event-details/:id', component: EventDetailsComponent},

  {path: 'feedbacks', component: FeedbackListComponent},
   {path: 'create-feedback', component:   CreateFeedbackComponent},
  
   {path: '', redirectTo: 'feedbacks', pathMatch: 'full'},

   {path: 'home', component: HomeComponent},

  
   {path: '', redirectTo: 'home', pathMatch: 'full'},
   
  // {path: 'login', component:  LoginComponent},
  
  
   {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'create-payment', component:    CreatePaymentComponent},

    {path: 'payment', component: PaymentComponent},
    //{path: 'create-user', component:   CreateUserComponent},
   
    {path: '', redirectTo: 'payment', pathMatch: 'full'},

    


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
