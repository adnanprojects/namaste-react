import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [log, setLog] = useState('Login');
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex items-center justify-between shadow-lg mb-5">
            <div className=''>
                <Link to='/'><img className="w-[120px]" src={LOGO_URL} /></Link>
            </div>
            <div className=''>
                <ul className="flex text-lg pr-4">
                    <li className="border p-2">
                        Online Status : {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li className="p-2">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="p-2">
                        <Link to='/contact'>Contact Us</Link>
                    </li>
                    <li className="p-2">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="p-2">
                        <Link to='/cart'>Cart</Link>
                    </li>
                    <button onClick={() => {
                        log === 'Login' ? setLog('Logout') : setLog('Login');
                    }} >{log}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;