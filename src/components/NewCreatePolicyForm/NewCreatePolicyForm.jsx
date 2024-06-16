import "./dist/NewCreatePolicyForm.css";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import savePolicyService from "../../service/savePolicy";
export default function NewCreatePolicyForm() {
  const [policyCode, setPolicyCode] = useState("");
  const [policyName, setPolicyName] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleBtnClick = async (event) => {
    event.preventDefault();

    if (
      !policyCode.trim() ||
      !policyName.trim() ||
      !company.trim() ||
      !description.trim()
    ) {
      toast.error("Будь ласка, заповніть всі поля");
      return;
    }

    const data = {
      number: policyCode,
      name: policyName,
      company: company,
      description: description,
    };

    try {
      const response = await savePolicyService.savePolicy(data);
      if (response.success) {
        toast.success("Дані успішно збережені!");
        window.location.href = "/disease";
      } else {
        toast.error("Щось пішло не так!");
      }
    } catch (error) {
      console.error("Error during save:", error);
    }
  };

  return (
    <div className="container">
      <ToastContainer />

      <h1>Створення Полісу</h1>

      <input
        type="text"
        className="input-field"
        placeholder="Номер Полісу"
        value={policyCode}
        onChange={(e) => setPolicyCode(e.target.value)}
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

      <textarea
        className="desc-input"
        type="text"
        placeholder="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="button" onClick={handleBtnClick}>
        ДАЛІ
      </button>
    </div>
  );
}
