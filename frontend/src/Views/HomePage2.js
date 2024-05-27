import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import "./HomePage2.css";

const HomePage2 = () => {
    return (
        <div>
            <Topbar/>
            <div className="card-container">
                <Link className="card">
                    <img src="/instagram-logo.jpg" alt="Logo" className="card-image" />
                    <div className="card-content">
                        <div className="card-title">Manage Posts</div>
                        <p className="card-description">Use this feature to get and publish posts and get basic profile information, photos and videos from instagram public accounts.</p>
                    </div>
                </Link>
                <Link className="card">
                    <img src="/comments-logo.jpg" alt="Logo" className="card-image" />
                    <div className="card-content">
                        <div className="card-title">Manage Comments</div>
                        <p className="card-description">Use this feature to manage and reply to comments on your media, identify media where you have been @mentioned by other instagram users and find hashtagged media.</p>
                    </div>
                </Link>
                <Link className="card">
                    <img src="/messages-logo.jpg" alt="Logo" className="card-image" />
                    <div className="card-content">
                        <div className="card-title">Messages</div>
                        <p className="card-description">Use this feature to manage your instagram messages. You can send and receive messages from other instagram accounts.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default HomePage2;
