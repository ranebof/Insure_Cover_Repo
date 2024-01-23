import React, { useState } from 'react';
import './dist/table.css';

const Table = () => {
    const initialData = [
        { id: 1, name: 'AquaMax' },
        { id: 2, name: 'Apple' },
        { id: 3, name: 'Logitech' },
        { id: 4, name: 'Petzl' },
        { id: 5, name: 'Epson' },
        { id: 6, name: 'Staff' },
        { id: 7, name: 'T10-M' },
        { id: 8, name: 'Roland' },
        { id: 9, name: 'Warwick' },
        { id: 10, name: 'AquaMax' },
        { id: 11, name: 'Apple' },
        { id: 12, name: 'Logitech' },
        { id: 13, name: 'Petzl' },
        { id: 14, name: 'Epson' },
        { id: 15, name: 'Staff' },
        { id: 16, name: 'T10-M' },
        { id: 17, name: 'Roland' },
        { id: 18, name: 'Warwick' },
        { id: 19, name: 'AquaMax' },
        { id: 20, name: 'Apple' },
        { id: 21, name: 'Logitech' },
        { id: 22, name: 'Petzl' },
        { id: 23, name: 'Epson' },
        { id: 24, name: 'Staff' },
        { id: 25, name: 'T10-M' },
        { id: 26, name: 'Roland' },
        { id: 27, name: 'Warwick' },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const highlightSearch = (name) => {
        if (!searchQuery.trim()) {
            return name;
        }

        const lowerCaseQuery = searchQuery.toLowerCase();
        let startIndex = 0;
        const result = [];

        while (startIndex < name.length) {
            const index = name.toLowerCase().indexOf(lowerCaseQuery, startIndex);

            if (index === -1) {
                result.push(<span key={startIndex}>{name.substring(startIndex)}</span>);
                break;
            }

            result.push(<span key={startIndex}>{name.substring(startIndex, index)}</span>);
            result.push(
                <span key={index} style={{ color: 'lightgreen' }}>
                    {name.substring(index, index + searchQuery.length)}
                </span>
            );
            startIndex = index + searchQuery.length;
        }

        return result;
    };

    const filterData = () => {
        if (!searchQuery.trim()) {
            return initialData;
        }

        return initialData.filter((company) =>
            company.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    return (
        <div className="table-container">
            <div className='table_header_txt'><h3>Виберіть компанію</h3></div>
            <input
                className="search-bar"
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
            />

            <div className="grid-container">
                {filterData().map((company) => (
                    <div key={company.id} className="grid-row">
                        <div className="grid-cell">{highlightSearch(company.name)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Table;
