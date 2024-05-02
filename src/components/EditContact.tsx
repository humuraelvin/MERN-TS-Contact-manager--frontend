import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import axios from "axios";

interface ContactData {
  Names: string;
  phoneNumber: string;
  email: string;
}

const EditContact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData>({
    Names: "",
    phoneNumber: "",
    email: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get<ContactData>(
          `http://localhost:5050/getContact/${id}`
        );
        setContactData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchContact();
  }, [id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactData((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:5050/editContact/${id}`,
        contactData
      );
      console.log(res);
      navigate("/");
    } catch (err) {
      console.log(err);
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
          Edit Contact
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <input
              type="text"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Full names *"
              required
              name="Names"
              value={contactData.Names || ""}
              onChange={handleChange}
            />
            <br />
            <input
              type="number"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Phone Number *"
              required
              name="phoneNumber"
              value={contactData.phoneNumber || ""}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 border rounded-md ml-25 shadow-25 focus:outline-none focus:border-blue-300 input"
              placeholder="Email Address *"
              required
              name="email"
              value={contactData.email || ""}
              onChange={handleChange}
            />
          </label>
          <label className="block mb-6">
            <br />
            <input
              type="submit"
              className="block w-full h-12 max-w-lg px-4 py-2 mt-1 bg-blue-600 border rounded-md shadow-sm cursor-pointer focus:outline-none hover:bg-blue-700 focus:border-blue-300 exput"
              value={"Edit"}
              required
            />
          </label>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
