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
                {categories && categories.trivia_categories.map(category =>
                    <li><div onClick={() => setSelectedCategory(category.id)}>{category.name}</div></li>
                )
                }
            </div>
        </>
    )
}