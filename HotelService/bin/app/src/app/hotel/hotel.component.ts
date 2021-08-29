import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../app.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
  providers: [HotelService]
})

export class HotelComponent implements OnInit {

  

  constructor(private router:Router, private hotelService:HotelService) { }

  rooms?: Array<any>;
  hotel!: String;
  type!: String;

  roomDetails(){
    this.hotelService.avlRooms(this.hotel, this.type).subscribe({
      next:(response:any)=>{
        this.rooms=response;
         console.log(this.rooms);
      }
    })
    // console.log(this.rooms);
    this.router.navigate(['/room',{hotel : this.hotel,type :this.type}]);
  }

  passRoomsToService(){
    // this.hotelService.passRoomsObject(this.rooms);
  }
  
  
  ngOnInit(): void {
  }

}