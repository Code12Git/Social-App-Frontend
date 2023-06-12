import React, { useEffect, useState } from "react";
import LeftBar from "../Components/LeftBar";
import ProfileImage from "../Components/ProfileImage";
import axios from "../utils/axios";
import Feed from "../Components/Feed";
import RightBar from "../Components/RightBar";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});

  const username = useParams().username;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };

    fetchData();
  }, [username]);

  return (
    <div className="flex dark:bg-neutral-800 ">
      <LeftBar />
      <div>
        <ProfileImage />
        <div className="flex justify-around">
          <Feed username={username} />
          <RightBar user={user} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
