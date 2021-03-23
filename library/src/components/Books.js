// react
import React,{useState} from "react";
// Own Css 
import "./Books.css";
//import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

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
      <h1>BOOK LIST</h1>
      {
        
        // use data State Variable For Get Data Use JavaScript Map Mathod
       data? data.map(
          function(data){
                  return ( 
                    <table className="table">
    <thead>
      <tr>
        <th> Book No</th>
        <th> Book Name</th>
        <th> Rent Cost</th>
        <th>Available Copies</th>
        <th>ISBN No</th>
        <th>Country</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{data.id}</td>
        <td>{data.name} </td>
        <td>{data.Cost}</td>
        <td>{data.Copies}</td>
        <td> {data.ISBN}</td>
        <td><Link to='/rent'>Rent</Link></td>
      </tr>
      </tbody>
  </table>
                  )
          }
        ):""
      }
    </div>
  );
}
export default Books;