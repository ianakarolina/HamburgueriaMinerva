import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" /> 
                <Route element={<Login/>} path="/login"/>
            </Routes>   
        </BrowserRouter>
    ) 
}