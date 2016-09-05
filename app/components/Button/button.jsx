import React, { PropTypes } from 'react';

import './button.scss';

const Button = ({ label, onClick }) => <button className="button" onClick={onClick}>
            {label}
</button>;

Button.propTypes = {
    label: PropTypes.string.required,
    onClick: PropTypes.func,
};

export default Button;
