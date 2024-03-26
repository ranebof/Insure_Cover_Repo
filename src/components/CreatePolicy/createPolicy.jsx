import './dist/createPolicy.css';
import React, { useState } from 'react';
function Divider() {
    return <div className="divider"></div>;
}

export default function CreatePolicy() {
    const [policyNumber, setPolicyNumber] = useState('');
    const [policyName, setPolicyName] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [drugs, setDrugs] = useState('');
    const [curableDisease, setCurableDisease] = useState('');
    const [file, setFile] = useState(null);

    const diseaseOptions = ["Broken bone", "Hepatitis", "Cancer", "Stroke", "Asthma"];
    const drugsOptions = ["Aspirin", "Paracetamol", "Ibuprofen", "Diazepam", "Metformin"];

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };
    return (
        <div className='create-form-cont'>
            <div className="form-container">
                <form className="form">
                    <div className="form-group">
                        <label>Номер полісу:</label>
                        <input type="text" value={policyNumber} onChange={(e) => setPolicyNumber(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>Назва полісу:</label>
                        <input type="text" value={policyName} onChange={(e) => setPolicyName(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>Компанія:</label>
                        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group" >
                        <label>Хвороби які покриваються:</label>
                        <input list='disease' id='diseaseList' type="text" value={curableDisease} onChange={(e) => setCurableDisease(e.target.value)} />
                        <datalist id="disease">
                            {diseaseOptions.map((option, index) => (
                                <option key={index} value={option} />
                            ))}
                        </datalist>
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>Ліки які покриваються:</label>
                        <input list='drugs' id='drugsList' type="text" value={drugs} onChange={(e) => setDrugs(e.target.value)} />
                        <datalist id="drugs">
                            {drugsOptions.map((option, index) => (
                                <option key={index} value={option} />
                            ))}
                        </datalist>
                    </div>
                    <Divider />
                    <div className="form-group-desc">
                        <label>Опис полісу:</label>
                        <textarea className='desc-input' type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>PDF Документів:</label>
                        <input type="file" onChange={handleFileChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
