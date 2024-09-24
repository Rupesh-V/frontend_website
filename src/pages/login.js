import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import iLensysLogo from '../assets/images/iLensys-logo.png';
import  '../styles/login.css';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();

    
  //   if (!userName || !password) {
  //     setError('Please fill out both fields.');
  //   } else {
  //     setError('');
  //     navigate('/dashboard'); 
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if both fields are filled
    if (!userName || !password) {
      setError('Please fill out both fields.');
      return;
    }

    // Reset error message
    setError('');

    try {
      // Call the login API
      const response = await fetch('http://localhost:3002/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userName, password: password }),
      });

      const data = await response.json();
      console.log(data);

      // Handle response
      if (response.status) {
        // On successful login, navigate to the dashboard
        navigate('/dashboard');
      } else {
        // Display error message if login fails
        setError(data.message || 'Invalid login credentials');
      }
    } catch (error) {
      // Handle any errors during the fetch
      setError('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <section style={{ height: '100vh' }}>
      <div className="container-fluid" style={{ height: '100vh' }}>
        <div className="row" style={{ height: '100vh' }}>
          <div className="col-xl-5 bg-white my-auto text-center">
            <img
              src={iLensysLogo}
              alt="iLenSys-logo"
              className="ms-5 ps-5 h-100"
            />
          </div>
          <div className="col-xl-7 bg-white my-auto text-center">
            <div className="login-card">
              <form className="theme-form login-form" onSubmit={handleSubmit}>
                <h4>Login</h4>
                <h6 className="mt-3">Welcome back! Log in to your account.</h6>

                <div className="form-group mt-3">
                  <label style={{ float: 'left' }}><b>User Name</b></label>
                  <div className="input-group">
                    <input
                      className="form-control valid"
                      type="text"
                      placeholder="User Name"
                      id="user_name"
                      name="user_name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      autoComplete="off"
                    />
                  </div>
                  <div className="mt-2" id="username_error"></div>
                </div>

                <div className="form-group mt-3">
                  <label style={{ float: 'left' }}><b>Password</b></label>
                  <div className="input-group">
                    <input
                      className="form-control valid"
                      type="password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="off"
                      placeholder="*********"
                    />
                  </div>
                  <div className="mt-2" id="pwd_error"></div>
                </div>

                {error && (
                  <div className="badge w-100 text-danger" style={{ fontSize: '16px' }}>
                    {error}
                  </div>
                )}

                <div className="form-group mt-4">
                  <button type="submit" className="login_submit_btn" style={{ width: '100%' }}>
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
