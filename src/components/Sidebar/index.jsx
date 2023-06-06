import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import Navbar from '../Navbar'

const Sidebar = ({ index }) =>
{
    const navigate = useNavigate()

    const handleRoute = (route) =>
    {
        if (route === "logout")
        {
            window.localStorage.clear();
            window.location.reload();
        } else
        {
            navigate(`/${ route }`);
        }
    };

    const handleLogout = () =>
    {
        localStorage.clear();
        window.location.reload();
    };



    return (
        <>
            {<div className="sideBar sideBar_sidebarActive">
                    <div className="sideBar_inner">
                        <div onClick={() => handleRoute('articles')}  className="sideBar_title sideBar_active">
                            <i className="fa-solid fa-house"></i>Articles
                        </div>
                        <div onClick={() => handleRoute('products')} className="sideBar_title">
                            <i className="fa-solid fa-user"></i>Products
                        </div>
                        <div onClick={() => handleRoute('logout')} className="sideBar_title">
                            <i className="fa-solid fa-power-off"></i>Logout
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Sidebar;
