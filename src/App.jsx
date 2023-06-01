
import React from "react";
import "./App.css";
import Ride from './ride';
import RideT from "./components/RideT";
import { Route, Routes } from "react-router-dom";

function App(){
return(
  <>
  <Routes>

  <Route path="/" element={ <Ride/> }/>
                  <Route path="/RideT" element={ <RideT/> }/>
     </Routes>
  </>
);
}
export default App;