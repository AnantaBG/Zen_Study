import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import img4 from "../../../assets/4.png"

const Banner = () => {
    return (
        <div className="carousel w-full h-auto lg:h-[500px] backdrop-blur-3xl mt-12">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src={img1}
            className="w-full " />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn bg-slate-500 btn-circle">❮</a>
            <a href="#slide2" className="btn bg-slate-500  btn-circle">❯</a>
            </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img
            src={img2}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn bg-slate-500  btn-circle">❮</a>
            <a href="#slide3" className="btn bg-slate-500  btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src={img3}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn bg-slate-500  btn-circle">❮</a>
            <a href="#slide4" className="btn bg-slate-500  btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img
            src={img4}
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn bg-slate-500  btn-circle">❮</a>
            <a href="#slide1" className="btn bg-slate-500  btn-circle">❯</a>
            </div>
        </div>
        </div>
    );
};

export default Banner;