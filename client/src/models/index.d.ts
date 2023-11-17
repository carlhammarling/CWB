interface Review {
  rating: number;
  message: string;
  _id?: string;
}

interface Price {
  day: number;
  month: number;
  week: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}

type Facility = "coffee" | "gym" | "food" | "safetybox" | "activities";

interface CoworkingSpace {
  _id: string;
  name: string;
  adress: string;
  description: string;
  email: string;
  images: string[];
  facilities: Facility[];
  coordinates: Coordinates;
  price: Price;
  reviews?: Review[];
  __v: number;
}

interface LoginFormData {
  userName: string;
  password: string;
}

interface RegisterFormData extends LoginFormData {
  passwordRepeat: string;
}

interface User {
  _id: string;
  userName: string;
  bookings: any[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

type PaymentMethod = "paypal" | "visa-mastercard";

interface BookingData {
  bookingId?: string;
  coworkingId: string;
  paymentMethod: PaymentMethod;
  arriveDate: Date;
  checkoutDate: Date;
  price: number
}

interface BookedData {
  _id: string;
  coworkingId: CoworkingSpace;
  paymentMethod: PaymentMethod;
  arriveDate: Date;
  checkoutDate: Date;
  price: number
}


type CalenderValue = Date | null;

type SuccessMsg = "booking" | "edit" | "delete";

