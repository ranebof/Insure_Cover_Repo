import "./dist/SavedPolicy.css";
import React, { useState, useEffect } from "react";
import savePolicyService from "../../service/savePolicy";
import { ToastContainer, toast } from "react-toastify";

export default function SavedPolicy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPolicy, setExpandedPolicy] = useState(null);
  const [readedPolicies, setReadedPolicies] = useState([]);
  const [editingPolicyId, setEditingPolicyId] = useState(null);
  const [updatedPolicyData, setUpdatedPolicyData] = useState({
    number: "",
    name: "",
    company: "",
    description: "",
  });

  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const response = await savePolicyService.getPolicy();
        setReadedPolicies(response);
      } catch (error) {
        toast.error("Помилка у зчитуванні даних!");
      }
    };
    fetchPolicies();
  }, [editingPolicyId]);

  const togglePolicy = (id) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  const handleEditPolicy = (number) => {
    setEditingPolicyId(number);
    const policyToEdit = readedPolicies.find(
      (policy) => policy.number === number
    );
    setUpdatedPolicyData(policyToEdit);
  };

  const handleUpdatePolicy = async () => {
    await savePolicyService.updatePolicy(editingPolicyId, updatedPolicyData);
    setEditingPolicyId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPolicyData({
      ...updatedPolicyData,
      [name]: value,
    });
  };

  const filteredPolicies = readedPolicies.filter((policy) => {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    return (
      policy.number.toLowerCase().includes(normalizedQuery) ||
      policy.name.toLowerCase().includes(normalizedQuery) ||
      policy.company.toLowerCase().includes(normalizedQuery) ||
      policy.description.toLowerCase().includes(normalizedQuery)
    );
  });

  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  return (
    <div className="policies-cont">
      <ToastContainer />
      <div className="search_holder">
        <input
          className="search-bar"
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="saved-policies-list">
        {filteredPolicies.map((item) => (
          <div className="savedListItem" key={item.id}>
            <div
              className={`saved_item_holder ${
                expandedPolicy === item.id ? "expanded" : ""
              }`}
              onClick={() => togglePolicy(item.id)}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              <div
                style={{
                  paddingLeft: "15px",
                }}
              >
                <span>{item.number}</span>
                <span style={{ marginLeft: "8vw" }}>{item.name}</span>
              </div>
              <span
                className={`x-icon ${
                  expandedPolicy === item.id ? "expanded" : ""
                }`}
              >
                &#10005;
              </span>
            </div>
            {expandedPolicy === item.id && (
              <div className="details">
                <div>
                  <strong>Опис:</strong> {item.description}
                </div>
                <div>
                  <strong>Компанія:</strong> {item.company}
                </div>
                <button onClick={() => handleEditPolicy(item.number)}>
                  Edit
                </button>
                {editingPolicyId === item.number && (
                  <div>
                    <input
                      type="text"
                      name="number"
                      value={updatedPolicyData.number}
                      onChange={handleInputChange}
                      placeholder="Номер полісу"
                    />
                    <input
                      type="text"
                      name="name"
                      value={updatedPolicyData.name}
                      onChange={handleInputChange}
                      placeholder="Назва полісу"
                    />
                    <input
                      type="text"
                      name="company"
                      value={updatedPolicyData.company}
                      onChange={handleInputChange}
                      placeholder="Компанія"
                    />
                    <input
                      type="text"
                      name="description"
                      value={updatedPolicyData.description}
                      onChange={handleInputChange}
                      placeholder="Опис"
                    />
                    <button onClick={handleUpdatePolicy}>Save</button>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
