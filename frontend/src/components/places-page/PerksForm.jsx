import React from "react";
import * as svg from "../../assets/svg";

const PerksForm = ({ selected, onChangeHandler }) => {
  const inputChangeHandler = (e) => {
    onChangeHandler(e);
  };

  const isChecked = (element) => {
    return selected.includes(element);
  };

  return (
    <>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-3">
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked("wifi")}
            name="wifi"
            onChange={inputChangeHandler}
          />
          <svg.WifiIcon />
          <span>Wifi</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked("parking")}
            name="parking"
            onChange={inputChangeHandler}
          />
          <svg.VehicleIcon />
          <span>Free parking spot</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked("pet")}
            name="pet"
            onChange={inputChangeHandler}
          />
          <svg.GifIcon />
          <span>Pet</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked("tv")}
            name="tv"
            onChange={inputChangeHandler}
          />
          <svg.TvIcon />
          <span>TV</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked("radio")}
            name="radio"
            onChange={inputChangeHandler}
          />
          <svg.RadioIcon />
          <span>Radio</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked("entrance")}
            name="entrance"
            onChange={inputChangeHandler}
          />
          <svg.ArrowRightIcon />
          <span>Private Entrance</span>
        </label>
      </div>
    </>
  );
};

export default PerksForm;
