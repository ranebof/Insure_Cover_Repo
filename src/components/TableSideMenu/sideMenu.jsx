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

    const handleBlockClick = (blockId) => {
        setExpandedBlock(expandedBlock === blockId ? null : blockId);
    };

    return (
        <div className="side_menu">
            <div className='header_text'>
                <span>Назва Компанії</span>
                <button className='close_button' onClick={onClose}>Close</button>
                <span>Поліси</span>
            </div>
            <div className="blocks_list">
                {blocksData.map((block) => (
                    <div
                        key={block.id}
                        className={`block ${expandedBlock === block.id ? 'expanded' : ''}`}
                        onClick={() => handleBlockClick(block.id)}
                    >
                        <div className='company_name'>
                            <span className="block_number">#{block.id}</span>
                            <span className="block_name">{block.name}</span>
                        </div>
                        <span className="block_plus">&#43;</span>

                    </div>
                ))}
            </div>
        </div>
    );
};


export default SideMenu;