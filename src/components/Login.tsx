import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import padlock from "../assets/padlock_prev_ui.png";
import "../App.css";
import axios from "axios";
import toast from "react-hot-toast";

interface userData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [userData, setUserData] = useState<userData>({
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

  const loginUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:5050/login",
        userData
      );
      const user = response.data;
      if (user) {
        toast.success("Logged in successfully");
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
        {" "}
        <div className="flex items-center justify-center ">
          <img className="h-20" src={padlock} alt="" />
        </div>
        <h1 className="mb-6 text-3xl font-semibold text-center">Login</h1>
        <form onSubmit={loginUser}>
          <br />
          <br />
          <label className="block mb-4">
            <input
              type="email"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Email Address *"
              required
              name="email"
              onChange={changeInputHandler}
              value={userData.email}
            />
          </label>
          <label className="block mb-6">
            <input
              type="email"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md shadow-sm ml-30 focus:outline-none focus:border-blue-300 input"
              placeholder="Password *"
              required
              name="password"
              onChange={changeInputHandler}
              value={userData.password}
            />
            <br />
            <input
              type="submit"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 bg-blue-600 border rounded-md shadow-sm cursor-pointer focus:outline-none hover:bg-blue-700 focus:border-blue-300 exput"
              value={"Login"}
              required
            />
          </label>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-600 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
