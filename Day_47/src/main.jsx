// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Laptops from './Laptops.jsx'
// import Mobiles from './Mobiles.jsx'
// createRoot(document.getElementById('root')).render(
//    <Laptops></Laptops>
//    <Mobiles></Mobiles>
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Master from './Master.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Master></Master>
    </>
  </StrictMode>
);
