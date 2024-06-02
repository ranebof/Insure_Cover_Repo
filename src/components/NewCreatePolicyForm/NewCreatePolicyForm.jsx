import "./dist/NewCreatePolicyForm.css";
import React from "react";

export default function NewCreatePolicyForm() {
  function handelBtnClick() {
    window.location.href = "/disease";
  }

  return (
    <div className="container">
      <h1>Створення Полісу</h1>

      <input type="text" className="input-field" placeholder="Номер Полісу" />
      <input type="text" className="input-field" placeholder="Назва Полісу" />
      <input type="text" className="input-field" placeholder="Компанія" />

      <button className="button" onClick={handelBtnClick}>
        ДАЛІ
      </button>
    </div>
  );
}
