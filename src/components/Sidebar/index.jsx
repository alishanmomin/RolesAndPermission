import React from "react";
import { useNavigate } from "react-router-dom";

// import Navbar from '../Navbar'

const Sidebar = ({index}) =>
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
    return (
        <>
            {<div className="sideBar sideBar_sidebarActive">
                    <div className="sideBar_inner">
                        <div onClick={() => handleRoute('articles')}  className={index === 1 ? "sideBar_title sideBar_active": "sideBar_title"}>
                            <i className="fas fa-home"></i>Articles
                        </div>
                        <div onClick={() => handleRoute('products')} className={index === 2 ? "sideBar_title sideBar_active": "sideBar_title"}>
                            <i className="fas fa-user"></i>Products
                        </div>
                        <div onClick={() => handleRoute('logout')} className="sideBar_title">
                            <i className="fas fa-power-off"></i>Logout
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Sidebar;
