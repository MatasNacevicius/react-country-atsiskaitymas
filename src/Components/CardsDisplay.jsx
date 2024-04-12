import React from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const CardsDisplay = ({ countries, continentColors }) => {
    return (
        <div className="card-container">
            {countries.map((country, index) => (
                <div key={index} className="card-wrapper">
                    <Card className="card" style={{ backgroundColor: continentColors[country.continents[0]] }}>
                        <img
                            alt={country.name.common + " Flag"}
                            src={country.flags.png}
                            className="card-img"
                        />
                        <CardBody>
                            <CardTitle tag="h5">{country.name.common}</CardTitle>
                            <CardText>
                                <p>Capital: {country.capital}</p>
                                <p>Continent: {country.continents[0]}</p>
                            </CardText>
                            <Button>More info</Button>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default CardsDisplay;
