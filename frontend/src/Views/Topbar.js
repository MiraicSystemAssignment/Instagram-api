import React from "react";
import "./Topbar.css";

const Topbar = () => {
    return (
        <div className="Topbar">
            <img src="/ironman-logo.jpg" alt="Logo" className="LogoImage" />
            <p className="AppName">Stark Industries</p>
        </div>

    );
}

export default Topbar;