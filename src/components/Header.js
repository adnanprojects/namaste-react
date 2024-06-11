import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

    const [log, setLog] = useState('Login');

    return (
        <div className="header">
            <div className="logo-container">
                <Link to='/'><img className="logo" src={LOGO_URL} /></Link>
            </div>
            <div className="nav-item">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
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