"use client";
import React, { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    profilePicture: "",
    coverPicture: "",
    username:"",
  });
  const [payments, setPayments] = useState([]);

 
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};
    const storedPayments = JSON.parse(localStorage.getItem("payment")) || [];
    setProfile(storedProfile);
    setPayments(storedPayments);
  }, []);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

 
  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prev) => ({ ...prev, [type]: reader.result }));
      };
      reader.readAsDataURL(file);
    }

  };

 
  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    toast('Saved Successfully', {
      position: 'top-right',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      theme: 'dark',
    });
  };

  return (
    <div className="p-6">
      {/* Cover Picture Section */}
      <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
        {profile.coverPicture && (
          <img
            src={profile.coverPicture}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        )}
        <label className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded cursor-pointer hover:bg-gray-500">
        <img src="/edit.svg" alt="" width={10} height={10}/>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, "coverPicture")}
            />
        </label>
      </div>

      {/* Profile Picture Section */}
      <div className="relative w-28 h-28 mx-auto mt-[-48px] bg-gray-200 rounded-full overflow-hidden border-4 border-white ">
        {profile.profilePicture && (
          <img
          src={profile.profilePicture}
          alt="Profile"
          className="w-full h-full object-cover"
          />
        )}
        <label className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-500">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleImageUpload(e, "profilePicture")}
            />
          <img src="/edit.svg" alt="" width={10} height={10}/>
        </label>
      </div>
    {/* User Details */}
    <div className="mt-6 text-center">
        <h2 className="text-2xl font-bold text-white">
          {profile.name || "Your Name"}
        </h2>
        <p className="text-white mt-2">@{profile.username && profile.username}</p>
        <p className="text-white mt-2">{profile.email || "email@example.com"}</p>
      </div>

            {/* Payment Details Section */}
     

      <div className="bg-gray-800 text-white p-6 mt-6 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Payment Details</h2>
        {payments.length > 0 ? (
          payments.map((payment, index) => (
            <div
              key={index}
              className="p-4 mb-4 bg-gray-700 rounded shadow flex flex-col space-y-2"
            >
              <p>
                <span className="font-semibold">Method:</span>{" "}
                {payment.selectedMethod}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> {payment.amount}{payment.selectedMethod === "Wallet" ? " USD" : " PKR"}
              </p>
              <p>
                <span className="font-semibold">Send to:</span> {payment.name}
              </p>
              <p>
                <span className="font-semibold">Transaction ID:</span>{" "}
                {payment.transactionId}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No payments made.</p>
        )}
      </div>

              {/* Editable Profile Details */}


        <form id="myform">
      <div className="bg-gray-800 text-white p-6 mt-6 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Profile Details</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Username</label>
            <input
              type="text"
              name="username"
              value={profile.username}
              pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$"
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Enter your username"
              required
              title="Username must contain at least one letter and one number"
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded bg-gray-700 text-white"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        <button
          onClick={saveProfile}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Profile
        </button>
      </div>
    </form>
    <ToastContainer />

    </div>
  );
};

export default ProfilePage;
