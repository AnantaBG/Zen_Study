import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import Learn from "../Components/LetsLearn/Learn";
import Lesson1 from "../Components/LetsLearn/AllLesson/lesson1";
import Lesson2 from "../Components/LetsLearn/AllLesson/lesson2";
import Lesson3 from "../Components/LetsLearn/AllLesson/lesson3";
import Lesson4 from "../Components/LetsLearn/AllLesson/lesson4";
import Lesson5 from "../Components/LetsLearn/AllLesson/lesson5";
import Lesson6 from "../Components/LetsLearn/AllLesson/lesson6";
import Lesson7 from "../Components/LetsLearn/AllLesson/lesson7";
import Lesson8 from "../Components/LetsLearn/AllLesson/lesson8";
import Lesson9 from "../Components/LetsLearn/AllLesson/lesson9";
import Lesson10 from "../Components/LetsLearn/AllLesson/lesson10";
import ErrorBoundary from "../ErrorBoundary";
import Auth from "../Components/Auth/Auth";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Profile from "../Profile";
import PrivateRoute from "./PrivateRoute";
import Tutorials from "../Components/LetsLearn/Tutorials";
import AboutUS from "./AboutUS";
import UpdateProfile from "../UpdateProfile";
import ForgotPassword from "../Components/Auth/ForgotPassword";

const router = createBrowserRouter([
{
    path : "/",
    element : <Home></Home>
    
},
{
    path : "/lesson/1",
    element : <PrivateRoute>
        <Lesson1></Lesson1>
    </PrivateRoute>

},
{
    path : "/lesson/2",
    element : <PrivateRoute>
        <Lesson2></Lesson2>
    </PrivateRoute>
},
{
    path : "/lesson/3",
    element : <PrivateRoute>
        <Lesson3></Lesson3>
    </PrivateRoute>
},
{
    path : "/lesson/4",
    element : <PrivateRoute>
            <Lesson4></Lesson4>
            </PrivateRoute>
    
},
{
    path : "/lesson/5",
    element : <PrivateRoute>
    <Lesson5></Lesson5>
    </PrivateRoute>
},
{
    path : "/lesson/6",
    element : <PrivateRoute>
    <Lesson6></Lesson6>
    </PrivateRoute>
},
{
    path : "/lesson/7",
    element : <PrivateRoute>
    <Lesson7></Lesson7>
    </PrivateRoute>
},
{
    path : "/lesson/8",
    element : <PrivateRoute>
    <Lesson8></Lesson8>
    </PrivateRoute>
},
{
    path : "/lesson/9",
    element : <PrivateRoute>
    <Lesson9></Lesson9>
    </PrivateRoute>
},
{
    path : "/lesson/10",
    element : <PrivateRoute>
    <Lesson10></Lesson10>
    </PrivateRoute>
},
{
    path : "/start-learning",
    element : <Learn></Learn>
},
{
    path : "/tutorials",
    element : <PrivateRoute>
    <Tutorials></Tutorials>
    </PrivateRoute>
},
{
    path : "/about-us",
    element : <AboutUS></AboutUS>
},
{
    path : "auth",
    element : <Auth></Auth>,
    children : [
        {
            path : "/auth/login",
            element : <Login></Login>
        },
        {
            path : "/auth/register",
            element : <Register></Register>
        },
    ],

},
{
    path : "/my-profile",
    element : <PrivateRoute>
        <Profile></Profile>
    </PrivateRoute>
},
{
    path : "*",
    element : <ErrorBoundary></ErrorBoundary>
},
{
    path : "/update-profile",
    element : <PrivateRoute>
        <UpdateProfile></UpdateProfile>
    </PrivateRoute>
},{
    path : "/forget-password",
    element :
        <ForgotPassword></ForgotPassword>

},
]);
export default router;