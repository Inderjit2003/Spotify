import React, { useState,useEffect } from 'react';
import axios from 'axios';
import LsNavbar from './LsNavbar'
import { Button, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Style from '../CSS/Home.module.css'
import { Link ,useNavigate} from 'react-router-dom'



export default function Signup() {

//Showing Password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const (gofprward,goback) =useHistory()

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
};
  //useState for inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  
  const [formErrors , setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);
  const formsubmission = () => {
    fetch("http://localhost:3000/signup", {
      method: "post",
      headers:{
        "Content-Type": "application/json",
      },
      body : JSON.stringify({username,email,password}),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        alert(data);
        // data.email == email && data.password == password 
        if(data ) {
          navigate("/Home");
        }else{
          alert(error);
          // navigate("/");
        }
      })
    })

    console.log("Email is =" + email);
    console.log("Password is = " + password);

  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const errors = validateForm();
    if(Object.keys(errors).length === 0){
      formsubmission();
    //  window.location.href = '/';
    }else{
      setFormErrors(errors);
    }
  };

  const validateForm = () =>{
    const errors = {};
    const reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!username){errors.username = 'Username is required!';}
    if(!email){errors.email = 'Email is required!';}
    else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
     } 
    //  else if (!/(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]/.test(password)) {
    //   errors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';}
      if(password !== confirmPassword) {errors.confirmPassword = 'Passwords do not match';}
      return errors;
  };



  return (
    <div><div className={`${Style.bgls}`}>
    <LsNavbar />
    {/* Login form */}
    <div className={`${Style.LoginDiv}`} >
    <Card className={``} style={{backgroundColor:'black',color:'white',width:'43rem',alignItems:'center',display:'flex',height:'34rem'}} >
       <Card.Body >
            <h2 className='fw-bold  ' style={{textAlign:'center'}}> Signup for free to start listening </h2>
            <hr  className=' my-3' />
            <div className={` ${Style.loginform}`}>
            <div className={`${Style.textinputdiv}`}> 
              <div>
                 <label for='username' class="form-label">Username</label>
                  </div>
                 <div className={`${Style.inputcontainer}`}>
                  <input type='text'  placeholder='username' className={`form-label `}   onChange={(e) => setUsername(e.target.value)}  name='username' id='username' required />
              </div>  <p>{formErrors.username}</p>
            </div>
            </div>
            <div className={`${Style.loginform}`}>
            <div className={`${Style.textinputdiv}`}> 
              <div>
                 <label for='email' class="form-label">Email ID</label>
                  </div>
                 <div className={`${Style.inputcontainer}`}>
                  <input type='email'  placeholder='emailID' className={`form-label `}   onChange={(e) => setEmail(e.target.value)}  name='email' id='email' required />
              </div> <p>{formErrors.email}</p>
            </div>
            </div>
            <div className={`${Style.loginform}`}>
            <div className={`${Style.textinputdiv}`}>
                  <div>
                    <label htmlFor='password' className="form-label text-white">Password</label>
                  </div>
                  <div className={Style.inputcontainer}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder='password'
                      className={`form-label`}
                      name='password'  
                      id='password'   onChange={(e) => setPassword(e.target.value)}
                      required  />
                    <button
                      type="button" 
                      className={`btn  ${Style.inputiconbutton}`}
                      onClick={togglePasswordVisibility} 
                    ><FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                    </button>
                  </div>
                  <p style={{width:'55vh'}}>{formErrors.password}</p>
                </div>
          </div>
          <div className={`${Style.loginform}`}>
            <div className={`${Style.textinputdiv}`}>
                  <div>
                    <label htmlFor='ConfirmPassword' className="form-label text-white">Confirm Password</label>
                  </div>
                  <div className={Style.inputcontainer}>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder='Confirm Password'
                      className={`form-label`} 
                      id='ConfirmPassword'
                      // value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                   
                      required  />
                    <button
                      type="button" 
                      className={`btn  ${Style.inputiconbutton}`}
                      onClick={toggleConfirmPasswordVisibility} 
                    ><FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                    </button>
                  </div> <p>{formErrors.confirmPassword}</p>
                </div>
          </div>
            <div >
            <Button className={`rounded-pill mx-5 mt-4 fw-semibold ${Style.button}`} style={{backgroundColor:'#1ed760',borderColor:'#1ed760',width:'25rem',color:'black'}}  onClick={handleSubmit}  >
                  Signup
            </Button>
                <br/>
               
                <div  style={{color:'rgb(104, 105, 104)',marginLeft:'135px'}}>
                 <span >Already have an account?</span>
                 </div>
                 <div style={{color:'white',marginLeft:'160px'}}>
                <Link to='/login' style={{color:'white'}}>Login for Spotify</Link>
                </div>
                <br />
              </div>
       </Card.Body>
    </Card>
    </div>
  </div></div>
  )
}