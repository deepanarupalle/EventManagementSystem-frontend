import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [


  {path: 'users', component: UserListComponent},
  {path: 'create-user', component:   CreateUserComponent},
 
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update-user/:id', component:  UpdateUserComponent},
  {path: 'user-details/:id', component:   UserDetailsComponent},

  // {path: 'vegetables', component: VegetableListComponent},
  // {path: 'create-vegetable', component:CreateVegetableComponent},
 
  // {path: '', redirectTo: 'vegetables', pathMatch: 'full'},
  // {path: 'update-vegetable/:id', component: UpdateVegetableComponent},
  // {path: 'vegetable-details/:id', component: VegetableDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
