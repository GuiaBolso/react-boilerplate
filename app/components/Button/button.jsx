import React, { PropTypes } from 'react';

const Button = ({ label, onClick }) => <button onClick={onClick}>
            {label}
</button>;

Button.propTypes = {
    label: PropTypes.string.required,
    onClick: PropTypes.func,
};

export default Button;
