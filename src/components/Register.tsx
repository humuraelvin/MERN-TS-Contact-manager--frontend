import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import padlock from "../assets/padlock_prev_ui.png";
import axios from "axios";
import toast from "react-hot-toast";

interface UserData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const registerUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post<UserData>(
        "https://localhost:5050/register",
        userData
      );
      if (response && response.data) {
        const newUser = response.data;
        console.log(newUser);
        toast.success("User created and saved successfully");
        navigate("/login");
      } else {
        toast.error(
          "Couldn't register new user, some error occurred, try again later"
        );
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-100">
        <div className="flex items-center justify-center ">
          <img className="h-20" src={padlock} alt="" />
        </div>
        <h1 className="mb-6 text-3xl font-semibold text-center">Sign up</h1>
        <form onSubmit={registerUser}>
          <div className="flex justify-between mb-5">
            <input
              type="text"
              className="w-1/2 h-16 px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
              placeholder="First Name *"
              name="firstName"
              required
              value={userData.firstName}
              onChange={changeInputHandler}
            />
            <input
              type="text"
              className="w-1/2 h-16 px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
              placeholder="Last Name *"
              name="lastName"
              required
              value={userData.lastName}
              onChange={changeInputHandler}
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              className="w-full h-16 px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
              placeholder="Email Address *"
              name="email"
              required
              value={userData.email}
              onChange={changeInputHandler}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="w-full h-16 px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
              placeholder="Password *"
              name="password"
              required
              value={userData.password}
              onChange={changeInputHandler}
            />
          </div>
          <input
            type="submit"
            className="w-full h-16 px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
            value={"Register"}
          />
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
