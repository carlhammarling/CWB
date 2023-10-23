interface DataContextProps {
    coworkingSpaces: CoworkingSpace[] | undefined;
    setCoworkingSpaces: React.Dispatch<React.SetStateAction<CoworkingSpace[] | undefined>>;
}

interface DataProviderProps {
    children: ReactNode;
}

interface ReviewProps {
    reviews: Review[];
}


interface FacilityAtomProps {
 facilities?: Facility[];
}

interface CardWrapperProps {
    coworkingSpaces: CoworkingSpace[]
}


    

