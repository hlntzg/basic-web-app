import './../style.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyApp from './MyApp';

const root = ReactDOM.createRoot(document.getElementById('app')!);
root.render(<MyApp />);