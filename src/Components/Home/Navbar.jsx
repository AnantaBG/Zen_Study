import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthC } from "../../provider/AuthProviderx";

const Navbar = () => {
    const { user } = useContext(AuthC);

    return (
        <div className=" flex justify-center mx-auto mt-10 md:mt-20 md:w-11/12">
                <ul className="flex justify-around mx-auto gap-3 md:gap-20 lg:gap-32 text-xl">
                <NavLink to="/"> <li className="btn">Home</li></NavLink>
                <NavLink to="/start-learning"><li className="btn">Start Learning</li></NavLink>
                <NavLink to="/tutorials"><li className="btn">Tutorials</li></NavLink>
                <NavLink to="/about-us"><li className="btn">About us</li></NavLink>
                
                {
                    user && user.email && (
                        <NavLink to="/my-profile"><li className="btn">My Profile</li></NavLink>
                    )
                }
               </ul>
        </div>
    );
};

export default Navbar;