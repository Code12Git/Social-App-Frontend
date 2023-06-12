import { Avatar } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import axios from "../utils/axios";
import { PF } from "../config/config";
import { NavLink } from "react-router-dom";
import { format } from "timeago.js";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AuthContext } from "../context/AuthContext";
import DeleteIcon from "@mui/icons-material/Delete";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes?.length || 0);
  const [user, setUser] = useState(post.user);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes?.includes(currentUser.user._id));
  }, [currentUser.user._id, post.likes]);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`users?userId=${post.userId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, [post.userId]);

  const clickChangeHandler = async () => {
    try {
      await axios.put(`/post/${post._id}/like`, {
        userId: currentUser.user._id,
      });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const toggleCommentForm = () => {
    setShowCommentForm(!showCommentForm);
  };

  const toggleAllComments = () => {
    setShowAllComments(!showAllComments);
  };

  const submitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const newCommentObj = {
        id: comments.length + 1,
        text: newComment,
        userId: 1, // Replace with the appropriate user ID
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${post._id}`, {
        data: { userId: currentUser.user._id },
      });
      window.location.reload();
      console.log("deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col ">
      <div
        className="bg-white dark:bg-slate-800 dark:text-red-400 w-full  mt-4 p-6 flex flex-col gap-5 rounded-md"
        key={post.id}
        style={{ marginBottom: "1rem" }}
      >
        <div className="flex gap-2">
          <NavLink to={`/profile/${user?.username}`}>
            <Avatar
              src={user?.profilePicture ? PF + user.profilePicture : ""}
              alt="person"
            />
          </NavLink>
          <div>
            <p className="text-md font-serif">{user?.username}</p>
            <p className="text-slate-400">{format(post.createdAt)}</p>
          </div>
        </div>
        <p className="text-slate-700 dark:text-blue-500">{post.desc}</p>
        <img src={PF + post.img} alt="ima" />

        <div className="flex justify-between  gap-4 items-center">
          <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <FavoriteBorderIcon
                onClick={clickChangeHandler}
                style={{
                  color: isLiked ? "red" : "inherit",
                  cursor: "pointer",
                }}
              />
              <p>{like} Likes</p>
            </div>
            <div className="flex gap-1" onClick={toggleCommentForm}>
              <InsertCommentIcon className="text-slate-400" />
              <p>{comments.length} Comments</p>
            </div>
          </div>
          <div>
            <DeleteIcon
              onClick={handleDelete}
              className="text-red-400 cursor-pointer"
            />
          </div>
        </div>

        {showCommentForm && (
          <form onSubmit={submitComment} className="flex gap-2">
            <input
              type="text"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md p-2"
            >
              Post
            </button>
          </form>
        )}
        {showAllComments && (
          <div>
            {comments.map((comment) => (
              <div key={comment.id} className="flex gap-2">
                <Avatar
                  src={
                    user.filter((u) => u.id === comment.uId)[0].profilePicture
                  }
                  alt="person"
                />
                <p>{comment.text}</p>
              </div>
            ))}
          </div>
        )}
        {comments.length > 0 && (
          <button
            className="text-blue-500 underline mt-2 cursor-pointer"
            onClick={toggleAllComments}
          >
            {showAllComments ? (
              <span className="text-red-600  underline underline-none decoration-white">
                Hide comments
              </span>
            ) : (
              <span className="text-purple-600 underline underline-none decoration-white">
                View all comments
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Post;
