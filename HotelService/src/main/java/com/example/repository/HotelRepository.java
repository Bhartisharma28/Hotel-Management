package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entity.Hotel;

@Repository
public interface HotelRepository extends JpaRepository<Hotel, String>{

	@Query(value = "Select * from Hotel h where h.room_number like :hotel_name and h.room_type = :room_type and h.is_available=true", nativeQuery = true)
	List<Hotel> findAllByNameAndType(@Param("hotel_name") String hotel_name, @Param("room_type") String room_type);

	@Query(value = "Select * from Hotel h where h.room_number like :hotel_name and h.is_available=true", nativeQuery = true)
	List<Hotel> findAllByName(@Param("hotel_name") String hotel_name);
	
	@Query(value = "select * from Hotel h where h.room_number = :room_number", nativeQuery = true)
	Hotel findRoomById(@Param("room_number") String room_number);
	
	@Query(value = "select price from Hotel h where h.room_number = :room_number", nativeQuery = true)
	double findPrice(@Param("room_number") String room_number);
	
}
