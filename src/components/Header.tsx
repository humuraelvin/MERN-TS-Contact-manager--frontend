import React from "react";
import Logo from "../assets/logo_prev_ui.png";
import { IoMdPersonAdd } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";


const Header: React.FC = () => {
  return (
    <div className="container">
      <header className="fixed flex flex-row w-full bg-gray-200">
        <img className="h-20 mt-10 mb-10 ml-20" src={Logo} alt="logo" />
        <h1 className="mt-16 ml-10 text-4xl font-extrabold text-cyan-600">
          Contact management app
        </h1>
        <MdDarkMode className="mt-16 ml-32 text-4xl" />
        <Switch className="mt-16 ml-4 mr-4 text-xl size-5" />
        <MdLightMode className="mt-16 text-4xl ml-50" />
        <Link
          className="flex flex-row h-16 gap-2 p-4 mt-16 text-2xl rounded-md cursor-pointer ml-96 bg-cyan-600"
          to="/createContact"
        >
          {" "}
          <IoMdPersonAdd /> Add To Contacts
        </Link>

        <Link
          to="/login"
          className="flex flex-row h-16 gap-2 p-4 mt-16 ml-48 text-2xl rounded-md cursor-pointer bg-cyan-800"
        >
          <RiLogoutBoxRLine /> Logout
        </Link>
      </header>
    </div>
  );
};

export default Header;
