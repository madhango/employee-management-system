import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEmployee from "./pages/AddEmployee";

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddEmployee />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;