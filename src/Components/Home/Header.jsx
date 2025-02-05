import { Link } from "react-router-dom";
import logo from "../../assets/Zen (2).png"
import logo2 from "../../assets/Zen.png"
import Icon from "../../assets/UserIcon.png"
import { useContext } from "react";
import { AuthC } from "../../provider/AuthProviderx";
const Header = () => {
    const { user, logOut } = useContext(AuthC);
    return (
        <div className="flex flex-col md:flex-row justify-between mt-5 w-11/12 mx-auto gap-2">
            <div className="my-auto h-1/3 ">
            <img className="w-[200px] mx-auto" src={logo2} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center mx-auto ">
            <img className="w-[200px] my-auto hidden md:block" src={logo} alt="" />
            <h2 className="text-xl md:text-2xl opacity-70 mt-4 w-full">Calm Your Mind, Sharpen Your Focus.</h2>
            {/* UserName from AuthC */}
            {
                user && user.email && (
                    <h2 className="text-xl md:text-2xl opacity-50 mt-4">Welcome {user.displayName}</h2>
                )
            }
            </div>
            <div className="my-auto flex gap-2 h-1/3 mx-auto md:mx-0 rounded-full mt-5 md:mt-auto">
            {
                user && user?.email ?
                <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
 : <img className="w-12" src={Icon} alt="" />
            }
            
            {
                user && user?.email ? <button onClick={logOut} className="btn mx-auto flex">LogOut</button> : <Link to="/auth/login"><button className="btn mx-auto flex">Login</button></Link>
            }

            </div>
            {/* <Navbar></Navbar> */}
            
        </div>
    );
};

export default Header;