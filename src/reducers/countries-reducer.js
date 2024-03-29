import {GET_COUNTRIES, GET_COUNTRY, DELETE_COUNTRY, SEARCH_COUNTRIES, SET_CONTINENT} from '../actions/actions';
import countriesData from '../data/countries.json';

const initialState = {
    countries: countriesData,
    selectedCountry: {},
    visibleCountries: countriesData,
};

const countriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_COUNTRIES:
            return state;
        case GET_COUNTRY:
            const selectedCountry = state.countries.find(country => country.id === parseInt(action.id));
            return {...state, selectedCountry};
        case DELETE_COUNTRY:
            const notDeletedCountries = state.countries.filter(country => country.id !== action.id);
            const notDeletedVisibleCountries = state.visibleCountries.filter(country => country.id !== action.id);
            return {...state, countries: notDeletedCountries, visibleCountries: notDeletedVisibleCountries};
        case SEARCH_COUNTRIES:
            const visibleCountries = state.countries.filter(country => (country.name).toLowerCase().includes((action.searchText).toLowerCase()));
            return {...state, visibleCountries};
        case SET_CONTINENT:
            const continentCountries = state.countries.filter(country => country.continent === action.name);
            return {...state, visibleCountries: continentCountries}
        default:
            return state;
    }
}

export default countriesReducer;