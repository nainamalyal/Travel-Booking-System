import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FlightComponent } from './flight/flight.component';
import { BusesComponent } from './buses/buses.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { TrainComponent } from './train/train.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';

const routes: Routes = [
  {component:LoginComponent,path:""},
  { component: HomeComponent, path: "home" },
  { component: BookComponent, path: "book" },
  { component: FeedbackComponent, path: "feedback" },
  { component: ContactUsComponent, path: "contactUs" },
  { component: AboutUsComponent, path: "aboutUs" },
  { component: TrainComponent, path: "bookings/train" },
  { component: FlightComponent, path: "bookings/flight" },
  { component: BusesComponent, path: "bookings/buses" },
  { component: MyBookingsComponent, path: "myBookings" },
  { component: SignupComponent, path: "signUp" },
  { component: SchedulesComponent, path: "schedules" },
  { component: LoginComponent, path: "login" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
