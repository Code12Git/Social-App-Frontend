import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Videopost = () => {
  const { user } = useContext(AuthContext);
  console.log(user.user.profilePicture);

  return (
    <div>
      {" "}
      <section class=" body-font ml-10 mt-4 cursor-pointer lg:flex md:flex xl:flex  gap-10 ">
        <div
          className="bg-cover bg-center h-60	  w-40 rounded-md overflow-hidden transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl"
          style={{
            backgroundImage: `url(${user.user.profilePicture})`,
          }}
        >
          <div className="flex flex-col justify-end h-full mt-auto p-3">
            <img
              src="/assests/images/plus.png"
              className="h-5 w-5"
              alt="button"
            />
            <h1 className="text-white font-bold font-serif text-xl">
              {user.user.username}
            </h1>
          </div>
        </div>

        <div
          className="bg-cover bg-center  h-60	 w-40 rounded-md overflow-hidden transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1514632595-4944383f2737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')`,
          }}
        >
          <div className="flex flex-col justify-end h-full mt-auto p-3">
            <h1 className="text-white font-bold font-serif text-xl">Parth</h1>
          </div>
        </div>
        <div
          className="bg-cover bg-center  h-60	  w-40 rounded-md overflow-hidden transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80')`,
          }}
        >
          <div className="flex flex-col justify-end h-full mt-auto p-3">
            <h1 className="text-white font-bold font-serif text-xl">Vivek</h1>
          </div>
        </div>
        <div
          className="bg-cover bg-center  h-60	 w-40 rounded-md overflow-hidden transition duration-300 ease-in-out transform hover:ease-in hover:-translate-y-1 hover:shadow-2xl"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')`,
          }}
        >
          <div className="flex flex-col justify-end h-full mt-auto p-3">
            <h1 className="text-white font-bold font-serif text-xl">Gaurav</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videopost;
