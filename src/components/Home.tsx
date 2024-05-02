import React, { useEffect, useState } from "react";
import Header from "./Header";
import { MdEditSquare, MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

interface Contact {
  _id: string;
  Names: string;
  phoneNumber: string;
  email: string;
  gender: string;
}

const Home: React.FC = () => {
  const [data, setData] = useState<Contact[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const fetchContact = await axios.get<Contact[]>(
        "https://localhost:5050/getContacts"
      );
      const response = fetchContact.data;
      setData(response);
    } catch (error) {
      console.log(error);
      toast.error("Internal server error");
    }
  };

  const handleDeleteContact = async (id: string) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete this note?"
      );
      if (confirmDelete) {
        const deleteNote = await axios.delete(
          `http://localhost:5050/deleteContact/${id}`
        );
        const response = deleteNote.data;
        if (response.success) {
          console.log(response.message);
          alert("Note deleted successfully");
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Internal server error- failed to delete note");
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <h1 className="absolute text-5xl font-extrabold text-gray-600 mt-52 ml-96">
        My Contacts
      </h1>
      {/* Contacts */}
      {data &&
        data.map((contact, index) => (
          <div
            className="absolute flex flex-row w-full h-24 p-8 mb-10 bg-gray-500 rounded-lg cursor-pointer gap-28 hover:bg-cyan-500 mt-80"
            key={index}
          >
            <h1 className="text-3xl font-extrabold">1.</h1>
            <h1 className="text-3xl font-extrabold">{contact.Names}</h1>
            <p className="text-3xl font-extrabold">{contact.phoneNumber}</p>
            <p className="text-3xl font-extrabold">{contact.email}</p>
            <p className="text-3xl font-extrabold">{contact.gender}</p>
            <Link to={`/editContact/${contact._id}`}>
              <h1 className="text-5xl font-extrabold text-orange-700 ml-14">
                <MdEditSquare />
              </h1>
            </Link>
            <button
              className="ml-10 text-5xl font-extrabold text-red-600"
              onClick={() => handleDeleteContact(contact._id)}
            >
              <MdDelete />
            </button>
          </div>
        ))}
    </div>
  );
};

export default Home;
