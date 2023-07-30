import React, { useState } from "react";
import axios from "../../api/axios";

const PhotosUploaderForm = ({
  userInputs,
  setUserInputs,
  onChangeHandler,
  addedPhotos,
  setAddedPhotos,
}) => {
  const inputChangeHandler = (e) => {
    onChangeHandler(e);
  };

  const addPhotoByLinkHandler = async () => {
    try {
      const { data } = await axios.post(
        "/upload-by-link",
        JSON.stringify({ link: userInputs.photoLink })
      );
      setAddedPhotos((prev) => {
        return [...prev, data.filename];
      });
      setUserInputs({ ...userInputs, photoLink: "" });
    } catch (error) {
      console.log("error", error);
    }
  };

  const uploadPhotoHandler = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    try {
      const data = new FormData();
      console.log(typeof files);

      for (let i = 0; i < files.length; i++) {
        data.append("photos", files[i]);
      }

      const response = await axios.post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { data: filename } = response.data;
      setAddedPhotos((prev) => {
        return [...prev, ...filename];
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="text-lg mt-4 ml-1 font-semibold">Photos</h2>
      <div className="flex gap-2">
        <input
          type="text"
          value={userInputs.photoLink}
          onChange={inputChangeHandler}
          name="photoLink"
          placeholder="Add using a link ....jpg"
        />
        <button
          className="bg-gray-200 px-4 rounded-2xl"
          type="button"
          onClick={addPhotoByLinkHandler}
        >
          Add&nbsp;Photo
        </button>
      </div>
      <p className="text-gray-500 ml-1 font-semibold text-xs">
        "more == better"
      </p>

      <div className="mt-3 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {addedPhotos.length > 0 &&
          addedPhotos.map((link) => (
            <div
              key={link.split(".")[0]}
              className="h-32  border rounded-2xl flex"
            >
              <img
                src={"http://localhost:8000/uploads/" + link}
                className="rounded-2xl w-full object-cover "
              />
            </div>
          ))}
        <label className=" h-32 flex justify-center items-center gap-2 border bg-transparent rounded-2xl text-xl text-gray-600 cursor-pointer">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhotoHandler}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
            />
          </svg>
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploaderForm;
