import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Auth = () => {
    return (
        <div className="bg-[#f2efef]">
        <div className=" flex justify-center mx-auto md:w-11/12 w-auto">
        <Navbar></Navbar>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Auth;