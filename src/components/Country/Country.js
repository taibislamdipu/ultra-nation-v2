import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log('country', props);
    const { name, flag, population, languages } = props.country;
    const languageName = languages.map(item => item.name);
    const handleAddCountry = props.handleAddCountry;

    return (
        <div className="country-container">
            <h1>{name}</h1>
            <img src={flag} alt="" />
            <h5>Population: {population}</h5>
            <p>Languages : {languageName}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;