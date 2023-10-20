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

interface CardPriceProps {
 price: Price;
}

interface CardWrapperProps {
    coworkingSpaces: CoworkingSpace[]
}
    
