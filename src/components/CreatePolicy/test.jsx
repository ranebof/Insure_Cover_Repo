import React, { useState } from 'react';

function SelectInputWithModal({ onClose }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');



    const handleSelectOption = (option) => {
        setSelectedOption(option);
    };

    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <input
                        type="text"
                        placeholder="Search options..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <ul>
                        {filteredOptions.map((option, index) => (
                            <li key={index} onClick={() => handleSelectOption(option)}>
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {selectedOption && <p>You selected: {selectedOption}</p>}
        </div>
    );
}

export default SelectInputWithModal;
