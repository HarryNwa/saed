import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";

const Layout = () => {
    return (
        <>
        <Navigation />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout;
