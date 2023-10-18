interface DataContextProps {
    coworkingSpaces: CoworkingSpace[] | undefined;
    setCoworkingSpaces: React.Dispatch<React.SetStateAction<CoworkingSpace[] | undefined>>;
}

interface DataProviderProps {
    children: ReactNode;
}

interface CardRatingsProps {
    reviews: Review[];
}
interface CardContentProps {
    name: string;
    adress: string;
    fascilities: string[];
    price: Price;
}

interface CardPriceProps {
 price: Price;
}
    

