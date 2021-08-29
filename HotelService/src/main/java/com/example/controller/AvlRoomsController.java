package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Hotel;
import com.example.repository.HotelRepository;

@CrossOrigin(origins = {"*"})
@RestController()
@RequestMapping("/avl/rooms")
public class AvlRoomsController {

	@Autowired
	HotelRepository hotelRepository;
	
	@GetMapping(value="/{hotel_name}")
	public List<Hotel> getAllAvlRooms(@PathVariable(value="hotel_name") String hotel_name) {
		List<Hotel> hotels = hotelRepository.findAllByName(hotel_name+"_");
		return hotels;
	}
	
	@GetMapping(value="/{hotel_name}/{room_type}")
	public List<Hotel> getAvlRoomTypes(@PathVariable(value="hotel_name") String hotel_name, @PathVariable(value="room_type") String room_type) {
		List<Hotel> hotels = hotelRepository.findAllByNameAndType(hotel_name+"_", room_type);
		return hotels;
	}
	
}
