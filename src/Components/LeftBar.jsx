import React, { useContext } from "react";
import { Avatar } from "@mui/material";
import { AuthContext } from "../context/AuthContext";
const LeftBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user.user.ProfilePicture);
  return (
    <div className="sticky dark:bg-slate-800 font-playfair text-slate-800 dark:text-green-400 overflow-y-scroll h-full top-8 mt-24 bg-white w-96 flex flex-col gap-2">
      <div className="overflow-hidden flex flex-col gap-5">
        <div className="flex flex-col gap-3 ml-2">
          <div className="flex items-center gap-2 mt-2 ">
            <Avatar
              src={user.user.ProfilePicture}
              className="h-8"
              sx={{
                bgcolor: "primary.main",
                color: "primary.contrastText",
                width: "2rem",
                height: "2rem",
              }}
            />
            <p>{user.user.username}</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/friendship.png"
              className="h-8"
              alt="friendship"
            />
            <p>Friends</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/meeting.png"
              className="h-8"
              alt="friendship"
            />
            <p>Groups</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/market.png"
              className="h-8"
              alt="friendship"
            />
            <p>Marketplace</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/wristwatch.png"
              className="h-8"
              alt="friendship"
            />
            <p>Watch</p>
          </div>
          <div className="flex items-center gap-2">
            {" "}
            <img
              src="/assests/images/amnesia.png"
              className="h-8"
              alt="friendship"
            />
            <p>Memories</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 ml-2">
          <p className="text-lg">Your shortcuts</p>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/calendar-event.png"
              alt="event"
              className="h-8"
            />
            <p>Events</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/joystick.png"
              className="h-8"
              alt="friendship"
            />
            <p>Gaming</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/gallery.png"
              className="h-8"
              alt="friendship"
            />
            <p>Gallery</p>
          </div>
          <div className="flex items-center gap-2 ">
            <img
              src="/assests/images/video-player.png"
              className="h-8"
              alt="friendship"
            />
            <p>Videos</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/assests/images/chat.png" className="h-8" alt="chat" />
            <p>Messages</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-2 ml-2">
          <p className="text-lg">Others</p>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/fundraiser.png"
              className="h-8"
              alt="fundraiser"
            />
            <p>Fundraiser</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/video-tutorials.png"
              className="h-8"
              alt="fundraiser"
            />
            <p>Tutorials</p>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assests/images/online-course.png"
              className="h-8"
              alt="fundraiser"
            />
            <p>Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
