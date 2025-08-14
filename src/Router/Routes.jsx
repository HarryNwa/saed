import React from "react";
import Layout from "../Layout/Layout";
import Home from "../Components/Home/Index";


export const ROUTES = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
            }
        ]
    }
]