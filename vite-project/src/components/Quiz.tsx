import React, {useState} from 'react'
import '../Quiz.css'


const Quiz: React.FC = () => {
    const [activeQuestion, setActiveQuestion] = useState<number>(0);    // track curr. question
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);    // highlight selected answer
  
    const onClickNext = () => {
        // ( prev += 1 )
        setSelectedAnswerIndex(null);  // reset
        setActiveQuestion((prev) => prev + 1);
    }

    const onSelectedAnswer = (index: number) => {
        setSelectedAnswerIndex(index)
    }

    const addLeadingZero = (num: number) => (num > 9 ? num : `0${num}`)

    /* Create Question/QuizBank types to be utilized */
    type Question = {
      question: string,
      choices: string[],
    }

    interface QuizBank {
      totalQuestion: number,
      questions: Question[],
    }

    const quiz: QuizBank = {
      totalQuestion: 4,
      questions: [
          {
              question: "What are you health and fitness goals?",
              choices: ["Lose weight", "Gain weight", "Gain muscle", "Maintain weight"],
          },
          {
              question: "How much do you weigh?",
              choices: ["100 - 135lbs", "135 - 170lbs", "170 - 205lbs", "195+lbs"],
          },
          {
              question: "What kind of exercises would you like to do?",
              choices: ["Cardio", "Yoga/Pilates", "Weight training", "Little bit of everything"],
          },
      ]
    }

    const { questions } = quiz;
    
    // destructure questions objects
    const {question, choices} = questions[activeQuestion];  // fetch corresponding 'choices[]' for the 'question'

    return (
        <div className='quiz-container max-w-500px min-w-250px rounded-md mt-100px p-30px 60px'>
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
              {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
            </div>
        </div>
    )

}

export default Quiz























{/* 
    const [quizState, setQuizState] = useState({
        currentQuestionIndex: 0,    // track current question user is @
        userChoices: [] as string[],    // store user choices as array of strings
      });

      /* Called when user clicks choice. Updates state by adding selected choice to userChoices[] 
      const handleChoiceSelection = (choice: string) => {
        setQuizState((prevState) => ({
          ...prevState,
          userChoices: [...prevState.userChoices, choice],
        }));
      };

      const { currentQuestionIndex, userChoices } = quizState;
      const currentQuestion = quiz.questions[currentQuestionIndex];

      /* Dynamically renders current question and choice(s) based on questionIndex 
      const renderQuestion = () => {
        if (currentQuestionIndex >= quiz.totalQuestion) {
          // Quiz finished, navigate to result page or perform other actions
          console.log('User choices:', userChoices);
          return <div>Quiz finished!</div>;
        }

        return (
            <div>
              <h2>{currentQuestion.question}</h2>
              <ul>
                {currentQuestion.choices.map((choice, index) => (
                  <li key={index}>
                    <button onClick={() => handleChoiceSelection(choice)}>
                      {choice}
                    </button>
                  </li>
                ))}
              </ul>
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          );
        };
        /* Updates question, upon user clicking next 
        const handleNextQuestion = () => {
            setQuizState((prevState) => ({
              currentQuestionIndex: prevState.currentQuestionIndex + 1,
              userChoices: prevState.userChoices,
            }));
        };
    return <div>{renderQuestion()}</div>;
*/}