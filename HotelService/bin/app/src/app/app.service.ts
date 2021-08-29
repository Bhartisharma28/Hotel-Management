import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private httpClient:HttpClient) { }

  rooms:any[]=[];

  hotel !: String;
  type !: String;
  passRooms(passRooms: any[]){
    this.rooms=passRooms;
  }
  retriveRooms(){
    return this.rooms;
  }

  avlRooms(hotel_name:String, room_type:String){
   return this.httpClient.get("http://localhost:8080/avl/rooms/"+hotel_name+"/"+room_type)
  }

  bookRoom(room_number:String, from_date: Date, to_date:Date){
    return this.httpClient.post("http://localhost:8080/book", {room_number, from_date, to_date})
  }

}