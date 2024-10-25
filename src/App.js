import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout1 from './Container/Layout1';
import { useState } from 'react';
import MainBody from './Container/MainBody';
import CRM from './Container/CRM';
import EditableTables from './Container/EditableTables';
import Analytic from './Container/Analytic';
import DataTables from './Container/DataTables';

function App() {
  const [showAccordian, setShowAccordian] = useState(true);
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Navigate to="/crm" />} />
        <Route path='/' element={<Layout1 showAccordian={showAccordian} setShowAccordian={setShowAccordian} />}>
          <Route path='/' element={<MainBody showAccordian={showAccordian} setShowAccordian={setShowAccordian} />}>
            <Route path='/crm' index element={<CRM />} />
            <Route path='/editable' index element={<EditableTables />} />
            <Route path='/analytics' index element={<Analytic />} />
            <Route path='/reports' index element={<DataTables />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
