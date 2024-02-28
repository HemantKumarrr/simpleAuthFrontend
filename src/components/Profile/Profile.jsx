import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("https://simpleauthbackend.onrender.com/logout", { credentials: "include" });
      localStorage.clear();
      navigate("/signup");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await fetch(`https://simpleauthbackend.onrender.com/profile/${userInfo.uid}`, {
        method: "Delete",
        credentials: "include",
      });
      localStorage.clear();
      navigate("/signup");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="w-full px-6">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Profile</h2>
            <div className="w-full flex justify-center items-center gap-4 font-bold border border-zinc-500 rounded-md bg-zinc-300 py-1">
              Username : <p className="flex justify-between" >{userInfo.name}</p>
            </div>
            <div className="w-full flex justify-center items-center gap-4 font-bold border border-zinc-500 rounded-md bg-zinc-300 py-1 mt-4">
              Email : <p>{userInfo.email}</p>
            </div>

            <button
              className="w-full bg-gradient-to-r from-red-800 to-red-600 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 hover:to-red-600 transition ease-in-out duration-150"
              onClick={handleLogout}
            >
              Log Out
            </button>
            <button
              className="text-sm bg-gradient-to-r from-zinc-800 to-zinc-800 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-black hover:to-bg-black active:scale-90 transition ease-in-out duration-150"
              onClick={handleDeleteAccount}
            >
              Delete my account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
