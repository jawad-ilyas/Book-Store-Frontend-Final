import React, { useState } from "react";
import ChangeAvatar from "./ChangeAvatar";
import UserInfoForm from "./UserInfoForm";
import ChangePassword from "./ChangePassword";
import UserReviews from "./UserReviews";
import { useGetProfileQuery } from "../../redux/user/userApi";



const ProfilePage = () => {
  // const [user, setUser] = useState(mockUser);

  const avatar = "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=200&q=80";
  const { data } = useGetProfileQuery()
  // console.log("user profile page", data)
  const user = data?.user || {}
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500 px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">My Profile</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Avatar & User Info */}
        <div className="flex-1 flex flex-col gap-6">
          <ChangeAvatar avatar={user?.avatar != "" ? user?.avatar : avatar} />
          <UserInfoForm user={user} />
          {/* <ChangePassword onPasswordChange={handlePasswordChange} /> */}
        </div>

        {/* Right: User Reviews */}
        <div className="flex-1">
          <UserReviews />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
