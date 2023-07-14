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