import React, { useContext, useEffect, useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Avatar from "@mui/material/Avatar";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Logout } from "../context/AuthAction";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const [buttonIcon, setButtonIcon] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setButtonIcon("light");
    } else {
      document.documentElement.classList.remove("dark");
      setButtonIcon("dark");
    }
  }, [theme]);

  const handleThemeswitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/login");
    window.location.reload();
  };

  console.log(user.user.profilePicture);
  console.log(user.user.username);
  return (
    <div>
      <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md dark:bg-slate-600">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-2xl bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 bg-clip-text font-serif font-bold text-transparent ">
              Connectify
            </span>
          </NavLink>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <NavLink to="/" className="mr-5 hover:text-gray-900">
              <HomeOutlinedIcon />
            </NavLink>
            <a className="mr-5 hover:text-gray-900">
              {buttonIcon === "dark" ? (
                <DarkModeOutlinedIcon
                  onClick={handleThemeswitch}
                  className="cursor-pointer"
                />
              ) : (
                <WbSunnyIcon
                  onClick={handleThemeswitch}
                  className="cursor-pointer"
                />
              )}
            </a>
            <a className="mr-5 hover:text-gray-900">
              <GridViewOutlinedIcon />
            </a>
            <div className="bg-white border">
              <div className="flex items-center gap-2 font-semibold border-0 px-3 py-2 placeholder-gray-400 text-gray-900 bg-white  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                <SearchIcon />
                <input
                  type="text"
                  placeholder="Search"
                  className="outline-none line-clamp-2"
                />
              </div>
            </div>
          </nav>
          <div className="flex items-center gap-2">
            <PersonOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <NavLink to={`/profile/${user.user.username}`}>
              <Avatar
                alt="Remy Sharp"
                src={user?.user.profilePicture ? user.user.profilePicture : ""}
              />
            </NavLink>
            <NavLink
              className=" hover:text-gray-900 font-playfair text-red-950 text-lg transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl"
              onClick={handleLogout}
              to="/login"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
