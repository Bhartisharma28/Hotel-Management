import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { HotelService } from '../app.service';
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
  providers: [HotelService]
})
export class RoomDetailsComponent implements OnInit {

  rooms:any;
  room_num!:String;
 
  hotel!: String | null;
  type!: String | null;
 


  constructor(private router:Router, private hotelService:HotelService,private  activatedRoute :ActivatedRoute,private httpClient:HttpClient) { 
  //  console.log(this.hotel);
  }
  
  bookRoom(){
    // console.log(this.room_num);
    this.router.navigate(['/booking',{room : this.room_num}]);

  }



  ngOnInit(): void {
    // this.rooms=this.hotelComponent.rooms;
    this.activatedRoute.paramMap.subscribe(params => {
      this.hotel = params.get("hotel")
      this.type = params.get("type")

      this.httpClient.get("http://localhost:8080/avl/rooms/"+this.hotel+"/"+this.type).subscribe((Response :any)=>{
      
      console.log(Response);
      this.rooms =Response;
      
     });

  })

}

}