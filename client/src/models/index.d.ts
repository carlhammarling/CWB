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