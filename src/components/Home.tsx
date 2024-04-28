import React from "react";
import Header from "./Header";

const Home: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <h1 className="absolute text-5xl font-extrabold text-gray-600 mt-52 ml-96">
        My Contacts
      </h1>
    </div>
  );
};

export default Home;
