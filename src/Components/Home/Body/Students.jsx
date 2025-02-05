import { Link } from "react-router-dom";
import Student1 from "../../../assets/Student1.png"
import Student2 from "../../../assets/Student2.png"
import Student3 from "../../../assets/Student3.png"
const Students = () => {
    return (
        <div>
        <div className="mt-20 bg-gray-200">
            <div className="mb-5">
                <h2 className="text-3xl justify-center items-center text-center mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-green-900"> Meet Our Graduates </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-10/12 mx-auto">
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student1}
                alt="Natsuki"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Natsuki</h2>
                <p className="text-left">Learning Japanese has been a challenging but rewarding experience. The language is beautiful and complex, but with dedication and practice, it&apos;s possible to achieve fluency.</p>
            </div>
            </div>
            <div className="card bg-base-100 w-96 h-1/2 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student2}
                alt="Ryōta"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Ryōta</h2>
                <p className="text-left">Studying Japanese has improved my cognitive skills, such as memory and problem-solving. I enjoy the sense of accomplishment that comes with mastering a new language.</p>
            </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={Student3}
                alt="Ken"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title ">Ken</h2>
                <p className="text-left">I&apos;m fascinated by Japanese culture and history, and learning the language has deepened my appreciation for it. Mastering Japanese pronunciation can be tricky.</p>
            </div>
            </div>
            </div>
            <div className="mb-5  mt-16">
                <Link to="/start-learning">
                <button className="btn text-4xl w-full h-40  flex justify-center items-center text-center mx-auto font-semibold text-white bg-gradient-to-r from-blue-900 to-pink-600">Let`s Learn</button>
                </Link>
            </div>
        </div>
        </div>
    );
};

export default Students;