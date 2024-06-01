import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {

    const [log, setLog] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-item">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button onClick={() => {
                        log === 'Login' ? setLog('Logout') : setLog('Login');
                    }} >{log}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;