import { useState, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Quiz({ selectedCategory }) {
    const [topic, setTopic] = useState(null)
    const [questions, setQuestions] = useState(null)
    console.log(selectedCategory);
    let category = useRef(null)
    let triviaQuestions = useRef(null)

    // useEffect is called after each render
    useEffect(() => {
        // console.log("useEffect runs")
        const URL = `https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=easy`
        // we're using JS Promises
        axios.get(URL).then((response) => {
            // console.log(URL)
            // console.log(response.data)
            setTopic(response.data)
            category.current = response.data.results[0].category
            triviaQuestions.current = response.data.results[0].question
            // console.log(category.current)
        })
    }, [])

    if (topic) {
        return (
            <>
                <h1> TRIVIA TIME </h1>
                <h2> category: {category.current}  </h2>
                <h2> {triviaQuestions.current}</h2>

            </>
        )
    }
}