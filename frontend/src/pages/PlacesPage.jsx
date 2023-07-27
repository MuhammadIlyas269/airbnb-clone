import React from "react";
import { Link, useParams } from "react-router-dom";

const PlacesPage = () => {
  const { action } = useParams();

  const addNewPlace = (
    <div className="text-center">
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
  );

  const placeForm = (
    <div>
      <form>
        <h2 className="text-lg mt-4 ml-1 font-semibold">Title</h2>
        <input type="text" placeholder="title, fore example: my apartment" />
        <p className="text-gray-500 ml-1 font-semibold text-xs">
          Title for your place, should be short and catchy as in advertisement
        </p>
        <h2 className="text-lg mt-4 ml-1 font-semibold">Address</h2>
        <input type="text" placeholder="address" />
        <p className="text-gray-500 ml-1 font-semibold text-xs">
          Address of your place
        </p>
        <h2 className="text-lg mt-4 ml-1 font-semibold">Photos</h2>
        <p className="text-gray-500 ml-1 font-semibold text-xs">
          more == better
        </p>
        <div className="flex gap-2">
          <input type="text" placeholder="Add using a link ....jpg" />
          <button className="bg-gray-200 px-4 rounded-2xl">
            Add&nbsp;Photo
          </button>
        </div>
        <div className="mt-3 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          <button className="flex justify-center gap-2 border bg-transparent rounded-2xl py-5 text-xl text-gray-600">
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
          </button>
        </div>
        <h2 className="text-lg mt-4 ml-1 font-semibold">Description</h2>
        <p className="text-gray-500 ml-1 font-semibold text-xs">
          description of the places
        </p>
        <textarea />
        <h2 className="text-lg mt-4 ml-1 font-semibold">Perks</h2>
        <p className="text-gray-500 ml-1 font-semibold text-xs">
          select all the perks of your place
        </p>
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mt-3">
          <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" />
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
                d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
              />
            </svg>
            <span>Wifi</span>
          </label>
          <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" />
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
                d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>

            <span>Free parking spot</span>
          </label>
          <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" />
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
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>

            <span>Pet</span>
          </label>
          <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" />
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
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>

            <span>TV</span>
          </label>
          <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" />
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
                d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>

            <span>Radio</span>
          </label>
          <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
            <input type="checkbox" />
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
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
              />
            </svg>
            <span>Private Entrance</span>
          </label>
        </div>
        <h2 className="text-lg mt-4 ml-1 font-semibold">Extra info</h2>
        <p className="text-gray-500 ml-1 font-semibold text-xs">
          house rules, etc
        </p>
        <textarea />
        <h2 className="text-lg mt-4 ml-1 font-semibold">Check in&out times</h2>
        <p className="text-gray-500 ml-1 font-semibold text-xs">
          add check in and out times, remember to have some time window for
          cleaning the room between guests
        </p>
        <div className="grid gap-2 sm:grid-cols-3">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input type="text" placeholder="14:00" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input type="text" placeholder="20:00" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input type="text" placeholder="2" />
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  );
  return (
    <div className="mt-8">
      {action !== "new" && addNewPlace}
      {action === "new" && placeForm}
    </div>
  );
};

export default PlacesPage;
