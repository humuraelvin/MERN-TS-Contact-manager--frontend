import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import CreateContact from "./components/CreateContact.tsx";
import EditContact from "./components/EditContact.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Login />} />
        <Route path="/createContact" element={<CreateContact />} />
        <Route path="/editContact/:id" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
