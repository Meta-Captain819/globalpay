"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";


const Dashboard = () => {
  const [savedData, setSavedData] = useState(null);
  const [usernameStatus, setUsernameStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    easypaisa: "",
    wallet: "",
    profilePicture: null,
    coverPicture: null,
    username: "",
  });

  const [previews, setPreviews] = useState({
    profilePicture: null,
    coverPicture: null,
  });

  // Set initial form data based on session data
  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || "",
        email: session.user.email || "",
        username: session.user.username || "",
        profilePicture: session.user.profilePicture || "",
        coverPicture: session.user.coverPicture || "",
      });
      setPreviews({
        profilePicture: session.user.profilePicture || null,
        coverPicture: session.user.coverPicture || null,
      });
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];

    if (file) {
      setFormData((prev) => ({ ...prev, [name]: file }));
      const reader = new FileReader();

      // Generate a preview for images
      reader.onload = () => {
        setPreviews((prev) => ({ ...prev, [name]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const checkUsername = async () => {
    if (!formData.username) return; // If the username is empty, exit early

    setLoading(true); // Set loading state to true while fetching

    try {
      // Make an API request to check if the username is available
      const response = await fetch(`/api/check-username?username=${formData.username}`);

      // Ensure the response is valid and contains the data we expect
      if (response.ok) {
        const data = await response.json();

        // Update the state based on the response from the backend
        setUsernameStatus(data.available ? "available" : "unavailable");
      } else {
        // Handle non-OK responses
        setUsernameStatus("error");
        console.error("Error checking username:", response.statusText);
      }
    } catch (error) {
      // Handle errors in the API call
      console.error("Error checking username:", error);
      setUsernameStatus("error");
    } finally {
      setLoading(false); // Set loading state back to false after the request
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    setSavedData(formData); // Save the form data
  
    // Update session after form submission
    await signIn("credentials", { redirect: false, ...formData });
  
    alert("Data Saved Successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 shadow-md rounded text-white"
    >
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>

      <div className="mb-4">
        <label className="block">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block">Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded text-black"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block">Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          onBlur={checkUsername}
          className={`text-black w-full px-4 py-2 border rounded ${
            usernameStatus === "available"
              ? "border-green-500"
              : usernameStatus === "unavailable"
              ? "border-red-500"
              : ""
          }`}
          required
        />
        {loading && <p className="text-blue-500 mt-1">Checking...</p>}
        {usernameStatus === "available" && (
          <p className="text-green-500 mt-1">Username is available!</p>
        )}
        {usernameStatus === "unavailable" && (
          <p className="text-red-500 mt-1">Username is already taken.</p>
        )}
        {usernameStatus === "error" && (
          <p className="text-red-500 mt-1">Error checking username.</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block">Easypaisa Account Number:</label>
        <input
          type="text"
          name="easypaisa"
          value={formData.easypaisa}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block">Wallet Address:</label>
        <input
          type="text"
          name="wallet"
          value={formData.wallet}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded text-black"
        />
      </div>

      {/* Profile Picture Input */}
      <div className="mb-4">
        <label className="block">Profile Picture:</label>
        <input
          type="file"
          name="profilePicture"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded"
        />
        {previews.profilePicture ? (
          <img
            src={previews.profilePicture}
            alt="Profile Preview"
            className="mt-2 w-20 h-20 object-cover rounded-full"
          />
        ) : (
          formData.profilePicture && (
            <p className="mt-2">{formData.profilePicture.name}</p>
          )
        )}
      </div>

      {/* Cover Picture Input */}
      <div className="mb-4">
        <label className="block">Cover Picture:</label>
        <input
          type="file"
          name="coverPicture"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded"
        />
        {previews.coverPicture ? (
          <img
            src={previews.coverPicture}
            alt="Cover Preview"
            className="mt-2 w-full h-32 object-cover rounded"
          />
        ) : (
          formData.coverPicture && (
            <p className="mt-2">{formData.coverPicture.name}</p>
          )
        )}
      </div>

      <button
        type="submit"
        className="w-full text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Save
      </button>
    </form>
  );
};

export default Dashboard;
