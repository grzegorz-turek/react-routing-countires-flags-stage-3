import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import { deleteCountry, setContinent } from '../actions/actions';

class ContinentsContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <select onChange={this.chooseContinent}>
                        <option value={'Europa'}>Europa</option>
                        <option value={'Afryka'}>Afryka</option>
                    </select>
                </div>
                <CountryFlagList countries={this.props.visibleCountries} deleteCountry={this.deleteCountry} />
            </div>
        )

    }

    deleteCountry = (id) => {
        this.props.dispatch(deleteCountry(id));
    }

    chooseContinent = (event) => {
        this.props.dispatch(setContinent(event.target.value));
    }

    componentDidMount = () => {
        this.props.dispatch(setContinent('Europa'));
    }    
}

const mapStateToProps = function (store) {
    return {
        visibleCountries: store.countriesReducer.visibleCountries
    };
};

export default connect(mapStateToProps)(ContinentsContainer);