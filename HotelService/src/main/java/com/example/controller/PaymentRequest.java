package com.example.controller;

import java.util.Date;

public class PaymentRequest {
	String name;
	String phone_number;
	int no_of_days;
	float amount;
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public int getNo_of_days() {
		return no_of_days;
	}

	public void setNo_of_days(int no_of_days) {
		this.no_of_days = no_of_days;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	String room_number;
	Date from_date;
	Date to_date;
	
	public String getRoom_number() {
		return room_number;
	}

	public void setRoom_number(String room_number) {
		this.room_number = room_number;
	}

	public Date getFrom_date() {
		return from_date;
	}

	public void setFrom_date(Date from_date) {
		this.from_date = from_date;
	}

	public Date getTo_date() {
		return to_date;
	}

	public void setTo_date(Date to_date) {
		this.to_date = to_date;
	}

	@Override
	public String toString() {
		return "PaymentRequest [name=" + name + ", phone_number=" + phone_number + ", no_of_days=" + no_of_days
				+ ", amount=" + amount + ", room_number=" + room_number + ", from_date=" + from_date + ", to_date="
				+ to_date + "]";
	}

	
}