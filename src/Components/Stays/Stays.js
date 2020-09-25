import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import hotels from '../../fakeData/hotels';

import StayDetails from '../StayDetails/StayDetails';
import './Stay.css'



const Stays = () => {
const  [hotel, setHotel] = useState(hotels)

// console.log(hotel);
    return (
        <Container>

        <Row>

            <Col sm={7}>
            <div className="headTitle"><h4>Stay in Cox's Bazar</h4></div>
            <div>
            {
             hotel.map(hotel => <StayDetails hotel={hotel}></StayDetails>)
            }
            </div>
            </Col>

            <Col sm={5}>
            <div id="map-container-google-1">
           <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" style={{width:'100%',height:'80vh',borderStyle:'none'}}></iframe>
           </div>
            </Col>

        </Row>
        
        </Container>
        
    );
};

export default Stays;