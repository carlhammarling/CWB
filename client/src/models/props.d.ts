interface DataContextProps {
    coworkingSpaces: CoworkingSpace[] | undefined;
    setCoworkingSpaces: React.Dispatch<React.SetStateAction<CoworkingSpace[] | undefined>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
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


    

