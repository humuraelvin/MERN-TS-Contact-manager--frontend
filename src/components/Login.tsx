import React from "react";
import { Link } from "react-router-dom";
import padlock from "../assets/padlock_prev_ui.png";
import "../App.css";

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-4xl mx-auto">
        {" "}
        {/* Adjusted width and centered */}
        <div className="flex items-center justify-center ">
          <img className="h-20" src={padlock} alt="" />
        </div>
        <h1 className="mb-6 text-3xl font-semibold text-center">Login</h1>
        <form>
          <br />
          <br />
          <label className="block mb-4">
            <input
              type="email"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Email Address *"
              required
            />
          </label>
          <label className="block mb-6">
            <input
              type="email"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md shadow-sm ml-30 focus:outline-none focus:border-blue-300 input"
              placeholder="Password *"
              required
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

export default Register;
