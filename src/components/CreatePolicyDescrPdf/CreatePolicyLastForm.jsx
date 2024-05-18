import "./dist/CreatePolicyLastForm.css";
import React, { useState } from "react";

export default function CreatePolicyLastForm() {
  const [description, setDescription] = useState("");

  const [isUploaded, setIsUploaded] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setIsUploaded(true);
    } else {
      alert("Please upload a PDF file.");
      setIsUploaded(false);
    }
  };

  return (
    <div className="create-form-cont">
      <div className="form-container">
        <div className="last_list_title">
          <span>Створення полісу</span>
          <span>Опис</span>
        </div>
        <form className="form">
          <div className="last-form-group-big">
            <label>Опис полісу:</label>
            <textarea
              className="desc-input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="last-form-group-big">
            <label>PDF Документів:</label>
            <div className="pdf-cont">
              <input
                type="file"
                className="input_create"
                id="fileInput"
                accept=".pdf"
                onChange={handleFileChange}
              />
              <label
                htmlFor="fileInput"
                className={`upload-icon ${isUploaded ? "uploaded" : ""}`}
              ></label>
            </div>
          </div>
          <div className="submit-btn-cont">
            <button className="submit-policy-btn" onClick={() => {}}>
              <p>зберегти</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
