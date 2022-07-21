import React, { Component, useState,useEffect, useRef, createRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button,Form } from 'react-bootstrap';
import axios from "axios";




const CurrencyData=()=>{
  
  
  
    return (
      <div className="Currencyform">
  
     

     <Form.Group className="mb-3" controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" 
     
       />
       
       
     </Form.Group>
   
     <Form.Group className="mb-3" controlId="formBasicPassword">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" placeholder="Password" 
        
       />
     </Form.Group>
     
     <Button  variant="primary" >
       Submit
     </Button>
   
      
      </div>
    );
  }

  

  export default CurrencyData;