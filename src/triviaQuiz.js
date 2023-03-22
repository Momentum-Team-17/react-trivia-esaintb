import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Quiz({ categoryChoice }) {
    const [game, setGame] = useState(null)

    // useEffect is called after each render
    useEffect(() => {
        console.log("useEffect runs")
        const URL = `https://opentdb.com/api_count.php?category=${categoryChoice}`
        // we're using JS Promises
        axios.get(URL).then((response) => setGame(response.data))
    }, [])

    console.log("Developer Component Renders")
    return (
        <h1> HI I AM A DEVELOPER COMPONENT</h1>
    )
}