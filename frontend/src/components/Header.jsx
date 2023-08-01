import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import * as svg from "../assets/svg";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <header className="flex justify-between">
      <Link to={"/"} className="flex items-center gap-1">
        <svg.Logo />
        <span className="font-bold text-xl">airbnb</span>
      </Link>
      <div className="flex gap-2 border border-gray-300 rounded-full px-5 py-1.5 shadow-sm ">
        <div className="font-semibold pr-2">Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div className="font-semibold px-2">Any Week</div>
        <div className="border-l border-gray-300"></div>
        <div className="font-normal text-gray-400 px-2">Add guests</div>
        <button className="bg-primary text-white  p-2 rounded-full">
          <svg.SearchIcon />
        </button>
      </div>
      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2"
      >
        <svg.BarsIcon />
        <div className="bg-gray-500 rounded-full text-white border border-gray-500 overflow-hidden">
          <svg.ProfileIcon />
        </div>
        {!!user && <div>{user.name}</div>}
      </Link>
    </header>
  );
};

export default Header;
