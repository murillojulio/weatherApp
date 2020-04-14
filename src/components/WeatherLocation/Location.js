import React from 'react';
import PropTypes from 'prop-types';
import './styleFont.css';

const Location = ({city}) => {
    //const city = props.city;
    //debugger;
    return (
        <div className="locationCont">
            <h1>{`${city}`}</h1>
        </div>
    );
};

Location.propTypes = {
    city: PropTypes.string.isRequired,
};

export default Location;