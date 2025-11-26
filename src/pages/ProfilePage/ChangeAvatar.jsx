import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Loader2 } from "lucide-react";
import { useUpdateImageMutation } from "../../redux/user/userApi";
import handleSuccessToast from "../../components/HandleSuccessToast";

const ChangeAvatar = ({ avatar }) => {
  console.log("avatar image into change avatar", avatar)
  const [preview, setPreview] = useState(avatar);
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);
  const [updateImage] = useUpdateImageMutation()
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    console.log("file is this ", file)
    if (!file) return;

    // Preview selected image
    setPreview(URL.createObjectURL(file));
    const formData = new FormData();
    formData.append("avatar", file);
    // Show loading animation
    setLoading(true);
    const response = await updateImage(formData)
    if (response) {
      handleSuccessToast("Profile Image is Update Successfully")
      setLoading(false);
    }
    // Simulate upload time so loading animation works


  };
  // 🔥 Fix: Sync preview with avatar prop
  useEffect(() => {
    if (avatar) {
      setPreview(avatar);
    }
  }, [avatar]);
  return (
    <div className="bg-white/30 dark:bg-black/30 backdrop-blur-xl shadow-neu rounded-2xl p-6 flex flex-col items-center gap-4">

      <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
        Profile Picture
      </h2>

      <div className="relative group w-32 h-32">
        {/* Avatar preview */}
        <img
          src={preview}
          alt="avatar"
          className="w-full h-full rounded-full object-cover shadow-lg"
        />

        {/* Hover Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 
                     bg-black/50 rounded-full flex items-center justify-center 
                     cursor-pointer transition"
          onClick={() => fileRef.current?.click()}
        >
          <div className="text-white flex items-center gap-2 text-sm">
            <Camera size={18} />
            Update
          </div>
        </motion.div>

        {/* Loading Spinner */}
        <AnimatePresence>
          {loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 bg-white/60 dark:bg-black/40 
                         rounded-full flex items-center justify-center"
            >
              <Loader2 className="animate-spin text-teal-500" size={28} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hidden File Input */}
        <input
          type="file"
          ref={fileRef}
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ChangeAvatar;
