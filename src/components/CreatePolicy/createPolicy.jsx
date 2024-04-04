import './dist/createPolicy.css';
import React, { useState } from 'react';
import createPolicyService from "../../service/createPolicy";
function Divider() {
    return <div className="divider"></div>;
}

export default function CreatePolicy() {


    const createPol = async () => {
        try {
            await createPolicyService.createPolicy({ number: policyNumber, name: policyName, description: description, company: company })
        } catch (error) {
            console.error("Error during post of policy", error);
        }
    }

    const [policyNumber, setPolicyNumber] = useState('');
    const [policyName, setPolicyName] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [drugs, setDrugs] = useState('');
    const [curableDisease, setCurableDisease] = useState('');

    const diseaseOptions = ["Broken bone", "Hepatitis", "Cancer", "Stroke", "Asthma"];
    const drugsOptions = ["Aspirin", "Paracetamol", "Ibuprofen", "Diazepam", "Metformin"];

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
        <div className='create-form-cont'>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label>Номер полісу:</label>
                        <input className='input_create' type="text" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>Назва полісу:</label>
                        <input className='input_create' type="text" value={policyName} onChange={(e) => setPolicyName(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>Компанія:</label>
                        <input className='input_create' type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group" >
                        <label>Хвороби які покриваються:</label>
                        <input className='input_create' list='disease' id='diseaseList' type="text" value={curableDisease} onChange={(e) => setCurableDisease(e.target.value)} />
                        <datalist id="disease">
                            {diseaseOptions.map((option, index) => (
                                <option key={index} value={option} />
                            ))}
                        </datalist>
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>Ліки які покриваються:</label>
                        <input className='input_create' list='drugs' id='drugsList' type="text" value={drugs} onChange={(e) => setDrugs(e.target.value)} />
                        <datalist id="drugs">
                            {drugsOptions.map((option, index) => (
                                <option key={index} value={option} />
                            ))}
                        </datalist>
                    </div>
                    <Divider />
                    <div className="form-group-big">
                        <label>Опис полісу:</label>
                        <textarea className='desc-input' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group-big">
                        <label>PDF Документів:</label>
                        <div className="pdf-cont">
                            <input
                                type="file"
                                className="input_create"
                                id="fileInput"
                                accept=".pdf"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="fileInput" className={`upload-icon ${isUploaded ? 'uploaded' : ''}`}></label>
                        </div>
                    </div>
                    <div className='submit-btn-cont'>
                        <button className='submit-policy-btn' onClick={createPol}>
                            <p>ЗБЕРЕГТИ</p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
