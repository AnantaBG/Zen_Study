
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';

const Success = () => {
  const [userCount, setUserCount] = useState(0);
  const [lessonCount, setLessonCount] = useState(0);
  const [vocabularyCount, setVocabularyCount] = useState(0);
  const [tutorialCount, setTutorialCount] = useState(0);

  useEffect(() => {
    // Simulate data fetching or API calls
    setTimeout(() => {
      setUserCount(73985);
      setLessonCount(10);
      setVocabularyCount(5968);
      setTutorialCount(8);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center text-2xl">
            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Users</h2>
            <CountUp className='opacity-60' end={userCount} duration={5} />
          </div>
          <div className="text-center text-2xl">
            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Lessons</h2>
            <CountUp className='opacity-60' end={lessonCount} duration={5} />
          </div>
          <div className="text-center text-2xl">
            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Vocabulary</h2>
            <CountUp className='opacity-60' end={vocabularyCount} duration={5} />
          </div>
          <div className="text-center text-2xl">
            <h2 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-500">Tutorials</h2>
            <CountUp className='opacity-60' end={tutorialCount} duration={5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;