import { useEffect, useRef, useState } from "react";
import PostsContainer from "./PostsContainer";
import Search from "./Search";


const SearchPage = () => {
    const [searchFields, setSearchFields] = useState(null);
    const [posts, setPosts] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState(null);

    const getSearchFields = (searchInput) => {
        setSearchFields(searchInput);
        console.log(`Retrieved fields`);
    }

    const initialRender = useRef(true);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            setIsSearching(true);
            fetch('http://localhost:8000/babyyoda.official')
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data from server. Please try again');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setIsSearching(false);
                    setPosts(data);
                    setError(null);
                })
                .catch(err => {
                    setIsSearching(false);
                    setError(err.message);
                });
        }
    }, [searchFields]);

    return (
        <div className="searchPage">
            <h2>Search Page</h2>
            <Search getSearchFields={getSearchFields} />
            { error && <div>{ error }</div>}
            {isSearching && <div>Searching...</div>}
            {posts && <PostsContainer posts={posts} />}
        </div>
    );
}

export default SearchPage;