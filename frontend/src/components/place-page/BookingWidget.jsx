import { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "../../api/axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../store/UserContext";

export default function BookingWidget({ place }) {
  const [userInputs, setUserInputs] = useState({
    checkIn: "",
    checkOut: "",
    numberOfGuests: 1,
    name: "",
    phone: "",
  });
  const [redirect, setRedirect] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    setUserInputs((prev) => {
      return { ...prev, name: user.name };
    });
  }, [user]);

  let numberOfNights = 0;
  if (userInputs.checkIn && userInputs.checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(userInputs.checkOut),
      new Date(userInputs.checkIn)
    );
  }

  const inputChangeHandler = (ev) => {
    ev.preventDefault();
    setUserInputs((prev) => {
      return { ...prev, [ev.target.name]: ev.target.value };
    });
  };

  const placeBookingHandler = async () => {
    try {
      const { data } = await axios.post("/bookings", {
        place: place._id,
        price: numberOfNights * place.price,
        ...userInputs,
      });
      const bookingId = data.data._id;

      setRedirect(`/account/bookings/${bookingId}`);
    } catch (err) {
      console.log(err);
    }
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${place.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <input
              type="date"
              name="checkIn"
              value={userInputs.checkIn}
              onChange={inputChangeHandler}
            />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <input
              type="date"
              name="checkOut"
              value={userInputs.checkOut}
              onChange={inputChangeHandler}
            />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input
            type="number"
            name="numberOfGuests"
            value={userInputs.numberOfGuests}
            onChange={inputChangeHandler}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input
              type="text"
              name="name"
              value={userInputs.name}
              onChange={inputChangeHandler}
            />
            <label>Phone number:</label>
            <input
              type="tel"
              name="phone"
              value={userInputs.phone}
              onChange={inputChangeHandler}
            />
          </div>
        )}
      </div>
      <button className="primary mt-4" onClick={placeBookingHandler}>
        Book this place
        {numberOfNights > 0 && <span> ${numberOfNights * place.price}</span>}
      </button>
    </div>
  );
}
