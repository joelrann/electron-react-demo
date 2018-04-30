import React from 'react';
import PropTypes from 'prop-types';

const style = {
    position: 'absolute',
    bottom: '7%',
    right: '10%',
    fontFamily: 'Trebuchet MS',
    fontSize: 25,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    color: '#6C6E6F',
};

const ExitButton = (props) => {
    return (
        <button style={style} onClick={props.onClick}>
            EXIT >
        </button>
    );
};

ExitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default ExitButton;
