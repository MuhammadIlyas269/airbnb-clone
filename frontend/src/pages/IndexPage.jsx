import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

const IndexPage = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then(({ data }) => {
      const responseData = data.data;
      setPlaces(responseData);
    });
  }, []);
  // console.log(places);
  return (
    <div className="mt-8 grid  gap-x-6  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {places.length > 0 &&
        places.map((place) => (
          <Link key={place._id} to={"/places/" + place._id}>
            <div className="bg-gray-500 rounded-2xl flex mb-1">
              {place.photos?.[0] && (
                <img
                  className="rounded-2xl object-cover aspect-square"
                  src={"http://localhost:8000/uploads/" + place.photos[0]}
                />
              )}
            </div>
            <h2 className="font-bold truncate ">{place.address}</h2>
            <h3 className="text-sm text-gray-500 leading-4">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
};

export default IndexPage;
