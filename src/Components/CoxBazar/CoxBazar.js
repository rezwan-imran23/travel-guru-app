import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CoxBazar.css';




const CoxBazar = () => {
    return (
        
 <div className="homeSection">
  <Row >
    <Col sm={6} className="colums"> 
        <div className="headline">
        <h1>Cox Bazar</h1>
        <p>Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.</p>
        
    </div>
    </Col>

    <Col sm={1}></Col>
    
    <Col sm={4} className="colums">
    <div className="fullBox">
    <div className="booking-box">

        <form>
        <label style={{color:"gray"}}>
        <h6>Origin</h6>
        </label>
        <input type="text" name="" id="" className="form-control mb-2"/>


        <label style={{color:"gray"}}>
        <h6>Destination</h6>
        </label>
        <input type="text" name="" id="" className="form-control"/>

        <div className="date-box" >
        <div>
        <h6>From</h6>
        <input type="date" name="" id="" className="form-control" />
        </div>
        <div className="ml-3">
        <h6>To</h6>
        <input type="date" name="" id="" className="form-control"/>
        </div>
        </div>
        <br/>
        <Link to="/stays"><Button className="booking-btn btn-block">Start Booking</Button></Link>
         </form>
       
        
    </div>
    </div>
    </Col>

</Row>
  </div>      
    );
};

export default CoxBazar;