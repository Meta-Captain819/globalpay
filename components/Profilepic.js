import React, { useState } from "react";

const EditableProfilePicture = ({ src, onSave }) => {
  const [preview, setPreview] = useState(src);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSave = () => {
    if (file) {
      onSave(file); // Trigger the save logic in the parent
    }
  };

  return (
    <div className="relative w-24 h-24">
      <img
        src={preview}
        alt="Profile"
        className="w-full h-full rounded-full border-4 border-white shadow-md"
      />
      <label
        htmlFor="profile-upload"
        className="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full cursor-pointer shadow hover:bg-blue-700"
      >
        ✎
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      {file && (
        <button
          onClick={handleSave}
          className="mt-2 text-sm text-white bg-green-500 px-4 py-1 rounded shadow hover:bg-green-600"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default EditableProfilePicture;
