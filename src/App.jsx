import './App.css';
import React, { useEffect, useState } from 'react';
import CardsDisplay from './Components/CardsDisplay';
import FilterCards from './Components/FilterCards';
import getAllCountriesInfo from './services/countriesService';

function App() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);
    const [selectedContinent, setSelectedContinent] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        getAllCountriesInfo().then(data => {
            setCountries(data);
            setFilteredCountries(data);
        });
    }, []);

    const continentColors = {
        Asia: 'red',
        Europe: 'green',
        Africa: 'grey',
        Oceania: 'lightblue',
        "North America": 'yellow',
        Antarctica: 'white',
        "South America": 'orange',
    };

    const filterByContinent = (continent) => {
        setSelectedContinent(continent);
        if (continent === null) {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter(country => country.continents[0] === continent);
            setFilteredCountries(filtered);
        }
    };

    const filterBySearch = (query) => {
        setSearchQuery(query);
        if (query === '') {
            setFilteredCountries(countries);
        } else {
            const filtered = countries.filter(country =>
                country.name.common.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCountries(filtered);
        }
    };

    const showAllCards = () => {
        setSelectedContinent(null);
        setFilteredCountries(countries);
    };

    return (
        <div className="App">
            <div className="background-image"></div>
            <FilterCards
                continents={Array.from(new Set(countries.map(country => country.continents[0])))}
                selectedContinent={selectedContinent}
                onContinentChange={filterByContinent}
                onSearchChange={filterBySearch}
                showAllCards={showAllCards}
            />
            <CardsDisplay countries={filteredCountries} continentColors={continentColors} />
        </div>
    );
}

export default App;
