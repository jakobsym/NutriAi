import React, {useState} from 'react'
import Quiz from './Quiz'

const StartButton: React.FC = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleClick = () => {
    setStartQuiz(true);
  };

  return (
    <div>
      {!startQuiz ? (
        <div className="flex flex-col justify-center items-center w-90 h-40 bg-neutral-100">
          <button
            className="relative text-center h-20 w-60 transition-all duration-500
                before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-neutral-200 before:transition-all
                before:duration-300 before:opacity-10 before:hover:opacity-0 before:hover:scale-50
                after:absolute after:top-0 after:left-0 after:w-full after:h-full after:opacity-0 after:transition-all after:duration-300
                after:border after:border-white/50 after:scale-125 after:hover:opacity-100 after:hover:scale-100"
                onClick={handleClick}>
            <span className="relative text-black uppercase font-thin">Hover me</span>
          </button>
        </div>
      ) : (
        <Quiz />
      )}
    </div>
  );
}
export default StartButton