import React, { useState } from "react";
import * as svg from "../../assets/svg";

const PlaceGallery = ({ place }) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div>
            <h2 className="text-3xl mr-48">Photos of {place.title}</h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black"
            >
              <svg.CloseIcon />
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div key={photo}>
                <img
                  className="aspect-square cursor-pointer object-cover"
                  src={"http://localhost:8000/uploads/" + photo}
                  alt=""
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative top-3 ">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <img
                className="aspect-square cursor-pointer object-cover"
                src={"http://localhost:8000/uploads/" + place.photos[0]}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="grid">
          <div>
            {place.photos?.[1] && (
              <img
                className="aspect-square cursor-pointer object-cover"
                src={"http://localhost:8000/uploads/" + place.photos[1]}
                alt=""
              />
            )}
          </div>
          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <img
                className="aspect-square cursor-pointer object-cover relative top-1.5 "
                src={"http://localhost:8000/uploads/" + place.photos[2]}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="absolute flex gap-1 bottom-1.5  right-2 text-sm  py-2 px-4 bg-white rounded-xl shadow shadow-md shadow-gray-500"
      >
        <svg.ImageIcon />
        Show more photos
      </button>
    </div>
  );
};

export default PlaceGallery;
