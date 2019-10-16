import React from 'react';
import { Link } from 'react-router';
import CountryFlag from './flag.component';
import '../country.css';

const CountryFlagList = props => (
    <div className={'countries-list'}>
        {props.countries.map(country => 
            <div className={'single-country'} key={country.id}>
                <Link className={'logo'} key={country.id} to={'countries/country/' + country.id}>
                    <CountryFlag country={country} />
                </Link>
                <button onClick={props.deleteCountry.bind(null, country.id)}>Remove</button>
            </div>
        )}
    </div>
);

export default CountryFlagList;