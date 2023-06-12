import React, { useContext, useEffect } from "react";
import Videopost from "./Videopost";
import Post from "./Post";
import { Posts } from "../Data";
import AddPosts from "./AddPosts";
import axios from "../utils/axios";
import { AuthContext } from "../context/AuthContext";

const Feed = ({ username }) => {
  const [posts, setPosts] = React.useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(`/post/profile/${username}`)
        : await axios.get(`/post/timeline/${user.user._id}`);
      setPosts(res.data);
      console.log(username);
    };
    fetchPosts();
  }, [username, user.user._id]);
  const isHomePage = !username || username === user.user.username;
  const isProfilePage = username === user.user.username;
  return (
    <div className="mt-4">
      {isHomePage && !isProfilePage && <AddPosts />}

      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
};

export default Feed;
