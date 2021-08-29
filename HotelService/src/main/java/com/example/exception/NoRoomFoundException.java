package com.example.exception;

public class NoRoomFoundException extends RuntimeException {

	public NoRoomFoundException(String message) {
		super(message);
	}
	
}
