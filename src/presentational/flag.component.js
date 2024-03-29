import React from 'react';
import '../country.css';

const CountryFlag = props => (
    <div className={'country-logo-wrapper'}>
        <img className={'country-logo'} src={props.country.imageUrl} alt={'Country Flag'}/>
    </div>
);

export default CountryFlag;