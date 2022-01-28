import React from 'react';
import {FaUserCircle, FaBars} from "react-icons/fa";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
        Head, 
        HeaderName,
        HeaderMenu, 
} from "./styles"
import Login from "../../pages/Login"


function Header() {
    const items =[
        {
            name: "Home",
            path:"/"
        },
        {
            name: "Sobre nós",
            path:"/sobrenos"
        },
        {
            name: "Contatos",
            path:"/contatos"
        },
        {
            icon: <FaUserCircle/>,
            name:"Login",
            path: "/login"
        }, 
        {
            icon: <FaBars/>,
            name:"",
            path: "/bar"
        }, 
    ]

    return (
        <Head>
            <HeaderName>MINERVA</HeaderName>
            <HeaderMenu>
                {
                    items.map((item,index)=>{
                        return(
                            <>
                            <i key={index}>
                                <Link to={item.path}>
                                    {item.icon}
                                </Link>
                            </i>
                            <li key={index}>
                                <Link to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                            </>   
                        )
                    })
                }
            </HeaderMenu>
        </Head>
    
    );

    
}

export default Header;