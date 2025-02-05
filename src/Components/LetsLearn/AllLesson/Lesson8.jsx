
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const   Lesson8 = () => {
  const [lessons, setLessons] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const url = 'https://api.jsonbin.io/v3/b/6740e4d7ad19ca34f8ce8a01';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setLessons(data.record);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleWhenToSayClick = (lesson) => {
    setSelectedLesson(lesson);
    setIsModalOpen(true);
  };
  const pronounceWord = (word) => {
    if (window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'ja-JP';
      utterance.voiceURI = 'Google Japanese'; 

      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event);
      };

      utterance.onend = () => {
      };

      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis is not supported in this browser.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-11/12 mx-auto">
      {error ? (
        <p>Error loading lessons: {error.message}</p>
      ) : isLoading ? (
        <p>Loading lessons...</p>
      ) : (
        <>
          <h2 className=' mt-10 text-3xl flex justify-center mx-auto w-11/12'>{lessons.length} Words Are Availiable Here in Lesson no: {lessons[0].lesson_no}.</h2>
          <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between mx-auto">
            {lessons.map((lesson) => (
              <div onClick={() => pronounceWord(lesson?.word)} key={lesson.id} className={`card bg-base-100 h-80 flex shadow-xl ${
                lesson.difficulty === 'easy'
                  ? 'bg-green-200'
                  : lesson.difficulty === 'medium'
                  ? 'bg-yellow-200'
                  : 'bg-red-200'
              }`}>
                <div  className="card-body">
                  <h2 className="flex text-center justify-center m-auto"><span className='font-semibold'>Word:</span> {lesson.word}</h2>
                  <h2 className="flex text-center justify-center m-auto"><span className='font-semibold'>Pronounciation:</span> {lesson.pronunciation}</h2>
                  <h2 className="flex text-center justify-center m-auto"><span className='font-semibold'>Meaning:</span> {lesson.meaning}</h2>
                  <h2 className="flex text-center justify-center m-auto"><span className='font-semibold'>Type:</span>{lesson.part_of_speech}</h2>
                  <button
                    className="btn bg-base-100"
                    onClick={() => handleWhenToSayClick(lesson)}
                  >
                    When to Say
                  </button>
                </div>
              </div>
            ))}
          </div>
          <NavLink to="/start-learning">
            <button className="btn my-10 text-2xl w-full">Back To Lesson</button>
          </NavLink>

          {isModalOpen && (
            <div className="fixed top-0 m-auto rounded-xl translate-x-16 md:translate-x-60 translate-y-28 md:translate-y-36 lg:translate-x-full lg:translate-y-1/2 w-[300px] md:w-[400px] lg:w-[500px] h-[400px] flex flex-col text-center bg-white  ">
                <div  className=' w-11/12  m-auto'>
                <h3 className="font-bold text-lg">When to Use `{selectedLesson?.word}`</h3>
                <p className='font-bold mt-2'>Meaning: {selectedLesson?.meaning}</p>
                <p className='font-semibold mt-3'>When to Say: {selectedLesson?.when_to_say}</p>
                <p className='font-semibold mt-1 opacity-50'>Example: {selectedLesson?.example}</p>
                <button className="btn mt-10 btn-primary flex w-full justify-center bottom-0" onClick={handleCloseModal}>Close</button> 
                </div>

            </div>
          )}
        </>
      )}
    </div>
  );
};

export default   Lesson8;