import { Link } from "react-router-dom";
import Navbar from "../Home/Navbar";
import { useState } from "react";
import Footer from "../Home/Footer";
import { Helmet } from "react-helmet";

const Learn = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="">
            <Helmet>
                <title>Let`s Learn</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="mt-20 mb-5">
                <h2 className="text-5xl justify-center items-center text-center mx-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600"> Let`s Learn</h2>
            </div>
            <div className="w-11/12 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-2 justify-between mx-auto">
            {/* card 1 */}
            <Link to="/lesson/1">
            <div className="card bg-base-100 h-40  shadow-xl">
                <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 1</h2>
                </div>
                
            </div>
            </Link>
            {/* card 2 */}
            <Link to="/lesson/2">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 2</h2>
                </div>
                </div>
            </Link>

            {/* card 3 */}
            <Link to="/lesson/3">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 3</h2>
                </div>
                </div>
            </Link>

            {/* card 4 */}
            <Link to="/lesson/4">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 4</h2>
                </div>
                </div>
            </Link>

            {/* card 5 */}
            <Link to="/lesson/5">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 5</h2>
                </div>
                </div>
            </Link>
 
            {/* card 6 */}
            <Link to="/lesson/6">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 6</h2>
                </div>
                </div>
            </Link>

            {/* card 7 */}
            <Link to="/lesson/7">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 7</h2>
                </div>
                </div> 
            </Link>

            {/* card 8 */}
            <Link to="/lesson/8">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 8</h2>
                </div>
                </div>
            </Link>

            {/* card 9 */}
            <Link to="/lesson/9">
            <div className="card bg-base-100 h-40  shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 9</h2>
                </div>
                </div>
            </Link>

            {/* card 10 */}
            <Link to="/lesson/10">
            <div className="card bg-base-100 h-40 shadow-xl">
                 <div className="card-body">
                    <h2 className="flex text-center justify-center m-auto">Lesson 10</h2>
                </div>
                </div>
            </Link>
                                                     
            </div>
            <h2 className="flex text-center text-3xl mt-11 justify-center m-auto">Learn the Alphabet</h2>
            <div className="flex items-center justify-center mx-auto ">
                
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">

              <div className="video-container rounded-xl">
                <iframe
                    className="rounded-xl"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/sISIVKJh_EA?si=oLUlkjtMG5ZRQG17"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen

                />
              </div>
            </div>
          </div>

        </div>

        {/* View More Button */}
        
          <Link to="/tutorials">
        <button onClick={() => setShowMore(!showMore)} className="bg-gradient-to-r from-red-600 to-blue-600 btn my-10 w-11/12 flex justify-center mx-auto text-white ">
          View More
        </button>
          </Link>
        
        <Footer></Footer>
            </div>
    );
};

export default Learn;