import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Topbar from "./Topbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Topbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
