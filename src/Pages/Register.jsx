import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "../utils/axios";

const Register = () => {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const handleChange = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Passwords must match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login");
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <section
      className="text-gray-600 body-font bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: "url('/assests/images/register.jpg')",
      }}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            <span className="text-red-400">Connectify - </span>
            <span className="text-purple-400">Your Social Network Hub</span>
          </h1>
          <p className="leading-relaxed  text-green-900 text-lg mt-4 font-playfair">
            Connectify is a revolutionary social media app that brings people
            together, allowing you to connect, share, and engage with friends,
            family, and communities like never before. Stay connected, discover
            new connections, and express yourself in a vibrant and inclusive
            online environment. Join Connectify today and experience the power
            of true social connectivity.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-cyan-700 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-md text-orange-600 "
            >
              Username
            </label>
            <input
              type="text"
              required
              id="username"
              ref={username}
              name="username"
              className="w-full  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className=" text-md text-orange-600 leading-7  "
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              ref={email}
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="text-md text-orange-600 leading-7 "
            >
              Password
            </label>
            <input
              type="password"
              required
              ref={password}
              id="password"
              name="password"
              minLength="6"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="text-md text-orange-600 leading-7 "
            >
              Confirm Password
            </label>
            <input
              type="password"
              required
              id="password"
              ref={confirmPassword}
              minLength="6"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={handleChange}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Sign Up
          </button>
          <p className="my-2 text-lg text-amber-500">
            Already Have a account? <NavLink to="/login">Login</NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
