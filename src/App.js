import { useState } from 'react';
import './App.css';
import CategoryList from './categoryList'
import Quiz from './triviaQuiz'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  console.log(selectedCategory);

  return (
    <div>
      {selectedCategory ? <Quiz selectedCategory={selectedCategory} /> : <CategoryList setSelectedCategory={setSelectedCategory} />}
    </div>
  )
}







//   const [categories, setCategories] = useState(null);
//   const [selectedcategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     axios.get("https://opentdb.com/api_category.php").then((response) => setCategories(response.data))
//   }, [])

//   return (
//     <div className='block'>
//       {categories && categories.map((category, index) => {
//         return (
//           <div onClick={() => setSelectedCategory(category.index)} key={index}>{category.index}</div>
//         )
//       })
//       }
//     </div>
//   )




//   useEffect(() => {
//     console.log("useEffect runs")
//     const URL = "https://opentdb.com/api_category.php"
//     // we're using JS Promises
//     axios.get(URL).then((response) => setCategories(response.data.trivia_categories))
//   }, [])

//   return (
//     <>
//       <h1>Categories</h1>
//       <div>
//         {/* need to call categories as a conditional before the && */}
//         {categories && categories.map(category =>
//           <li>
//             <button onClick={() => { `${URL}`() }}>{category.name}</button></li>)}
//       </div>
//     </>
//   )




export default App;
