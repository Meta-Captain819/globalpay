"use client";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
    const [profile, setprofile] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        profilePicture: "",
        coverPicture: "",
    });
    const [profilePreview, setProfilePreview] = useState(null);
    const [coverPreview, setCoverPreview] = useState(null);
    const [error, setError] = useState("");

    // Load saved data from localStorage on component mount
    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem("profile"));
        if (savedData) {
            setprofile(savedData);
            setProfilePreview(savedData.profilePicture);
            setCoverPreview(savedData.coverPicture);
        }
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setprofile({ ...profile, [name]: value });
    };

    // Handle file input changes for profile and cover pictures
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            const fileURL = URL.createObjectURL(files[0]);
            if (name === "profilePicture") {
                setProfilePreview(fileURL);
            } else if (name === "coverPicture") {
                setCoverPreview(fileURL);
            }
            setprofile({ ...profile, [name]: fileURL });
        }
    };

    // Form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        const { name, username, email, phone, profilePicture, coverPicture } = profile;
        if (!name || !username || !email || !phone || !profilePicture || !coverPicture) {
            setError("All fields are required.");
            return;
        }

        // Username validation: must contain both alphabets and numbers
        const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/;
        if (!usernameRegex.test(username)) {
            setError("Username must contain both alphabets and numbers.");
            return;
        }

        setError(""); // Clear any previous error

        // Save to localStorage
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

        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4">
              <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">

                {/* Name */}
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                    />
                </div>

                {/* Username */}
                <div className="mb-4">
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={profile.username}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                        title="Username must contain at least one letter and one number"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label className="block mb-2">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700 border border-gray-600"
                    />
                </div>

                {/* Profile Picture */}
                <div className="mb-4">
                    <label className="block mb-2">Profile Picture</label>
                    <input
                        type="file"
                        name="profilePicture"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 bg-gray-700 border border-gray-600"
                    />
                    {profilePreview && (
                        <img src={profilePreview} alt="Profile Preview" className="mt-4 w-32 h-32 rounded-full object-cover" />
                    )}
                </div>

                {/* Cover Picture */}
                <div className="mb-4">
                    <label className="block mb-2">Cover Picture</label>
                    <input
                        type="file"
                        name="coverPicture"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full p-2 bg-gray-700 border border-gray-600"
                    />
                    {coverPreview && (
                        <img src={coverPreview} alt="Cover Preview" className="mt-4 w-full h-32 object-cover rounded-lg" />
                    )}
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 rounded hover:bg-blue-600 transition"
                >
                    Save
                </button>
            </form>
            <ToastContainer />

        </div>
    );
};

export default ProfilePage;
