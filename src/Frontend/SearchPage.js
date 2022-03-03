import { useEffect, useRef, useState } from "react";
import PostsContainer from "./PostsContainer";
import Search from "./Search";


const SearchPage = () => {
    const [searchFields, setSearchFields] = useState(null);
    const [searchAccount, setSearchAccount] = useState(null);
    const [posts, setPosts] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState(null);

    const getSearchFields = (searchInput) => {
        setSearchFields(searchInput);
        setSearchAccount(searchInput.account)
        console.log(`Retrieved fields, account: ${searchInput.account}`);
    }

    const initialRender = useRef(true);

    useEffect(() => {
        const abortCont = new AbortController();

        if (initialRender.current) {
            initialRender.current = false;
        } else {
            setIsSearching(true);
            fetch(`http://localhost:7000/search/?account=${searchAccount}&limit=${searchFields.limit}`)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data from server. Ensure that login was successful, and that account details are correct!');
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
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setIsSearching(false);
                        setError(err.message);
                    }
                });
            return () => abortCont.abort();
        }
    }, [searchAccount]);

    return (
        <div className="searchPage">
            <h2>Search Page</h2>
            <Search getSearchFields={getSearchFields} />
            {error && <div>{error}</div>}
            {isSearching && <div>Searching...</div>}
        </div>
    );
}
// {posts && <PostsContainer posts={posts} />}
export default SearchPage;