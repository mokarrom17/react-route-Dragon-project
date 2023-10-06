import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="space-y-8 ">
            <h2 className="text-3xl">All Categories</h2>
            {
                categories.map(category => <Link
                    className="block px-4 text-xl font-semibold"
                    to={`/category/${category.id}`}
                    key={category.key}>{category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;