import { dateConverter } from "../../../utils/dateConverter";
import "./AccountCard.scss";
import { useDataContext } from "../../../contexts/DataContext";
import useWindowSize from "../../../utils/useWindowSize";
import AdressContact from "../../molecules/AdressContact/AdressContact";
import FacilityTextAtomRow from "../../molecules/FacilityTextAtomRow/FacilityTextAtomRow";
import { Link } from "react-router-dom";

const AccountCard = (props: accountCardProps) => {
  const { setShowModal, setEdit, setEditBooking } = useDataContext();
  const windowWidth = useWindowSize();

  return (
    <div className={`accountCard ${!props.edit ? "oldBooking" : ""}`}>
      <img src={props.booking.coworkingId.images[0]} alt="" />
      <div className="cardInfo">
        <div className="cardTop">
          <div className="cardTopinfo">
            <h3>{props.booking.coworkingId.name}</h3>
            {windowWidth >= 1000 && (
              <>
                <AdressContact
                  email={props.booking.coworkingId.email}
                  adress={props.booking.coworkingId.adress}
                />
                <FacilityTextAtomRow
                  facilities={props.booking.coworkingId.facilities}
                />
              </>
            )}
          </div>
          <div className="userActions">
            {props.edit ? (
              <button
                onClick={() => {
                  setShowModal(true);
                  setEdit(true);
                  setEditBooking( props.booking);
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
            ) : (
              <></>
            )}
            <div>
              <Link
                className="infoLink"
                to={`/cowork/${props.booking.coworkingId._id}`}
                target="_blank"
              >
                <i className="fa-solid fa-circle-info"></i>{" "}
              </Link>
            </div>
          </div>
        </div>
        {windowWidth <= 1000 ? (
          <div className="cardBottom">
            <p className="xs">
              {dateConverter(props.booking.arriveDate)} -{" "}
              {dateConverter(props.booking.checkoutDate)}
            </p>
            <p className="xs">{props.booking.price} THB</p>
          </div>
        ) : (
          <div>
            {props.booking.coworkingId.description.length > 130 ? (
              <p className="description">
                {props.booking.coworkingId.description.slice(0, 130)}...
              </p>
            ) : (
              <p className="description">
                {props.booking.coworkingId.description}
              </p>
            )}
            <div className="cardBottom">
              <p className="bold">
                {dateConverter(props.booking.arriveDate)} -{" "}
                {dateConverter(props.booking.checkoutDate)}
              </p>
              <p className="bold">{props.booking.price} THB</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountCard;
