import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CategoryList({ setSelectedCategory }) {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        axios.get("https://opentdb.com/api_category.php").then((response) => setCategories(response.data))
    }, [])

    return (
        <>
            <h1>hi</h1>
            <div className='block'>
                {categories && categories.trivia_categories.map((category, ind) =>
                    <div key={ind} ><li onClick={() => setSelectedCategory(category.id)}>{category.name}</li></div>
                )
                }
            </div>
        </>
    )
}