import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as svg from "../../assets/svg";

const AccountNav = () => {
  const { pathname } = useLocation();

  let subpage = pathname.split("/")[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  const linkClasses = (type = null) => {
    let classes = "inline-flex gap-1.5 py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    } else {
      classes += " bg-gray-200 rounded-full";
    }
    return classes;
  };
  return (
    <nav className="w-full flex mt-8 gap-2 justify-center">
      <Link to={"/account"} className={linkClasses("profile")}>
        <svg.UserIcon />
        My profile
      </Link>
      <Link to={"/account/bookings"} className={linkClasses("bookings")}>
        <svg.TicketIcon />
        My bookings
      </Link>
      <Link to={"/account/places"} className={linkClasses("places")}>
        <svg.HomeIcon />
        My accommodations
      </Link>
    </nav>
  );
};

export default AccountNav;
