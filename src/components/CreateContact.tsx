import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import axios from "axios";
import toast from "react-hot-toast";

interface ContactData {
  names: string;
  phone: string;
  email: string;
  gender: string;
}

const CreateContact: React.FC = () => {
  const [contactsData, setContactsData] = useState<ContactData>({
    names: "",
    phone: "",
    email: "",
    gender: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContactsData({
      ...contactsData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  const createContact = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:5050/createContact",
        contactsData
      );
      const user = response.data; // Assuming response.data contains user info
      if (user) {
        toast.success("Contact created and saved successfully");
        navigate("/");
      } else {
        toast.error("Some error occurred while trying to create a new contact");
      }
    } catch (error) {
      toast.error("Internal server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Link
        className="flex flex-row h-20 gap-2 p-4 ml-16 text-3xl font-extrabold rounded-lg bg-cyan-600 w-96"
        to="/"
      >
        <RiArrowGoBackFill /> Back to Home
      </Link>
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="mb-6 text-5xl font-extrabold text-center">
          Create New Contact
        </h1>
        <form onSubmit={createContact}>
          <label className="block mb-4">
            <input
              type="text"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Full names *"
              required
              name="names"
              onChange={handleChange}
              value={contactsData.names}
            />
          </label>
          <label className="block mb-4">
            <input
              type="tel"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Phone Number *"
              required
              name="phone"
              onChange={handleChange}
              value={contactsData.phone}
            />
          </label>
          <label className="block mb-4">
            <input
              type="email"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Email Address *"
              required
              name="email"
              onChange={handleChange}
              value={contactsData.email}
            />
          </label>
          <label className="block mb-6">
            <input
              type="text"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Gender *"
              required
              name="gender"
              onChange={handleChange}
              value={contactsData.gender}
            />
          </label>
          <label className="block mb-6">
            <input
              type="submit"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 bg-blue-600 border rounded-md shadow-sm cursor-pointer focus:outline-none hover:bg-blue-700 focus:border-blue-300 exput"
              value={"Add Contact"}
              required
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
