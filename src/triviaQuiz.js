import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Quiz({ selectedCategory }) {
    const [topic, setTopic] = useState(null)
    const answers = useRef(null)
    let category = useRef(null)
    let triviaQuestions = useRef(null)


    useEffect(() => {
        const URL = `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=easy`
        axios.get(URL).then((response) => {

            setTopic(response.data)
            category.current = response.data.results[0].category
            triviaQuestions.current = response.data.results[0].question
            let correctAnswer = response.data.results[0].correct_answer
            let wrongAnswers = response.data.results[0].incorrect_answers
            answers.current = [...wrongAnswers, correctAnswer]
            // console.log(answers)
        })
    }, [])

    function handleAnswer(answer) {

    }

    if (topic) {
        return (
            <>
                <h1> TRIVIA TIME </h1>
                <h2> category: {category.current}  </h2>
                <h2> {triviaQuestions.current}  </h2>
                <ul>
                    {answers && answers.current.map((answer, ind) =>
                        <div key={ind} ><li onClick={() => handleAnswer(answer)}>{answer}</li></div>)}
                </ul>
            </>
        )
    }
}