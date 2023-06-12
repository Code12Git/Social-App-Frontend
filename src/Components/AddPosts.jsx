import { Avatar } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "../utils/axios";
import CancelIcon from "@mui/icons-material/Cancel";
import { NavLink } from "react-router-dom";

const AddPosts = () => {
  const { user } = useContext(AuthContext);
  const desc = useRef();
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);

  const clickChangeHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user.user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = file.name;

      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post("/upload", data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      await axios.post("/post", newPost);
      console.log(newPost);
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-400 w-full  mt-4 p-5 rounded-md h-52">
      <div className="flex flex-col">
        <div className="flex gap-3 h-32 items-center">
          <NavLink to={`/profile/${user.user.username}`}>
            <Avatar
              className="h-5 w-5"
              src={user.user.profilePicture ? user.user.profilePicture : ""}
            />
          </NavLink>
          <div className="flex flex-col w-full">
            <input
              type="text"
              className="outline-none w-full font-playfair dark:bg-slate-400 placeholder:dark:text-orange-800"
              ref={desc}
              placeholder={"What's on your mind " + user.user.username + " ?"}
            />

            {file && (
              <div className="w-96">
                <img
                  className="h-20 w-20"
                  src={URL.createObjectURL(file)}
                  alt=" "
                />
                <CancelIcon
                  className="h-10 w-10"
                  onClick={() => setFile(null)}
                />
              </div>
            )}
          </div>
        </div>
        <hr className="mb-2" />

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <img
                src="/assests/images/gallery.png"
                className="h-5 w-5 "
                alt="gallery"
              />
              <label
                htmlFor="file"
                className="file-input-label cursor-pointer hover:text-red-400"
              >
                Add Image
                <input
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  className="file-input hidden"
                  ref={fileInputRef}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/assests/images/pin.png"
                className="h-5 w-5 cursor-pointer"
                alt="gallery"
              />
              <p>Add Place</p>
            </div>
            <div className="flex items-center gap-1">
              <img
                src="/assests/images/friends.png"
                className="h-5 w-5 cursor-pointer"
                alt="gallery"
              />
              <p>Tag Friends</p>
            </div>
          </div>
          <div>
            <button
              onClick={clickChangeHandler}
              className="bg-purple-400 w-16 text-white hover:bg-purple-800 p-1 rounded-md"
            >
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPosts;
