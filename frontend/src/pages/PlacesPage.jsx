import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AccountNav from "../components/account-page/AccountNav";
import axios from "../api/axios";

const PlacesPage = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios
      .get("/places")
      .then(({ data }) => {
        const result = data.data;
        // console.log(result);
        setPlaces(result);
        console.log(places);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <AccountNav />

      <div className="text-center mt-8">
        <Link
          to={"/account/places/new"}
          className=" inline-flex bg-primary gap-1 text-white rounded-full py-2 px-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add new place
        </Link>
      </div>
      <div className="mt-4">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={"/account/places/" + place._id}
              key={place._id}
              className="flex cursor-pointer gap-4 bg-gray-100 p-4 rounded-2xl"
            >
              <div className="flex w-32 h-32 bg-gray-300 grow-0 shrink-0">
                {place.photos.length > 0 &&
                  place.photos.map((photo) => (
                    <img src={`http://localhost:8000/uploads/${photo}`} />
                  ))}
              </div>
              <div className="grow-0 shrink">
                <h2 className="text-xl">{place.title}</h2>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default PlacesPage;
