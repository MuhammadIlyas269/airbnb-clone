import React, { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "../api/axios";

const AccountPage = () => {
  const [redirect, setRedirect] = useState(false);
  const { ready, user, setUser } = useContext(UserContext);
  let { subpage } = useParams();

  if (subpage === undefined) {
    subpage = "profile";
  }

  const logoutHandler = async () => {
    try {
      const response = await axios.post("/logout");
      console.log(response);
      setRedirect(true);
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  if (!ready) {
    return "Loading";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  const linkClasses = (type = null) => {
    let classes = "py-2 px-6";
    if (type === subpage) {
      classes += " bg-primary text-white rounded-full";
    }
    return classes;
  };
  return (
    <div>
      <nav className="w-full flex mt-8 gap-2 justify-center">
        <Link to={"/account"} className={linkClasses("profile")}>
          My profile
        </Link>
        <Link to={"/account/bookings"} className={linkClasses("bookings")}>
          My bookings
        </Link>
        <Link to={"/account/places"} className={linkClasses("places")}>
          My accommodations
        </Link>
      </nav>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name}({user.email}) <br />
          <button className="primary max-w-sm mt-2" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
