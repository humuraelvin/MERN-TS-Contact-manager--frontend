import React from "react";
import Header from "./Header";
import { MdEditSquare } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1 className="absolute text-5xl font-extrabold text-gray-600 mt-52 ml-96">
        My Contacts
      </h1>
      <div className="absolute flex flex-row w-full h-24 p-8 mb-10 bg-gray-600 rounded-lg cursor-pointer gap-28 hover:bg-cyan-500 mt-80">
        <h1 className="text-3xl font-extrabold">1.</h1>
        <h1 className="text-3xl font-extrabold">HUMURA ELVIN</h1>
        <p className="text-3xl font-extrabold">+250788554557</p>
        <p className="text-3xl font-extrabold">elvinhumura@gmail.com</p>
        <p className="text-3xl font-extrabold">Male</p>
        <Link to="/editContact">
          <h1 className="text-5xl font-extrabold ml-14">
            <MdEditSquare />
          </h1>
        </Link>
        <button className="ml-10 text-5xl font-extrabold">
          <MdDelete />
        </button>
      </div>
      <br />
      <br />
      <br />

      <div className="absolute flex flex-row w-full h-24 p-8 mb-10 bg-gray-600 rounded-lg cursor-pointer gap-28 mt-96 hover:bg-cyan-500">
        <h1 className="text-3xl font-extrabold">2.</h1>
        <h1 className="text-3xl font-extrabold">HUMURA ELVIN</h1>
        <p className="text-3xl font-extrabold">+250788554557</p>
        <p className="text-3xl font-extrabold">elvinhumura@gmail.com</p>
        <p className="text-3xl font-extrabold">Male</p>
        <Link to="/editContact">
          <h1 className="text-5xl font-extrabold ml-14">
            <MdEditSquare />
          </h1>
        </Link>
        <button className="ml-10 text-5xl font-extrabold">
          <MdDelete />
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="absolute flex flex-row w-full h-24 p-8 mb-10 bg-gray-600 rounded-lg cursor-pointer gap-28 mt-96 hover:bg-cyan-500">
        <h1 className="text-3xl font-extrabold">3.</h1>
        <h1 className="text-3xl font-extrabold">HUMURA ELVIN</h1>
        <p className="text-3xl font-extrabold">+250788554557</p>
        <p className="text-3xl font-extrabold">elvinhumura@gmail.com</p>
        <p className="text-3xl font-extrabold">Male</p>
        <Link to="/editContact">
          <h1 className="text-5xl font-extrabold ml-14">
            <MdEditSquare />
          </h1>
        </Link>
        <button className="ml-10 text-5xl font-extrabold">
          <MdDelete />
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="absolute flex flex-row w-full h-24 p-8 mb-10 bg-gray-600 rounded-lg cursor-pointer gap-28 mt-96 hover:bg-cyan-500">
        <h1 className="text-3xl font-extrabold">4.</h1>
        <h1 className="text-3xl font-extrabold">HUMURA ELVIN</h1>
        <p className="text-3xl font-extrabold">+250788554557</p>
        <p className="text-3xl font-extrabold">elvinhumura@gmail.com</p>
        <p className="text-3xl font-extrabold">Male</p>
        <Link to="/editContact">
          <h1 className="text-5xl font-extrabold ml-14">
            <MdEditSquare />
          </h1>
        </Link>
        <button className="ml-10 text-5xl font-extrabold">
          <MdDelete />
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="absolute flex flex-row w-full h-24 p-8 mb-10 bg-gray-600 rounded-lg cursor-pointer gap-28 mt-96 hover:bg-cyan-500">
        <h1 className="text-3xl font-extrabold">5.</h1>
        <h1 className="text-3xl font-extrabold">HUMURA ELVIN</h1>
        <p className="text-3xl font-extrabold">+250788554557</p>
        <p className="text-3xl font-extrabold">elvinhumura@gmail.com</p>
        <p className="text-3xl font-extrabold">Male</p>
        <Link to="/editContact">
          <h1 className="text-5xl font-extrabold ml-14">
            <MdEditSquare />
          </h1>
        </Link>
        <button className="ml-10 text-5xl font-extrabold">
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

export default Home;
