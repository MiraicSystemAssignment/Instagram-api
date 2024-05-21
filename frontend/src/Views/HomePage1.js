import React from "react";
import FacebookLogin from 'react-facebook-login';
import { useNavigate } from "react-router-dom";
//header bg: "#161F56" "#c61938"
//full page backgroundColor: "#FCC5B8",

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
    const styles = {
        Bg: {
            backgroundColor: "#1F1F1F",
            minHeight: "100vh",
        },
        Header: {
            display: "flex",
            alignItems: "center",
            height: "5em",
            width: "100%",
            backgroundColor: "#e61d1d",
        },
        LogoImage: {
            maxWidth: "100%",
            maxHeight: "100%",
            marginLeft: "0.5em",
            borderRadius: "0.2em",
        },
        AppName: {
            color: "white",
            fontSize: "1.5em",
            marginLeft: "0.8em",
        },
        Button1: {
            marginLeft: "48.5em",
            backgroundColor: "#e61d1d",
            color: "white",
            border: "1px solid white",
            borderRadius: "0.5em",
            padding: "0.5em 1em",
            fontSize: "1em",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
        },
        Button1Hover: {
            backgroundColor: "white",
            color: "black",
        },
        P1Text : {
            color: "white",
            textAlign: "center",
            marginTop: "1.5em",
            fontSize: "2.8em",
        },
        P2Text : {
            color: "white",
            textAlign: "center",
            marginTop: "1em",
            fontSize: "2em",
        },
        P3Text : {
            color: "white",
            textAlign: "center",
            marginTop: "2em",
            fontSize: "1em",
        },
        Button2: {
            backgroundColor: "#e61d1d",
            color: "white",
            border: "1px solid white",
            borderRadius: "0.5em",
            padding: "0.5em 1em",
            fontSize: "1em",
            cursor: "pointer",
            transition: "background-color 0.3s, color 0.3s",
            marginTop: "2em",
            marginLeft: "32em",
        },
        Button2Hover: {
            backgroundColor: "white",
            color: "black",
        },
    };
    const handleMouseEnter = (e) => {
        e.target.style.backgroundColor = styles.Button1Hover.backgroundColor;
        e.target.style.color = styles.Button1Hover.color;
    };

    const handleMouseLeave = (e) => {
        e.target.style.backgroundColor = styles.Button1.backgroundColor;
        e.target.style.color = styles.Button1.color;
    };
    return (
        <div style={styles.Bg}>
            <div style={styles.Header}>
                <img src="/ironman-logo.jpg" alt="Logo" style={styles.LogoImage} />
                <p style={styles.AppName}>Stark Industries</p>
                <button style={styles.Button1}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    Get Started With Instagram
                </button>
            </div>
            <p style={styles.P1Text}>Media Manager</p>
            <p style={styles.P2Text}>Manage your Instagram with effeciency.</p>
            <p style={styles.P3Text}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            <FacebookLogin
      appId="381914384201574"
      autoLoad={false}
      fields="name,email,picture"
      scope="instagram_basic"
      callback={responseFacebook}
    />
        </div>
    );
}

export default Homepage1;

