import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, onClick, primary }) => {
    const style = {
        width: 310,
        height: 86,
        fontSize: 42,
        backgroundColor: primary ? '#b8b630' : '#f5f5f6',
        borderWidth: 5,
        borderColor: primary ? '#b8b630' : '#ffffff',
        color: primary ? '#ffffff' : '#62666a',
    };

    return (
        <button style={style} onClick={onClick}>
            {title}
        </button>
    );
};

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    primary: PropTypes.bool,
};

Button.defaultTypes = {
    primary: false,
};

export default Button;
