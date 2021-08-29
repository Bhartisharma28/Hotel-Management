import { Component, OnInit } from '@angular/core';
import { HotelService } from '../app.service';
import {HttpClient} from "@angular/common/http";
import { Router,ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';



@Component({
  selector: 'app-booking-status',
  templateUrl: './booking-status.component.html',
  styleUrls: ['./booking-status.component.css'],
  providers: [HotelService]
})
export class BookingStatusComponent implements OnInit {

  message!: String;
  from_date!: Date;
  to_date!: Date;
  room!: String|null;
  name!:String;
  phone_number!:String;
  price!:String|null;
  no_of_days!:number;
  time!:number;
  

  constructor(private router:Router, private hotelService:HotelService,private  activatedRoute :ActivatedRoute,private httpClient:HttpClient) { 
  }

  book(){
    
    this.activatedRoute.paramMap.subscribe(params => {
      this.room = params.get("room")
      console.log(this.room);

      this.httpClient.post("http://localhost:8080/book", {room_number:this.room, from_date:this.from_date, to_date:this.to_date, phone_number:this.phone_number, name:this.name}).subscribe((Response :any)=>{
      
      console.log(Response);
      this.message =Response;
      
     });
    })
    this.router.navigateByUrl("/conform");
  }

  ngOnInit(): void {
  }

}
