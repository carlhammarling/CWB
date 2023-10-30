interface DataContextProps {
    coworkingSpaces: CoworkingSpace[] | undefined;
    setCoworkingSpaces: React.Dispatch<React.SetStateAction<CoworkingSpace[] | undefined>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    token: string | null;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
    userData: any
}

interface DataProviderProps {
    children: ReactNode;
}

interface LoginFormProps {
    togglePage: React.MouseEventHandler;
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

interface PMProps {
    selectedPM: string,
    setSelectedPM: React.Dispatch<SetStateAction<PaymentMethod>>
}

interface CalenderProps {
    arriveDate: CalenderValue, 
    setArriveDate: React.Dispatch<SetStateAction<CalenderValue>>, 
    checkoutDate: CalenderValue, 
    setCheckoutDate: React.Dispatch<SetStateAction<CalenderValue>>
}

    

