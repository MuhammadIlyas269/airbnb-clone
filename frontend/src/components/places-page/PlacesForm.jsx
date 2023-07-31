import React, { useState } from "react";
import PhotosUploaderForm from "./PhotosUploaderForm";
import PerksForm from "./PerksForm";
import axios from "../../api/axios";
import { Navigate, useParams } from "react-router-dom";
import AccountNav from "../account-page/AccountNav";

const PlacesForm = () => {
  const { id } = useParams();
  console.log("Id", id);
  const [userInputs, setUserInputs] = useState({
    title: "",
    address: "",
    photoLink: "",
    description: "",
    extraInfo: "",
    checkIn: "",
    checkOut: "",
    maxGuests: 1,
  });
  const [perks, setPerks] = useState([]);
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [redirect, setRedirect] = useState(false);
  console.log(typeof perks);
  function inputHeader(text) {
    return <h2 className="text-lg mt-4 ml-1 font-semibold">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-500 ml-1 font-semibold text-xs">{text}</p>;
  }

  const inputChangeHandler = (e) => {
    e.preventDefault();

    if (e.target.type === "checkbox") {
      const { name, checked } = e.target;
      if (checked) {
        setPerks([...perks, name]);
      } else {
        setPerks([...perks.filter((item) => item !== name)]);
      }
    } else {
      setUserInputs({
        ...userInputs,
        [e.target.name]: e.target.value,
      });
    }
  };

  const addNewPlace = async (e) => {
    e.preventDefault();
    const { photoLink, ...new_inputs } = userInputs;
    const placeData = { ...new_inputs, perks, photos: addedPhotos };
    await axios.post("/places", JSON.stringify(placeData));
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <>
      <AccountNav />
      <form onSubmit={addNewPlace}>
        {inputHeader("Title")}
        <input
          type="text"
          value={userInputs.title}
          name="title"
          onChange={inputChangeHandler}
          placeholder="title, fore example: my apartment"
        />
        {inputDescription(
          "Title for your place, should be short and catchy as in advertisement"
        )}

        {inputHeader("Address")}
        <input
          type="text"
          value={userInputs.address}
          name="address"
          onChange={inputChangeHandler}
          placeholder="address"
        />
        {inputDescription("Address of your place")}

        <PhotosUploaderForm
          userInputs={userInputs}
          setUserInputs={setUserInputs}
          addedPhotos={addedPhotos}
          setAddedPhotos={setAddedPhotos}
          onChangeHandler={inputChangeHandler}
        />

        {inputHeader("Description")}
        <textarea
          value={userInputs.description}
          name="description"
          onChange={inputChangeHandler}
        />
        {inputDescription("description of the places")}

        {inputHeader("Perks")}
        {inputDescription(" select all the perks of your place")}
        <PerksForm selected={perks} onChangeHandler={inputChangeHandler} />

        {inputHeader("Extra info")}
        <textarea
          value={userInputs.extraInfo}
          name="extraInfo"
          onChange={inputChangeHandler}
        />
        {inputDescription("Please mention house rules, etc")}

        {inputHeader("Check in&out times")}
        {inputDescription(
          "add check in and out times, remember to have some time window for cleaning the room between guests"
        )}
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input
              type="text"
              value={userInputs.checkIn}
              name="checkIn"
              onChange={inputChangeHandler}
              placeholder="14:00"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input
              type="text"
              value={userInputs.checkOut}
              name="checkOut"
              onChange={inputChangeHandler}
              placeholder="20:00"
            />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input
              type="number"
              value={userInputs.maxGuests}
              name="maxGuests"
              onChange={inputChangeHandler}
              placeholder="2"
            />
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </>
  );
};

export default PlacesForm;
