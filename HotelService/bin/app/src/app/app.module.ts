import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { BookingStatusComponent } from './booking-status/booking-status.component';
import { ConformComponent } from './conform/conform.component';
import { LoginComponent } from './login/login.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'',component:HotelComponent},
  {path:'room',component:RoomDetailsComponent},
  {path:'booking',component:BookingStatusComponent},
  {path:'conform',component:ConformComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    RoomDetailsComponent,
    BookingStatusComponent,
    ConformComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [
    HotelComponent,
    RoomDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
