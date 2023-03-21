import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    console.log("useEffect runs")
    const URL = "https://opentdb.com/api_category.php"
    // we're using JS Promises
    axios.get(URL).then((response) => setCategories(response.data.trivia_categories))
  }, [])


  return (
    <>
      <h1>Categories</h1>
      <div>
        {/* need to call categories as a conditional before the && */}
        {categories && categories.map(category => <div>{category.name}</div>)}
      </div>
    </>
  )
}
export default App;
