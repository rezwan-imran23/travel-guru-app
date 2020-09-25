import React from 'react';
import { Container, Row } from 'react-bootstrap';
import "./CreatAccount.css";
import icon from '../../Image/fb.png';
import google from '../../Image/ggl.png';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <Container>
            <Row>
          
            <div className="col-4"></div>
            <div className="col-4 mb-5">
            <form>
            <div className="card p-4 mb-4">
            <h5>Create an account</h5>
           <div className="form-group">
           <input type="text" className="form-control" placeholder="First Name" />
           </div>

            <div className="form-group">
            <input type="text" className="form-control" placeholder="Last Name" />
            </div>

            <div className="form-group">
            <input type="email" className="form-control" placeholder="User name or Email" />
            </div>


            <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>


            <button type="submit" className="btn btn-block">Create an account</button>
            
            <h6 className="createAcc">Already have an account? <span><Link to="/login">Login</Link></span></h6>   
            </div>
                            
            </form>
            <div className="d-flex justify-content-center">
            <div className="underLineBorder"></div>
                <h5 className="text">or</h5>
            <div className="underLineBorder"></div>
  
            </div>
            
            <div className="socialIcon">
            <img src={icon} alt="" />
            <h5>Continue With Facebook</h5>
            </div>

            <div className="socialIcon">
            <img src={google} alt="" />
            <h5>Continue With Google</h5>
            </div>
            </div>
            
            <div className="col-4"></div>
            
            </Row>     
        </Container>
        
    );
};

export default Login;