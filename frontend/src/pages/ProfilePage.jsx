import React, { useContext, useState } from "react";
import { UserContext } from "../store/UserContext";
import { Navigate, Link, useParams } from "react-router-dom";
import axios from "../api/axios";
import PlacesPage from "./PlacesPage";
import AccountNav from "../components/account-page/AccountNav";

const ProfilePage = () => {
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

  return (
    <div>
      <AccountNav />
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name}({user.email}) <br />
          <button className="primary max-w-sm mt-2" onClick={logoutHandler}>
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
};

export default ProfilePage;
