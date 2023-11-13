interface DataContextProps {
  coworkingSpaces: CoworkingSpace[] | undefined;
  setCoworkingSpaces: React.Dispatch<
    React.SetStateAction<CoworkingSpace[] | undefined>
  >;
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  userData: User | null;
}
interface BookingContextProps {
  selectedPM: PaymentMethod;
  setSelectedPM: React.Dispatch<React.SetStateAction<PaymentMethod>>;
  arriveDate: CalenderValue;
  setArriveDate: React.Dispatch<SetStateAction<CalenderValue>>;
  checkoutDate: CalenderValue;
  setCheckoutDate: React.Dispatch<SetStateAction<CalenderValue>>;
  price: number;
  setPrice: React.Dispatch<SetStateAction<number>>;
}

interface DataProviderProps {
  children: ReactNode;
}

interface BookingProviderProps {
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
  coworkingSpaces: CoworkingSpace[];
}

interface accountCardProps {
  booking: BookedData;
  edit: boolean;
}

interface AdressContactProps {
  email: string;
  adress: string;
}
