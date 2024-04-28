import React from "react";
import { Link } from "react-router-dom";
import padlock from "../assets/padlock_prev_ui.png";

const Register: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-100">
        <div className="flex items-center justify-center ">
          <img className="h-20" src={padlock} alt="" />
        </div>
        <h1 className="mb-6 text-3xl font-semibold text-center">Sign up</h1>
        <form>
          <label className="w-40 gap-2 mb-5">
            <input
              type="text"
              className="w-1/2 h-16 px-4 py-2 mt-1 border rounded-md shadow-sm h mr-1/2 focus:outline-none focus:border-blue-300"
              placeholder="First Name *"
              required
            />

            <input
              type="text"
              className="w-1/2 h-16 px-4 py-2 mt-1 border rounded-md shadow-sm ml focus:outline-none focus:border-blue-300"
              placeholder="Last Name *"
              required
            />
          </label>
          <br />
          <br />
          <label className="block mb-4">
            <input
              type="email"
              className="block w-full h-16 px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
              placeholder="Email Adress *"
              required
            />
          </label>
          <label className="block mb-6">
            <input
              type="password"
              className="block w-full h-16 px-4 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:border-blue-300"
              placeholder="Password *"
              required
            />
          </label>
          <input
            type="submit"
            className="block w-full h-16 px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700" value={"Register"}/>

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
