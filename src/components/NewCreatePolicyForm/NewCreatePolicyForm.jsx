import "./dist/NewCreatePolicyForm.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewCreatePolicyForm() {
  const [policyNumber, setPolicyNumber] = useState("");
  const [policyName, setPolicyName] = useState("");
  const [company, setCompany] = useState("");

  const handleBtnClick = () => {
    if (!policyNumber.trim() || !policyName.trim() || !company.trim()) {
      toast.error("Будь ласка, заповніть всі поля");
      return;
    }

    window.location.href = "/disease";
  };

  return (
    <div className="container">
      <ToastContainer />

      <h1>Створення Полісу</h1>

      <input
        type="text"
        className="input-field"
        placeholder="Номер Полісу"
        value={policyNumber}
        onChange={(e) => setPolicyNumber(e.target.value)}
      />

      <input
        type="text"
        className="input-field"
        placeholder="Назва Полісу"
        value={policyName}
        onChange={(e) => setPolicyName(e.target.value)}
      />

      <input
        type="text"
        className="input-field"
        placeholder="Компанія"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button className="button" onClick={handleBtnClick}>
        ДАЛІ
      </button>
    </div>
  );
}
