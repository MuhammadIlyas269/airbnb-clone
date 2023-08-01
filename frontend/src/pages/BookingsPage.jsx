import AccountNav from "../components/account-page/AccountNav";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import PlaceImg from "../components/place-page/PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../components/place-page/BookingDates";
import * as svg from "../assets/svg";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      console.log(response.data.data);
      setBookings(response.data.data);
    });
  }, []);

  if (bookings.length === 0) {
    return (
      <>
        <div className=" flex justify-center max-h-full h-48 relative">
          <div className="bg-gray-200  px-5 py-3 rounded-2xl absolute top-1/2">
            <h2>No bookings found</h2>
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <AccountNav />
      <div className="mt-9">
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link
              to={`/account/bookings/${booking._id}`}
              key={booking._id}
              className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden mb-3 "
            >
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                <h2 className="text-xl">{booking.place.title}</h2>
                <div className="text-xl">
                  <BookingDates
                    booking={booking}
                    className="mb-2 mt-4 text-gray-500"
                  />
                  <div className="flex gap-1">
                    <svg.CreditCardIcon />
                    <span className="text-2xl">
                      Total price: ${booking.price}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
