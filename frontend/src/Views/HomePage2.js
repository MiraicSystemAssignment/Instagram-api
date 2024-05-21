import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";

const HomePage2 = (props) => {

    const styles = {
        Bg: {
            backgroundColor: "#1F1F1F",
            minHeight: "calc(100vh - 5em)",
            paddingTop: "5em",
            display: "flex",
            flexDirection: "column",
            fontSize: "1em",
            color: "white",
        },
        nav: {
            color: "white",
            padding: "0.5em",
            textAlign: "center",
        },
        section: {
            marginTop: "1em",
            display: "flex", 
            alignItems: "center",
            justifyContent: "center",
        },
        Link: {
            textDecoration: "none",
            fontSize: "2.2em",
            fontWeight: "bold",
            color: "white",  
            margin: "0", 
        },
        Content: {
            fontSize: "1.3em",
            marginLeft: "1.6em",
        },
        PostsImg: {
            maxWidth: "8.5%",
            marginRight: "0.8em",
        },
        CommentsImg: {
            maxWidth: "10%",
            marginRight: "-0.6em",
        },
        MessagesImg: {
            maxWidth: "12%",
            marginRight: "-1.6em",
        },
        Line: {
            borderBottom: "1px solid black",
            padding: "1em 0em 1em 0em",
            margin: "0 2em 0 2em",
        },
    };

    return (
        <div>
            <Topbar/>
            <div style={styles.Bg}>
                <section style={styles.section}>
                    <img src="/instagram-logo.jpg" alt="Logo" style={styles.PostsImg} />
                    <Link style={styles.Link}>Manage Posts</Link>
                </section>
                <p style={styles.Content}>Use this feature to get and publish posts and get basic profile information, photos and videos from instagram public accounts.</p>
                <div style={styles.Line}></div>
                <section style={styles.section}>
                    <img src="/comments-logo.jpg" alt="Logo" style={styles.CommentsImg} />
                    <Link style={styles.Link}>Manage Comments</Link>
                </section>
                <p style={styles.Content}>Use this feature to manage and reply to comments on your media, identify media where you have been @mentioned by other instagram users and find hashtagged media.</p>
                <div style={styles.Line}></div>
                <section style={styles.section}>
                    <img src="/messages-logo.jpg" alt="Logo" style={styles.MessagesImg} />
                    <Link style={styles.Link}>Messages</Link>
                </section>
                <p style={styles.Content}>Use this feature to manage your instagram messages. You can send and receive messages from other instagram accounts.</p>
                <button onClick={()=> console.log(props.accessToken)}>Click</button>
            </div>
        </div>
    );
}

export default HomePage2;