import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const style = {
    h1: {
        color: '#9A9B9C',
    },
    p: {
        marginTop: 0,
        marginBottom: 80,
    },
};

const Start = ({startClick}) => {
    return (
        <div>
            <h1 style={style.h1}>Science or Fiction?</h1>
            <p style={style.p}>
                How does your knowledge of science compare?
            </p>
            <Button title="START >" primary onClick={startClick} />
        </div>
    );
};

Start.propTypes = {
    startClick: PropTypes.func.isRequired,
};

export default Start;
