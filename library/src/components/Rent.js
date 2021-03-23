//import { Button } from 'bootstrap';
import React from 'react';

import "./Rent.css";
//import Cards from "./Cards"
function Rent() {
    return (
        
        <div className='rent-pannel'>
            <h1>Tap Rent Button to avail now!!!!</h1>
           
            <div className='book-image'>
                <img src='images/image7.jpg'/>
            </div>
            <button type="submit" className="rent-btn">Rent Now</button>
        </div>
    )
}

export default Rent
