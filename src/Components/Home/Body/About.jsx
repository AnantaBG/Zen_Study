import Aos from "aos";
import 'aos/dist/aos.css';
Aos.init();

const About = () => {
    return (
        <div 
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="20"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="mb-10">

            <div className="flex flex-col justify-center items-center text-center mx-auto mt-10 ">
            <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">Zen Study: Your Path to Japanese Mastery</h2>
            <p className="text-2xl w-3/4 opacity-60 mt-5">Welcome to Zen Study, your serene space for serious Japanese language learning. Our mission is to make learning Japanese accessible, enjoyable, and effective.</p>
            </div>
            <div className="justify-start w-3/4 mx-auto">
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">How it Works:</h2>
                <p className="text-xl ml-20 mb-2">1. <span className="font-bold">Immerse Yourself:</span> Dive into a rich collection of Japanese vocabulary words, categorized by theme and difficulty level.</p>
                <p className="text-xl ml-20 mb-2">2. <span className="font-bold">Learn at Your Own Pace:</span> Our flexible learning system allows you to study at your own pace, whenever and wherever you want.</p>
                <p className="text-xl ml-20 mb-2">3. <span className="font-bold">Interactive Learning:</span> Engage with interactive exercises, quizzes, and flashcards to reinforce your learning.</p>
                <p className="text-xl ml-20 mb-2">4. <span className="font-bold">Community Support:</span> Connect with fellow learners, share tips, and get help from our supportive community.</p>
            </div>
            <div className="justify-start w-3/4 mx-auto">
                <h2 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">Why Choose Zen Study?</h2>
                <p className="text-xl ml-20 mb-2">1. <span className="font-bold">Effective Learning Methods:</span> Our carefully curated learning materials are designed to optimize your learning experience.</p>
                <p className="text-xl ml-20 mb-2">2. <span className="font-bold">User-Friendly Interface:</span> Our intuitive interface makes it easy to navigate and focus on your studies.</p>
                <p className="text-xl ml-20 mb-2">3. <span className="font-bold">Continuous Improvement:</span>  We are constantly updating our content and features to provide the best possible learning experience.</p>
                <h2 className="text-3xl justify-center items-center text-center mx-auto font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">Join us on your journey to Japanese fluency!</h2>
            </div>
        </div>
    );
};

export default About;