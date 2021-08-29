package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.service.PaymentService;

@CrossOrigin(origins = {"*"})
@RestController()
@RequestMapping("/book")
public class PaymentController {

	@Autowired
	PaymentService paymentService;
	
	@PostMapping
	public PaymentResponse pay(@RequestBody PaymentRequest paymentRequest) {
		
		String message  = paymentService.pay(paymentRequest.getRoom_number(), paymentRequest.getFrom_date(), paymentRequest.getTo_date(), paymentRequest.getPhone_number(), paymentRequest.getName());
		PaymentResponse paymentResponse = new PaymentResponse();
		paymentResponse.setMessage(message);
		return paymentResponse;
	}
	
}