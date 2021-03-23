// react
import React,{useState} from "react";
// Own Css 
import "./Books.css";
//import {Card} from "react-bootstrap";

 function Books() {
// react Hook For State Handler
  const [data , setData]=useState(null)

// Fetch Function   
  fetch("./data/data.json").then(
    function(res){
    return res.json()
  }).then(function(data){
  // store Data in State Data Variable
    setData(data)
  }).catch(
    function(err){
      console.log(err, ' error')
    }
  )

  return (
    <div className="App">
      {
        // use data State Variable For Get Data Use JavaScript Map Mathod
       data? data.map(
          function(data){
                  return ( <div className="card">
                   <div className='card-image'> 
                       <img src='images/image7.jpg'></img>
                  </div>
                  <div className='card-content'>
                        <h2> Book No:{data.id}</h2>
                        <h2> Book Name:{data.name} </h2> 
                        <h2> Rent Cost:{data.Cost}</h2>
                        <h2> Available Copies:{data.Copies}</h2>
                        <h2>ISBN No: {data.ISBN}</h2>
                </div>
            </div>
                  )
          }
        ):""
      }
    </div>
  );
}
export default Books;