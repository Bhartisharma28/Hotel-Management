package com.example.service;

import java.util.Date;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.entity.Book;
import com.example.entity.Customer;
import com.example.entity.Hotel;
import com.example.exception.NoRoomFoundException;
import com.example.repository.BookRepository;
import com.example.repository.CustomerRepository;
import com.example.repository.HotelRepository;

@Service
public class PaymentServiceImpl implements PaymentService {

	HotelRepository hotelRepository;
	BookRepository bookRepository;
    CustomerRepository customerRepository; 
	public PaymentServiceImpl(HotelRepository hotelRepository, BookRepository bookRepository, CustomerRepository customerRepository) {
		super();
		this.hotelRepository = hotelRepository;
		this.bookRepository = bookRepository;
		this.customerRepository = customerRepository;
	}

	@Transactional
	@Override
	public String pay(String room_number, Date from_date, Date to_date, String phone_number, String name) {

		Date book_date = new Date();
		Optional<Hotel> optionalHotel = hotelRepository.findById(room_number);
		Hotel hotel = optionalHotel.orElseThrow(() -> new NoRoomFoundException(room_number));
		
		hotel.setIs_available(false);
		hotelRepository.save(hotel);
		
		double price = hotelRepository.findPrice(room_number);
		long time = to_date.getTime()-from_date.getTime();
		int no_of_days = (int)time/(1000*3600*24);
		
		double amount = price*no_of_days;
		
		Customer customer = new Customer(name, phone_number, no_of_days, book_date, amount);
		customerRepository.save(customer);
		
		Book book = new Book(room_number, from_date, to_date, customer.getCustomer_id());
		bookRepository.save(book);
		
		return "Hotel room booked";
	
	}
}