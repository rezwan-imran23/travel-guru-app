import React from 'react';
import './StayDetails.css';

const StayDetails = (props) => {
   console.log(props.hotel);
   const {title,capacity,detail,img,price}=props.hotel;
    return (
        <div>
            <div className="hotelDetails">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h5>{title}</h5>
            <small>{capacity}</small>
            <br/>
            <small>{detail}</small>
            <br/>
            <br/>
            <h5>${price}/</h5>
            </div>
            
        </div>
        </div>
        
    );
};

export default StayDetails;