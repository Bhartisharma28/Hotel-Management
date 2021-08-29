

export class Rooms {
    room_number?: String;
    room_type?: String;
    price?: number;
    is_available?: boolean;
    constructor(roomNumber: String, roomType: String, price: number, isAvailable: boolean) {
        this.room_number=roomNumber;
        this.room_type=roomType;
        this.price=price;
        this.is_available=isAvailable;
    }
  }