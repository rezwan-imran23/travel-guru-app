import React, { useContext, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import "./Login.css"
import icon from '../../Image/fb.png';
import google from '../../Image/ggl.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.cofig';
import { UserContext } from '../../App';

const Login = () => {
    const [newUser,setNewUser]=useState(false);
    const [user,setUser] = useState({
        isSignedIn: false,
        name:'',
        email:'',
        password:'',
        photo:'',
        error:'',
        success: false
    });

    const [loggedInUser, setLoggedInUser]=useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleFaceBookSignIn = () => {

        firebase.auth().signInWithPopup(fbProvider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }






    const handleGoogleSignIn = () => {

        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
          
            const {displayName,email} = result.user;
            const signedInUser = {name: displayName, email}
            
            setLoggedInUser(signedInUser)
            history.replace(from)
            // ...
          }).catch(function(error) {
            
            var errorMessage = error.message;
            console.log(errorMessage);
            
            // ...
          });
    }
   
   const handleBlur = (event)=>{
      let isFieldVlid = true;
      if(event.target.name === 'email'){
        isFieldVlid = /\S+@\S+\.\S+/.test(event.target.value);
         
      }

      if(event.target.name === 'password'){
        const isPasswordValid = event.target.value.length >= 6;
        const passwordHasNumber = /\d{1}/.test(event.target.value);
        isFieldVlid = (isPasswordValid && passwordHasNumber);
    }

    if(isFieldVlid){
        const newUserInfo = {...user};
        newUserInfo[event.target.name]= event.target.value;
        setUser(newUserInfo);
    }
   }

   const handleSubmit = (event)=>{
      
     if(newUser && user.email && user.password){

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(response =>{
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            updateUserName(user.name);
            console.log('signIn user info',response.user)
        })
        .catch(error => {
            // Handle Errors here.
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            
            // ...
          });
            
           

     }

     if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(response => {
            const newUserInfo = {...user};
            newUserInfo.error = '';
            newUserInfo.success = true;
            setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
            history.replace(from);
        })
        .catch(function(error) {
            // Handle Errors here.
            const newUserInfo = {...user};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
            // ...
          });
     }


     
     event.preventDefault();
   }

   const updateUserName = name => {
    const user = firebase.auth().currentUser;

     user.updateProfile({
      displayName: name,
      
    }).then(function() {
      console.log('user name updated successfully');
    }).catch(function(error) {
        console.log(error);
    });
   }
  
   const errorStyle = {
        color:'red',
        textAlign:'center'
   }

   const SuccessfulStyle = {
    color:'green',
    textAlign:'center',
    fontWeight: 500,
}
const [updateUser, setupdateUser]=useState({});
    return (
        <Container>
            <Row>
          
            <div className="col-4">
            
            </div>

            <div className="col-4">
            <div className="card p-4 mb-4">
            <h5>{newUser?'Create an account':'Login'}</h5>

            <form onSubmit={handleSubmit}>

            {
            newUser && <div className="form-group">
            <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="First name" required/>
            </div>
            }

            {
            newUser && <div className="form-group">
            <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="Last name"/>
            </div>
            }


            <div className="form-group">
            <input type="text" name="email" onBlur={handleBlur} className="form-control" placeholder="Username or Email" required/>
            </div>

            <div className="form-group">
            <input type="password" name="password" onBlur={handleBlur} className="form-control" placeholder="Password" required />
            </div>

            {
            newUser &&<div className="form-group">
            <input type="password" name="password" onBlur={handleBlur} className="form-control" placeholder="Confirm Password" required />
            </div>
            }

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <input type="submit" className={newUser?'btn btn-block mb-4':'btn btn-block'} value={newUser?'Create an account' :'Login'}/>
                     
            </form>


            {newUser ? '': <p className="forgot-password text-right"> Forgot <a href="#">password?</a></p>}

            {/* <h6 className="makeAcc">Dont you have account? <span><Link to="/create">Create an account</Link></span></h6>  */}
            <h6 className="makeAcc">{newUser?'Already have an account ?':'Dont you have account?'} <span onClick={()=> setNewUser(!newUser)} style={{cursor:'pointer', color:'orange'}}>{newUser? 'Log In':'Create an account'}</span> 
                </h6>
             
              
            </div>
            <p style={errorStyle}>{user.error}</p>
            {user.success && <p style={SuccessfulStyle}>User {newUser ?'Created':'Logged In'} Successfully</p>}
            <div className="d-flex justify-content-center">
            <div className="underLineBorder"></div>
                <h5 className="text">or</h5>
            <div className="underLineBorder"></div>
  
            </div>
            
            <div className="faceBookSign">
            <img src={icon} alt="" />
            <button onClick={handleFaceBookSignIn}><h5>Continue With Facebook</h5></button>
            </div>

            <div className="googleSign">
            <img src={google} alt="" />
            <button onClick={handleGoogleSignIn}><h5>Continue With Google</h5></button>
            </div>
            </div>
            
            <div className="col-4"></div>
            
            </Row>   
        </Container>
        
    );
};

export default Login;