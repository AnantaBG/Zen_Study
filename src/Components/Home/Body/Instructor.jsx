import teacher1 from "../../../assets/teacher1.png"
import teacher2 from "../../../assets/teacher2.png"
import teacher3 from "../../../assets/teacher3.png"

const Instructor = () => {
    return (
        <div className="mt-10">
            <div className="mb-5">
                <h2 className="text-3xl justify-center items-center text-center mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-900 to-green-500"> Meet Our Instructors </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between w-10/12 mx-auto">
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={teacher1}
                alt="Sishui_Nakamoto"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Sishui Nakamoto</h2>
                <p className="text-left">Sishui Nakamoto, your friendly guide to mastering basic Japanese vocabulary.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contact</button>
                </div>
            </div>
            </div>
            <div className="card bg-base-100 w-96 h-1/2 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={teacher2}
                alt="Michiko_Nishio"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title">Michiko Nishio</h2>
                <p className="text-left">Expand your Japanese vocabulary with Michiko Nishio&apos;s engaging lessons and practical exercises.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contact</button>
                </div>
            </div>
            </div>
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                src={teacher3}
                alt="Daichi_Taro"
                className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-center">
                <h2 className="card-title ">Daichi Taro</h2>
                <p className="text-left">Challenge yourself with Daichi Taro&apos;s in-depth lessons on complex Japanese words.</p>
                <div className="card-actions">
                <button className="btn btn-primary">Contact</button>
                </div>
            </div>
            </div>
            </div>

        </div>
    );
};

export default Instructor;