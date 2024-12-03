// src/Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { IoIosEyeOff, IoIosEye } from "react-icons/io";
import "./login.css";

function Register() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);  // Define showPassword state
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Replace with actual login logic (e.g., API call)
//     if (username === 'admin' && password === 'password') {
//       localStorage.setItem('authenticated', true);
//       navigate('/home');  // Redirect to the Home page
//     } else {
//       alert('Invalid credentials');
//     }
//   };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="mainwrap">
            <h2>DIET GENERATOR</h2>
            <div className="login_area">
              <h4>Create an account</h4>
              <form>
                <div className="name mb-3" style={{ position: 'relative' }}>
                  <input
                    type="text"
                    className="form-control"
                    // value={username}
                    // onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                  />
                  <FaUser style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                </div>
                <div className="name mb-3" style={{ position: 'relative' }}>
                  <input
                    type="email"
                    className="form-control"
                    // value={username}
                    // onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                  <FaUser style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                </div>
                <div className="password mb-3" style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                  {showPassword ? (
                    <IoIosEye
                      onClick={togglePasswordVisibility}
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    />
                  ) : (
                    <IoIosEyeOff
                      onClick={togglePasswordVisibility}
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    />
                  )}
                </div>
                <div className="password mb-3" style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    className="form-control"
                    // value={password}
                    // onChange={(e) => setPassword(e.target.value)}
                    placeholder="Confirm Password"
                  />
                  {showPassword ? (
                    <IoIosEye
                      onClick={togglePasswordVisibility}
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    />
                  ) : (
                    <IoIosEyeOff
                      onClick={togglePasswordVisibility}
                      style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
                    />
                  )}
                </div>
                <div className="check">
                  <label className="remember" style={{ cursor: 'pointer' }}>
                    <input type="checkbox" />
                    <span>I agree Terms & Conditions</span>
                  </label>
                </div>
                <div className="wrap">
                  <button type="submit" className="btn submit_btn">Sign Up</button>
                  <div className="register">
                    <span>Already have an account? </span>
                    <Link className="nav-link" to="/login">Login</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
