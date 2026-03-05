import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import BioForm from "./components/BioForm";
import BioPreview from "./components/BioPreview";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    age: "",
    father: "",
    mother: "",
    education: "",
    profession: "",
    rashi: "",
    photo: "",
  });

  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/builder"
        element={
          <div className="app-container">
            <BioForm formData={formData} setFormData={setFormData} />
            <BioPreview formData={formData} />
          </div>
        }
      />
    </Routes>
  );
}

export default App;