import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: email.current.value,
        password: password.current.value,
      });
      toast("Login Successfull!", {
        autoClose: 2000,
        closeOnClick: true,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
    } catch (err) {
      toast("Invalid Credentials!", {
        autoClose: 2000,
        closeOnClick: true,
      });
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
  return (
    <div
      className=" bg-cover bg-center min-h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80')",
      }}
    >
      <section className="text-gray-600 mt-20 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              <span className="text-red-400">Connectify - </span>
              <span className="text-purple-400">Your Social Network Hub</span>
            </h1>
            <p className="leading-relaxed  text-green-900 text-lg mt-4 font-playfair">
              Connectify is a revolutionary social media app that brings people
              together, allowing you to connect, share, and engage with friends,
              family, and communities like never before. Stay connected,
              discover new connections, and express yourself in a vibrant and
              inclusive online environment. Join Connectify today and experience
              the power of true social connectivity.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-900 rounded-lg gap-3 p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-cyan-700 text-lg font-medium title-font mb-5">
              Sign In
            </h2>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className=" text-md text-orange-600 leading-7  "
              >
                Email
              </label>
              <input
                type="email"
                ref={email}
                required
                min="6"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-md text-orange-600 leading-7 "
              >
                Password
              </label>
              <input
                type="password"
                ref={password}
                min="6"
                required
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={isFetching}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              {isFetching ? (
                <CircularProgress color="success" size="20px" />
              ) : (
                "Login"
              )}
            </button>
            <p className="my-2 text-lg text-amber-500">
              Dont Have a account? <NavLink to="/register"> Register</NavLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
