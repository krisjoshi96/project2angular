import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { CreateBusComponent } from './create-bus/create-bus.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:`users`,component:UserListComponent},
  {path:`createUsers`,component:CreateUserComponent},
  {path:`createBuses`,component:CreateBusComponent},
  {path:`buses`,component:BusListComponent},
  {path:``,redirectTo: `users`,pathMatch:`full`}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
