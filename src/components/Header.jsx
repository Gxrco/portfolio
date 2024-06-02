import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from "./HeaderButton";
import "./Header.css";
import logo from "../assets/Gerco.png";

const Header = () => {
    const navigate = useNavigate();

    const goToPage = (page) => {
        navigate(`/${page}`);
    };

    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__nav">
                <Button text="Home" onClick={() => goToPage('')} />
                <Button text="About" onClick={() => goToPage('about')} />
                <Button text="Projects" onClick={() => goToPage('projects')} />
                <Button text="Contact" onClick={() => goToPage('contact')} />
            </div>
        </div>
    )
}

export default Header;