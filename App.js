import React from "react";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement('div', { id: 'parent' }, React.createElement('div', { id: 'child' }, React.createElement('h1', {}, 'This is heading inside div using react')));

root.render(parent);