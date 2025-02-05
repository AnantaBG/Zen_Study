import { Helmet } from "react-helmet";
import Body from "./Home/Body";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import Navbar from "./Home/Navbar";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Header></Header>
            <Navbar></Navbar>
            <Body></Body>
            <Footer></Footer>
        </div>
    );
};

export default Home;