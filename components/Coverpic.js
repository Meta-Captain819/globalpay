import React, { useState } from "react";

const EditableCoverPicture = ({ src, onSave }) => {
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
    <div className="relative h-48 w-full bg-cover bg-center rounded-md shadow-md">
      <div
        className="absolute inset-0 bg-cover bg-center rounded-md"
        style={{ backgroundImage: `url(${preview})` }}
      ></div>
      <label
        htmlFor="cover-upload"
        className="absolute top-4 right-4 bg-blue-600 text-white px-2 py-1 rounded cursor-pointer shadow hover:bg-blue-700"
      >
        ✎
        <input
          id="cover-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
      {file && (
        <button
          onClick={handleSave}
          className="absolute top-4 right-20 text-sm text-white bg-green-500 px-4 py-1 rounded shadow hover:bg-green-600"
        >
          Save
        </button>
      )}
    </div>
  );
};

export default EditableCoverPicture;
