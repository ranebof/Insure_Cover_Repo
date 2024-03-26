import './dist/createPolicy.css';
import React, { useState } from 'react';
import SelectInputWithModal from './test';
function Divider() {
    return <div className="divider"></div>;
}

export default function CreatePolicy() {
    const [policyNumber, setPolicyNumber] = useState('');
    const [policyName, setPolicyName] = useState('');
    const [company, setCompany] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = () => {
        setModalIsOpen(true);
    };
    const handleCloseModal = () => {
        setModalIsOpen(false);
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
                    {/* <div className="form-group">
                        <label>Хвороби які покриваються:</label>
                        <input type="text" value={curableDisease} onChange={(e) => setCurableDisease(e.target.value)} />
                    </div>
                    <Divider />
                    <div className="form-group">
                        <label>Ліки які покриваються:</label>
                        <input type="text" value={drugs} onChange={(e) => setDrugs(e.target.value)} />
                    </div> */}
                    <div className="form-group">
                        <label>Хвороби які покриваються:</label>
                        <input type="text" />

                        <button className='modal-btn' onClick={handleOpenModal}>Select Option</button>
                        {modalIsOpen && (
                            <SelectInputWithModal onClose={handleCloseModal} />
                        )}
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
