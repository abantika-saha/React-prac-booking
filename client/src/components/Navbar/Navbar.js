import React from "react";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faCalendar,
  faCar,
  faMonument,
  faPlane,
  fas,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas, fab);

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Text"><b>BookEasily.com</b></div>
      <div className="Categories">
      <span className="Spacefirst">
        <div className="Button">
          <FontAwesomeIcon icon={faBed} />
          <span className="Buttontext">Stays</span>
        </div>
        </span>
        <span className="Space">
        <div className="Button">
          <FontAwesomeIcon icon={faCalendar} />
          <span className="Buttontext">Bookings</span>
        </div>
        </span>
        <span className="Space">
        <div className="Button">
          <FontAwesomeIcon icon={faPlane} />
          <span className="Buttontext">Flights</span>
        </div>
        </span>
        <span className="Space">
        <div className="Button">
          <FontAwesomeIcon icon={faCar} />
          <span className="Buttontext">Cars</span>
        </div>
        </span>
        <span className="Space">
        <div className="Button">
          <FontAwesomeIcon icon={faMonument} />
          <span className="Buttontext">Attractions</span>
        </div>
        </span>
        <span className="Space">
        <div className="Button">
          <FontAwesomeIcon icon={faTaxi} />
          <span className="Buttontext">Taxis</span>
        </div>
        </span>
      </div>
      <h1 className="Para">A lifetime of discounts? It's Genius.</h1>
      <p className="Text">Get rewarded for your travels – unlock instant savings of 10% or more with a free Booking.com account</p>
    </div>
  );
}

export default Navbar;
