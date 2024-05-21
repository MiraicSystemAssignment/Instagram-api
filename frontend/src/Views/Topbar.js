import React from "react";

const Topbar = () => {
    const styles = {
        Topbar: {
            position: "fixed",
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
    };
    return (
        <div style={styles.Topbar}>
            <img src="/ironman-logo.jpg" alt="Logo" style={styles.LogoImage} />
            <p style={styles.AppName}>Stark Industries</p>
        </div>
    );
}

export default Topbar;