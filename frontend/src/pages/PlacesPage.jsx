import React from "react";
import { Link, useParams } from "react-router-dom";
import * as components from "../components";
import AccountNav from "../components/account-page/AccountNav";

const PlacesPage = () => {
  return (
    <>
      <AccountNav />

      <div className="text-center mt-8">
        <Link
          to={"/account/places/new"}
          className=" inline-flex bg-primary gap-1 text-white rounded-full py-2 px-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v12m6-6H6"
            />
          </svg>
          Add new place
        </Link>
      </div>
    </>
  );
};

export default PlacesPage;
