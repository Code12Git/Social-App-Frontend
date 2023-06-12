import React, { useContext, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import axios from "../utils/axios";
import { PF } from "../config/config";
import { AuthContext } from "../context/AuthContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const RightBar = ({ user }) => {
  const [friends, setFriends] = useState([]);
  const { userfollows, setUserFollows } = useState([]);

  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.user.followings.includes(user?.id)
  );

  // useEffect(() => {
  //   const getusers = async () => {
  //     const res = await axios.get("/users/all");
  //     setUserFollows(res.data);
  //     console.log(res.data);
  //   };
  //   getusers();
  // }, []);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
        console.log(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };

    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/unfollow/${user._id}`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/follow/${user._id}`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightBar = () => {
    return (
      <div className=" flex ml-10 mt-28 flex-col gap-5 font-playfair ">
        <div className="flex flex-col dark:text-white bg-white p-4 rounded-md w-full md:w-96 gap-5 dark:bg-slate-800 ">
          <p>Suggestions For You</p>

          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-2">
              <Avatar src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg" />
              <p>mayur45</p>
            </div>
            <div className="flex gap-2">
              <button className="bg-purple-500 rounded-md p-1 hover:bg-purple-900 text-white">
                Follow
              </button>
              <button className="bg-red-500 rounded-md p-1 hover:bg-red-900 text-white">
                Dismiss
              </button>
            </div>
          </div>

          {/* This is Latest Activities */}
          <div className="bg-white rounded-md ">
            <div className="flex flex-col bg-white p-4 rounded-md w-full md:w-96 gap-5 dark:bg-slate-800">
              <p>Latest Activities</p>
              <div className="flex items-center flex-wrap justify-between">
                <div className="flex items-center gap-2  flex-wrap ">
                  <Avatar src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                  <p className="dark:text-white">Andrea</p>
                  <p className="text-slate-400">poster a new photo.</p>
                </div>
                <div>
                  <p className="text-slate-400">1 min ago.</p>
                </div>
              </div>
              <div className="flex items-center flex-wrap justify-between ">
                <div className="flex items-center gap-2  flex-wrap">
                  <Avatar src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=399&q=80" />
                  <p className="dark:text-white">Walker</p>
                  <p className="text-slate-400">liked a post.</p>
                </div>
                <div>
                  <p className="text-slate-400">5 min ago.</p>
                </div>
              </div>
              <div className="flex items-center flex-wrap justify-between ">
                <div className="flex items-center gap-2  flex-wrap">
                  <Avatar src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" />
                  <p className="dark:text-white">Drew</p>
                  <p className="text-slate-400">comment on your post.</p>
                </div>
                <div>
                  <p className="text-slate-400">10 min ago.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Online Friends */}
          <div className="bg-white rounded-md ">
            <div className="flex flex-col bg-white p-4 rounded-md w-full md:w-96 gap-5 dark:bg-slate-800">
              <p>Online Friends</p>
              <div className="flex items-center gap-2">
                <div style={{ position: "relative" }}>
                  <Avatar src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "32px",
                      right: "5px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                    }}
                  />
                </div>
                <p className="dark:text-white">Collins Fischer</p>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ position: "relative" }}>
                  <Avatar src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "32px",
                      right: "5px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                    }}
                  />
                </div>
                <p className="dark:text-white">Christena Mills</p>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ position: "relative" }}>
                  <Avatar src="https://images.unsplash.com/photo-1494959764136-6be9eb3c261e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "32px",
                      right: "5px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                    }}
                  />
                </div>
                <p className="dark:text-white">Lindsey Davidson</p>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ position: "relative" }}>
                  <Avatar src="https://plus.unsplash.com/premium_photo-1669750817148-64d1ab90b053?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "32px",
                      right: "5px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                    }}
                  />
                </div>
                <p className="dark:text-white">Leana Frazier</p>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ position: "relative" }}>
                  <Avatar src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "32px",
                      right: "5px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                    }}
                  />
                </div>
                <p className="dark:text-white">Walker Curry</p>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ position: "relative" }}>
                  <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80" />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "32px",
                      right: "5px",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      backgroundColor: "green",
                    }}
                  />
                </div>
                <p className="dark:text-white">Amilla Lawrence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="w-full mt-8 flex flex-col gap-4 dark:text-gray-300">
          {user.username !== currentUser.user.username && (
            <button className="bg-purple-500 rounded-md hover:bg-purple-900 p-1 text-white cursor-pointer">
              {followed ? (
                <span className="text-red-700 text-lg">Unfollow</span>
              ) : (
                <span className="text-blue-800 text-lg">Follow</span>
              )}
              {followed ? <RemoveIcon /> : <AddIcon />}
            </button>
          )}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-xl font-playfair">User Information</p>
            <p>
              <span className="text-gray-500">City:</span> &nbsp;{" "}
              <span className="text-slate-800 font-playfair text-md dark:text-gray-300">
                {user.city}
              </span>
            </p>

            <p>
              <span className="text-gray-500 ">From:</span> &nbsp;{" "}
              <span className=" dark:text-gray-300 text-slate-800 font-playfair text-md">
                {user.from}
              </span>
            </p>
            <p>
              <span className="text-gray-500">Relationship:</span> &nbsp;{" "}
              <span className="font-playfair text-md">
                {" "}
                {user.relationship === 1
                  ? "Single"
                  : user.relationship === 1
                  ? "Married"
                  : "-"}
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-bold text-xl font-playfair">User friends</p>
            {friends.map((friend) => (
              <>
                <NavLink to={"/profile/" + friend.username}>
                  <div className="flex flex-wrap gap-5">
                    <div className="flex flex-col items-center">
                      <Avatar
                        src={
                          friend?.profilePicture
                            ? PF + friend.profilePicture
                            : ""
                        }
                        alt="person"
                        style={{ height: "60px", width: "60px" }}
                      />
                      <p className=" dark:text-gray-300 text-md text-red-600 text-lg font-playfair">
                        {friend.username}
                      </p>
                    </div>
                  </div>
                </NavLink>
              </>
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div>{user ? <ProfileRightbar /> : <HomeRightBar />}</div>
    </div>
  );
};
export default RightBar;
