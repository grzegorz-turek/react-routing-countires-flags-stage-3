import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { searchCountries, deleteCountry } from '../actions/actions';
import '../country.css';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        //this.props.dispatch(getCountries());
        this.props.dispatch(searchCountries(''));
    }

    render() {
        return (
            <div>
                <div className={'search text-center'}>
                    <input type={'text'} name={'searchInput'} onChange={this.search} placeholder={'Country search...'} />
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
        )
    }

    search = (event) => {
        this.props.dispatch(searchCountries(event.target.value));

    }

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    }
}

const mapStateToProps = function (store) {
    return {
        //countries: store.countriesReducer.countries,
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(CountryFlagContainer);