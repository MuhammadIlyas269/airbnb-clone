import React, { useState } from "react";
import axios from "../../api/axios";
import * as svg from "../../assets/svg";

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

  const removePhoto = async (ev, filename) => {
    ev.preventDefault();
    setAddedPhotos((prev) => {
      return [...prev.filter((photo) => photo !== filename)];
    });
  };

  const selectAsMainPhoto = async (ev, filename) => {
    ev.preventDefault();
    setAddedPhotos((prev) => {
      return [filename, ...prev.filter((photo) => photo !== filename)];
    });
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
              className="h-32  border rounded-2xl flex relative"
            >
              <img
                src={"http://localhost:8000/uploads/" + link}
                className="rounded-2xl w-full object-cover "
              />
              <button
                onClick={(ev) => removePhoto(ev, link)}
                className="cursor-pointer absolute bottom-1 right-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
              >
                <svg.TrashIcon />
              </button>
              <button
                onClick={(ev) => selectAsMainPhoto(ev, link)}
                className="cursor-pointer absolute bottom-1 left-1 text-white bg-black bg-opacity-50 rounded-2xl py-2 px-3"
              >
                {link === addedPhotos[0] && <svg.StarFilledIcon />}
                {link !== addedPhotos[0] && <svg.StarIcon />}
              </button>
            </div>
          ))}
        <label className=" h-32 flex justify-center items-center gap-2 border bg-transparent rounded-2xl text-xl text-gray-600 cursor-pointer">
          <input
            type="file"
            multiple
            className="hidden"
            onChange={uploadPhotoHandler}
          />
          <svg.UploadIcon />
          Upload
        </label>
      </div>
    </>
  );
};

export default PhotosUploaderForm;
