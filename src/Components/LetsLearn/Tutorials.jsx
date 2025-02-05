import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { Helmet } from "react-helmet";

const Tutorials = () => {
    return (
        <div>
            <Helmet>
                <title>Tutorials Page</title>
            </Helmet>
            <Navbar></Navbar>
        <h2 className="flex text-center text-4xl mt-11 mb-8 justify-center m-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Learn the Alphabet</h2>
        <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
            {/* Video1 */}
            <div className="flex items-center justify-center mx-auto  ">
                
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
            
            {/* Video2 */}
            <div className="flex items-center justify-center mx-auto ">
                
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
      
                    <div className="video-container rounded-xl">
                      <iframe
                          className="rounded-xl"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/8YV8KmfBbBM?si=XgmX6X4FPX0xYGcw"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
      
                      />
                    </div>
                  </div>
                </div>
      
            </div>
            {/* Video3 */}
            <div className="flex items-center justify-center mx-auto ">
                
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
      
                    <div className="video-container rounded-xl">
                      <iframe
                          className="rounded-xl"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/6p9Il_j0zjc?si=ToISY3ndzk0VyUfr"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
      
                      />
                    </div>
                  </div>
                </div>
      
            </div>
            {/* Video4 */}
            <div className="flex items-center justify-center mx-auto ">
                
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
      
                    <div className="video-container rounded-xl">
                      <iframe
                          className="rounded-xl"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/uQFLJoHNH2Y?si=GpK4LfACPSteeS8f"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
      
                      />
                    </div>
                  </div>
                </div>
      
            </div>
            {/* Video5 */}
            <div className="flex items-center justify-center mx-auto ">
                
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
      
                    <div className="video-container rounded-xl">
                      <iframe
                          className="rounded-xl"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/DEH2-WXjNwM?si=kWgyRLiSzRiK_veo"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
      
                      />
                    </div>
                  </div>
                </div>
      
            </div>
            {/* Video6 */}
            <div className="flex items-center justify-center mx-auto ">
                
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
      
                    <div className="video-container rounded-xl">
                      <iframe
                          className="rounded-xl"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/U5994yjxPQ0?si=swf7C6EMwzv7PSLl"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
      
                      />
                    </div>
                  </div>
                </div>
      
            </div>
            {/* Video7 */}
            <div className="flex items-center justify-center mx-auto ">
                
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
      
                    <div className="video-container rounded-xl">
                      <iframe
                          className="rounded-xl"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/i1ORF_lp1oU?si=kM6HaJCMrydsUjQc"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
      
                      />
                    </div>
                  </div>
                </div>
      
            </div>
            {/* Video8 */}
            <div className="flex items-center justify-center mx-auto ">
                
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
      
                    <div className="video-container rounded-xl">
                      <iframe
                          className="rounded-xl"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/L1NQoQivkIY?si=tlmZcrDZ7pwunEhR"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
      
                      />
                    </div>
                  </div>
                </div>
      
            </div>
            
            </div> 
        <Link to="/start-learning" className="btn bg-gradient-to-r from-blue-600 to-green-600 my-10 w-11/12 flex justify-center mx-auto text-white">
        Learn Vocabularies
      </Link>
      <Footer></Footer>
        </div>
    );
};

export default Tutorials;