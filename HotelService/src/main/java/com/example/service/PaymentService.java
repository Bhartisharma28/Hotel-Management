package com.example.service;

import java.util.Date;

public interface PaymentService {

	

	String pay(String room_number, Date from_date, Date to_date, String phone_number, String name);
	
}