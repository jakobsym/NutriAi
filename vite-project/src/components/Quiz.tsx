import React, {useState} from 'react'
import Result from './Result'
import '../Quiz.css'
import { quiz } from '../pages/quiz_page/quizData'

const Quiz: React.FC = () => {
   
    const [activeQuestion, setActiveQuestion] = useState<number>(0);    // track curr. question to iterate over all questions
    const [userChoice, setUserChoice] = useState<string[]>([])  // store user choices as a state
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);    // highlight selected answer
    const [showResult, setShowResult] = useState<boolean>(false);
  
    const onClickNext = () => {
      setSelectedAnswerIndex(null);  // reset highlight
      if (selectedAnswerIndex !== null){
          const userChoice = choices[selectedAnswerIndex];
          //console.log("choice = %s", userChoice);
          setUserChoice((prevUserChoices) => [...prevUserChoices, userChoice]);
      }
      if (activeQuestion !== questions.length -1 ){
        setActiveQuestion((prev) => prev + 1);  // increment count
      }
      else {
        setActiveQuestion(0); // resets quiz, if user finishes
        setShowResult(true);  // display result component
      }
    }
    
    const onSelectedAnswer = (index: number) => {
        setSelectedAnswerIndex(index)
    }

    const addLeadingZero = (num: number) => (num > 9 ? num : `0${num}`)

    const { questions } = quiz;
    // destructure questions objects
    const {question, choices} = questions[activeQuestion];  // fetch corresponding 'choices[]' for the 'question'

    return (
        <div className='quiz-container max-w-500px min-w-250px rounded-md mt-100px p-30px 60px'>
          {!showResult ? (
              <div>
              <div>
                  <span className='active-question-no text-purple-800'>{addLeadingZero(activeQuestion + 1)}</span>
                  <span className='total-question text-gray-400'>/{addLeadingZero(questions.length)}</span>
              </div>
                
              <h2>{question}</h2>
              <ul>
                  {choices.map((item, index) => (
                  <li className={selectedAnswerIndex === index ? 'selected-answer' : null!}
                    onClick={() => onSelectedAnswer(index)}
                    key={item}>
                    {item}
                  </li>
                  ))}
              </ul>

              <div>
                  <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                      {/* console.log("showResult = " + showResult)! */}
                      {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                  </button>
              </div>
            </div>
          ) : (
            <>
              {/* console.log("showResult = " + showResult)! */}
              <Result userChoice={userChoice} />
            </>
          )}
        </div>
    )
}

export default Quiz