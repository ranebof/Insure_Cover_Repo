
import React, { useState } from 'react';
import './dist/sideMenu.css';

const SideMenu = ({ selectedCell, onClose }) => {
    const blocksData = [
        { id: 1, name: 'Block 1' },
        { id: 2, name: 'Block 2' },
        { id: 3, name: 'Block 3' },
        { id: 4, name: 'Block 4' },
        { id: 5, name: 'Block 5' },
        { id: 6, name: 'Block 6' },
        { id: 7, name: 'Block 7' },
        { id: 8, name: 'Block 8' },
        { id: 9, name: 'Block 9' },
        { id: 10, name: 'Block 10' },
        { id: 11, name: 'Block 11' },
    ];

    const [expandedBlock, setExpandedBlock] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const handleBlockClick = (blockId) => {
        setExpandedBlock(expandedBlock === blockId ? null : blockId);
    };

    return (
        <div className="side_menu">
            <div className="icon" onClick={onClose}>
                <div className="arrow"></div>
            </div>
            <div className='header_text'>
                <span>Назва Компанії</span>
                <span>Поліси</span>
            </div>
            <div className="blocks_list">
                {blocksData.map((block) => (
                    <div
                        key={block.id}
                        className={`block ${expandedBlock === block.id ? 'expanded' : ''}`}

                    >
                        {expandedBlock !== block.id && (
                            <div className='company_name'>
                                <span className="block_number">#{block.id}</span>
                                <span className="block_name">{block.name}</span>
                            </div>
                        )}
                        {expandedBlock === block.id && (
                            <div className="expanded-info">
                                <input
                                    className="expanded-search-bar"
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <div className="expanded-buttons-cont">
                                    <button className="pdf-button">Відкрити PDF</button>
                                    <button className="edit-button">Редагувати</button>
                                </div>
                            </div>
                        )}
                        <span className="block_plus" onClick={() => handleBlockClick(block.id)}>&#43;</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideMenu;
