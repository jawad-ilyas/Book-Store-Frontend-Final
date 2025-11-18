import React, { useState } from "react";
import ChangeAvatar from "./ChangeAvatar";
import UserInfoForm from "./UserInfoForm";
import ChangePassword from "./ChangePassword";
import UserReviews from "./UserReviews";

// Example user data
const mockUser = {
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80",
  reviews: [
    { bookTitle: "Atomic Habits", rating: 5, comment: "Amazing book!" },
    { bookTitle: "Educated", rating: 4, comment: "Very inspiring." },
  ],
};

const ProfilePage = () => {
  const [user, setUser] = useState(mockUser);

  const handleUpdateInfo = (data) => setUser(prev => ({ ...prev, ...data }));
  const handleAvatarChange = (file) => console.log("New avatar file:", file);
  const handlePasswordChange = (data) => console.log("Change password:", data);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">My Profile</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Avatar & User Info */}
        <div className="flex-1 flex flex-col gap-6">
          <ChangeAvatar avatar={user.avatar} onChange={handleAvatarChange} />
          <UserInfoForm user={user} onUpdate={handleUpdateInfo} />
          <ChangePassword onPasswordChange={handlePasswordChange} />
        </div>

        {/* Right: User Reviews */}
        <div className="flex-1">
          <UserReviews reviews={user.reviews} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
