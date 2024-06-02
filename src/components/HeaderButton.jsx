import React from 'react';
import './HeaderButton.css';

const HeaderButton = ({ text, onClick }) => {
    return (
        <button className="Header__button" onClick={onClick}>
            {text}
        </button>
    );
}

export default HeaderButton;