import React from "react";
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from "react-router-dom";
import "./HomePage1.css";


function Homepage1(props) {
    const navigate = useNavigate();
    const responseFacebook = (response) => {
        if (response.accessToken) {
          // Exchange Facebook access token for Instagram access token
          // Make API requests to Instagram with the obtained access token
          props.setToken(response.accessToken);
          navigate('/homepage2')
        } else {
          // Handle login failure
          console.log('Login failed');
        }
      };

      const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = "#ffffff"; // Change to white for hover effect
        e.target.style.color = "#000000"; // Change to black for hover effect
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = "#e61d1d"; // Default button background color
        e.target.style.color = "white"; // Default button text color
    };
    return (
        <div>
            <div div className="Header">
                <img src="/ironman-logo.jpg" alt="Logo" className="logoImage" />
                <p className="AppName">Stark Industries</p>
                <button className="Button1"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Get Started With Instagram
                </button>
            </div>
            <p className="P1Text">Media Manager</p>
            <p className="P2Text">Manage your Instagram with effeciency.</p>
            <p className="P3Text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <FacebookLogin
      appId="381914384201574"
      autoLoad={false}
      fields="name,email,picture"
      scope="instagram_basic"
      callback={responseFacebook}
      cssClass="Button2"
    />
        </div>
    );
}

export default Homepage1;

