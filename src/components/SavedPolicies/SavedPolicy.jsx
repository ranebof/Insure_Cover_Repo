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
  const fetchPolicies = async () => {
    try {
      const response = await savePolicyService.getPolicy();
      setReadedPolicies(response);
    } catch (error) {
      toast.error("Помилка у зчитуванні даних!");
    }
  };
  useEffect(() => {
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

  const updatePolicy = async () => {
    await savePolicyService.updatePolicy(editingPolicyId, updatedPolicyData);
    setEditingPolicyId(null);
    setExpandedPolicy(false);
  };
  const deletePolicy = async (id) => {
    await savePolicyService.deletePolicy(id);
    setEditingPolicyId(null);
    setExpandedPolicy(false);
    fetchPolicies();
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
                  <strong>Компанія:</strong> {item.company}
                </div>
                <div className="details-desc-cont">
                  <div className="divider"></div>
                  <div className="details-desc">
                    <strong>Опис:</strong>
                    <textarea className="desc-output">
                      {item.description}
                    </textarea>
                  </div>
                </div>
                <div className="edit_button_cont">
                  <button
                    className="edit_button"
                    onClick={() => handleEditPolicy(item.number)}
                  >
                    Редагувати
                  </button>
                  <button
                    className="edit_button"
                    onClick={() => deletePolicy(item.number)}
                  >
                    Видалити
                  </button>
                </div>
                {editingPolicyId === item.number && (
                  <div className="edit-modal">
                    <div className="modal-content">
                      <input
                        className="input-field"
                        type="text"
                        name="number"
                        value={updatedPolicyData.number}
                        onChange={handleInputChange}
                        placeholder="Номер полісу"
                      />
                      <input
                        type="text"
                        className="input-field"
                        name="name"
                        value={updatedPolicyData.name}
                        onChange={handleInputChange}
                        placeholder="Назва полісу"
                      />
                      <input
                        type="text"
                        className="input-field"
                        name="company"
                        value={updatedPolicyData.company}
                        onChange={handleInputChange}
                        placeholder="Компанія"
                      />
                      <textarea
                        type="text"
                        className="desc-input"
                        name="description"
                        value={updatedPolicyData.description}
                        onChange={handleInputChange}
                        placeholder="Опис"
                      />
                      <button className="edit_button" onClick={updatePolicy}>
                        ЗБЕРЕГТИ
                      </button>
                    </div>
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
