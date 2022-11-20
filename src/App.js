import React from 'react';
import './App.css';
import { Navbar } from './Companenta/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Email } from './Pages/Email/Email';
import { Contact } from './Pages/Contact/Contact';
import { Crypto } from './Pages/Crypto/Crypto';
import { Kanban } from './Pages/Kanban/Kanban';
import { Invoice } from './Pages/Invoice/Invoice';
import { Banking } from './Pages/Banking/Banking';
import { Ticketing } from './Pages/Ticketing/Ticketing';




function App() {
  return (
    <Router>
      <div className="App">
        <div className='left-content'>
          <Navbar />
        </div>
        <div className='right-content'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/email" element={<Email />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crypto" element={<Crypto />} />
            <Route path="/kanban" element={<Kanban />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/ticketing" element={<Ticketing />} />
          </Routes>

        </div>
      </div>
    </Router>
  );
}

export default App;
