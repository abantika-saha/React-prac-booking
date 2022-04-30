import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Flights from "./components/Flights/Flights";
import Bookings from "./components/Bookings/Bookings";
import Cars from "./components/Cars/Cars";
import Attractions from "./components/Attractions/Attractions";
import Taxis from "./components/Taxis/Taxis";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <BrowserRouter className="App">
      <Switch>
      <Route exact path="/" render={() => <Home/>} /> 
      <Route exact path="/flights" component={Flights} />
      <Route exact path="/bookings" component={Bookings} />
      <Route exact path="/cars" component={Cars} />
      <Route exact path="/attractions" component={Attractions} />
      <Route exact path="/taxis" component={Taxis} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
