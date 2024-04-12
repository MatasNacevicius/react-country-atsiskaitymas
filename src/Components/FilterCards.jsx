import React from 'react';

const FilterCards = ({ continents, selectedContinent, onContinentChange, onSearchChange, showAllCards }) => {
    const continentColors = {
        Asia: 'red',
        Europe: 'green',
        Africa: 'grey',
        Oceania: 'lightblue',
        "North America": 'yellow',
        Antarctica: 'white',
        "South America": 'orange',
    };

    return (
        <div className="filter-container">
            <div className="buttons-container">
                <button
                    className="show-all-button"
                    onClick={showAllCards}
                    style={{ backgroundColor: 'black', color: 'white' }}
                >
                    Show All
                </button>
                {continents.map((continent, index) => (
                    <button
                        key={index}
                        onClick={() => onContinentChange(continent)}
                        className={`continent-button ${selectedContinent === continent ? 'active' : ''}`}
                        style={{ backgroundColor: continentColors[continent], color: 'black' }}
                    >
                        {continent}
                    </button>
                ))}
            </div>
            <input
                type="text"
                placeholder="Search by country name"
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
            />
        </div>
    );
}

export default FilterCards;
