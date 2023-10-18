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

interface CoworkingSpace {
    _id: string;
    name: string;
    adress: string;
    description: string;
    email: string;
    images: string[];
    fascilities: string[];
    price: Price;
    reviews?: Review[];
    __v: number;
}