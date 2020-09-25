import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import "./Sajek.css";
import { ArrowRight } from 'react-bootstrap-icons';
import image1 from '../../Image/Sajek.png';
import image2 from '../../Image/Sreemongol.png';
import image3 from '../../Image/sundorbon.png';
import { Link } from 'react-router-dom';

const Sajek = () => {

const handleBooking = ()=>{
  console.log('done')
  
}

    return (
        
 <div className="homeSection">
  <Row >
    <Col sm={5} className="colums"> 
        <div className="headline">
        <h1>Sajek Vally</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus error provident laudantium dicta temporibus nihil odio incidunt</p>
        <br/>
        <Link to="/coxbazar"><Button className="login-btn" onClick={handleBooking}>Booking <ArrowRight></ArrowRight></Button></Link>
        
    </div>
    </Col>
    
    <Col sm={2} className="colums">
    <Link to="/coxsbazar"><div className="imageBox"><img src={image1} /></div></Link>
    <div class="placeName"><h2>COX BAZAR</h2></div>
    </Col>
    <Col sm={2} className="colums">
    <Link to="/sajek"><div className="imageBox"><img src={image2} alt /></div></Link>
    <div class="placeName"><h2>SAJEK VALLEY</h2></div>
    </Col>
    <Col sm={2} className="colums">
    <Link to="/sundarban"><div className="imageBox"><img src={image3} alt /></div></Link>
    <div class="placeName"><h2>SUNDARBAN</h2></div>
    </Col>
    
  </Row>
  </div>      
    );
};

export default Sajek;