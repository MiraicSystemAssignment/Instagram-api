import React from "react";
import Topbar from "./Topbar";
import { Link } from "react-router-dom";
import "./HomePage2.css";

const HomePage2 = () => {
    return (
        <div>
            <Topbar/>
            <div>
                <section className="Section-one">
                    <img src="/instagram-logo.jpg" alt="Logo" className="PostsImg" />
                    <Link className="Link">Manage Posts</Link>
                </section>
                <p className="Content">Use this feature to get and publish posts and get basic profile information, photos and videos from instagram public accounts.</p>
                <div className="Line"></div>
                <section className="Section-two-three">
                    <img src="/comments-logo.jpg" alt="Logo" className="CommentsImg" />
                    <Link className="Link">Manage Comments</Link>
                </section>
                <p className="Content">Use this feature to manage and reply to comments on your media, identify media where you have been @mentioned by other instagram users and find hashtagged media.</p>
                <div className="Line"></div>
                <section className="Section-two-three">
                    <img src="/messages-logo.jpg" alt="Logo" className="CommentsImg" />
                    <Link className="Link">Messages</Link>
                </section>
                <p className="Content">Use this feature to manage your instagram messages. You can send and receive messages from other instagram accounts.</p>
                <br />
                <br />
            </div>
        </div>
    );
}

export default HomePage2;