import { Avatar } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import axios from "../utils/axios";
import { useParams } from "react-router-dom";

const ProfileImage = () => {
  const [user, setUser] = useState({});
  const [profilePicture, setProfilePicture] = useState("");
  const fileInputRef = useRef(null);
  const params = useParams();
  const username = params.username;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/users?username=${username}`);
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [username]);

  useEffect(() => {
    if (user.profilePicture) {
      setProfilePicture(user.profilePicture);
    }
  }, [user.profilePicture]);

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];
    setProfilePicture(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = res.data.imageUrl;
      setProfilePicture(imageUrl);
      updateUserProfilePicture(imageUrl);
    } catch (error) {
      console.log(error);
    }
  };
  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const updateUserProfilePicture = async (imageUrl) => {
    try {
      await axios.put(`/users/${user._id}`, {
        profilePicture: imageUrl,
      });
      setUser((prevState) => ({
        ...prevState,
        profilePicture: imageUrl,
      }));
      console.log("Profile picture updated successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            className="w-full"
            src={
              user.coverPicture ||
              "https://plus.unsplash.com/premium_photo-1666792562882-8bd04befec7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=300&q=80"
            }
            alt="cover"
          />
          <Avatar
            className="absolute bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 left-1/2 transform -translate-x-1/2"
            style={{ height: "120px", width: "120px", cursor: "pointer" }}
            src={profilePicture || user.profilePicture || ""}
            alt="profile"
            onClick={handleAvatarClick}
          />
        </div>
        <div className="text-center -mt-20">
          <h1 className="bg-gradient-to-r from-red-500 via-rose-400 to-orange-500 bg-clip-text text-transparent text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-1">
            {user.username}
          </h1>
        </div>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
