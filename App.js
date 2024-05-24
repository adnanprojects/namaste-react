import React from "react";
import ReactDOM from 'react-dom/client';

/** Blueprint
 * Header
 *  - logo
 *  - Nav
 * Body
 *  - search
 *  - card container
 *      - cards
 * Footer
 *  - copyright
 *  - links
 *  - address
 */

const Header = () => {
    return (
        <div className="header">
            Header
        </div>
    );
}

const Body = () => {
    return (
        <div className="body">
            Body
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer">Footer</div>
    );
}

const App = () => {
    return (
        <div className="app">
            App
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);