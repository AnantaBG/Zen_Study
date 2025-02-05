import About from "./Body/About";
import Banner from "./Body/Banner";
import Instructor from "./Body/Instructor";
import Students from "./Body/Students";
import Success from "./Body/Success";

const Body = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Success></Success>
            <Instructor></Instructor>
            <Students></Students>
        </div>
    );
};

export default Body;