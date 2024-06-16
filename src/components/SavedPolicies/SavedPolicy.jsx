import "./dist/SavedPolicy.css";
import React, { useState } from "react";

export default function SavedPolicy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPolicy, setExpandedPolicy] = useState(null);

  const togglePolicy = (policyCode) => {
    setExpandedPolicy(expandedPolicy === policyCode ? null : policyCode);
  };

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  const savedPolicies = [
    {
      policyCode: "ABC1234",
      policyName: "Індивідуальне страхування",
      diseases: [
        { diseaseCode: "A0-A1", diseaseName: "Діабет" },
        { diseaseCode: "A0-A2", diseaseName: "Гіпертонія" },
      ],
      medicines: [
        { medicineCode: "A1", medicineName: "Кокс" },
        { medicineCode: "A2", medicineName: "Ганджубас" },
      ],
      description: "Чел руку зламав рофл",
      pdfFile: "some.pdf",
    },
    {
      policyCode: "DEF5678",
      policyName: "Загальне страхування",
      diseases: [
        { diseaseCode: "AB-AB2", diseaseName: "Діабет" },
        { diseaseCode: "G12", diseaseName: "Гіпертонія" },
      ],
      medicines: [
        { medicineCode: "A1", medicineName: "Кокс" },
        { medicineCode: "A2", medicineName: "Ганджубас" },
      ],
      description: "Чел руку зламав рофл",
      pdfFile: "some.pdf",
    },
  ];
  const filteredSavedPolicies = savedPolicies.filter((policy) => {
    const query = searchQuery.toLowerCase();
    return (
      policy.policyCode.toLowerCase().includes(query) ||
      policy.policyName.toLowerCase().includes(query)
    );
  });
  return (
    <div className="policies-cont">
      <div className="search_holder">
        <input
          className="search-bar"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="saved-policies-list">
        {filteredSavedPolicies.map((item) => (
          <div className="savedListItem" key={item.policyCode}>
            <div
              className={`saved_item_holder ${
                expandedPolicy === item.policyCode ? "expanded" : ""
              }`}
              onClick={() => togglePolicy(item.policyCode)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              <div
                style={{
                  paddingLeft: "15px",
                }}
              >
                <span>{item.policyCode}</span>
                <span style={{ marginLeft: "8vw" }}>{item.policyName}</span>
              </div>
              <span
                className={`x-icon ${
                  expandedPolicy === item.policyCode ? "expanded" : ""
                }`}
              >
                &#10005;
              </span>
            </div>
            {expandedPolicy === item.policyCode && (
              <div className="details">
                <div>
                  <strong>Опис:</strong> {item.description}
                </div>
                <div>
                  <strong>Хвороби:</strong>
                  <ul>
                    {item.diseases.map((disease) => (
                      <li key={disease.diseaseCode}>
                        {disease.diseaseCode} - {disease.diseaseName}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>Ліки:</strong>
                  <ul>
                    {item.medicines.map((medicine) => (
                      <li key={medicine.medicineCode}>
                        {medicine.medicineCode} - {medicine.medicineName}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong>PDF файл:</strong>{" "}
                  <a
                    href={item.pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.pdfFile}
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
