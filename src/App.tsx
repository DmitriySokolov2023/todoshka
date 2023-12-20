import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import IncomingTasks from "./components/pages/IncomingTasks";
import Navbar from "./components/UI/navbar/Navbar";


function App() {
    const [value, setValue] = useState<string>('')
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/tasks" element={<IncomingTasks />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
