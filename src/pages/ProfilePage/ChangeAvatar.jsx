import React, { useState } from "react";
import { motion } from "framer-motion";

const ChangeAvatar = ({ avatar, onChange }) => {
  const [preview, setPreview] = useState(avatar);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onChange(file);
    }
  };

  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-lg shadow-neu rounded-2xl p-6 flex flex-col items-center gap-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Profile Picture</h2>
      <img src={preview} alt="Avatar" className="w-32 h-32 rounded-full object-cover shadow-md" />
      <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2" />
    </div>
  );
};

export default ChangeAvatar;
