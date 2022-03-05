import { useEffect, useRef, useState } from "react";
import PostsContainer from "./PostsContainer";
import Search from "./Search";
import postFilter from "../Backend/postFilter";


const SearchPage = () => {
    const [searchFields, setSearchFields] = useState(null);
    const [startSearch, setStartSearch] = useState(0);
    const [searchAccount, setSearchAccount] = useState(null);
    const [searchLimit, setSearchLimit] = useState(null);
    const [searchKeywords, setSearchKeywords] = useState([]);
    const [posts, setPosts] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(null);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState(null);

    const getSearchFields = (searchInput) => {
        const { account, keywords, limit } = searchInput;

        // Need to trigger new fetch
        if ((posts === null)
            || (searchAccount !== account)
            || (searchLimit !== limit)) {
            setSearchAccount(account);
            setSearchLimit(limit);
            setSearchKeywords(keywords);
            setStartSearch(startSearch + 1);
        } else if (posts !== null) {
            console.log(`search field update, lets filter again`);
            console.log(posts);
            setSearchKeywords(keywords);
            const filteredPosts = postFilter.filterData(posts, keywords);
            console.log(`after search field update the filteredPosts are:`);
            console.log(filteredPosts);
            setFilteredPosts(filteredPosts);
        }
        console.log(`Retrieved fields, account: ${searchInput.account}`);
    }

    const refreshKeywords = (keywords) => {
        setSearchKeywords(keywords);
        console.log(`Got sent the keywords: ${keywords}`);
    }

    const initialRender = useRef(true);

    useEffect(() => {
        console.log(`useEffect triggered`);
        const abortCont = new AbortController();
        if (initialRender.current) {
            initialRender.current = false;
        } else if (searchAccount !== null) {
            setIsSearching(true);
            fetch(`http://localhost:7000/search/?account=${searchAccount}&limit=${searchLimit}`)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data from server. Ensure that login was successful, and that account details are correct!');
                    }
                    return res.json();
                })
                .then(allPosts => {
                    setPosts(allPosts.posts);
                    return postFilter.filterData(allPosts.posts, searchKeywords);
                })
                .then(filteredPosts => {
                    console.log(`The filtered posts returned:`);
                    console.log(filteredPosts);
                    // then setPosts
                    setFilteredPosts(filteredPosts);
                    setIsSearching(false);
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
    }, [startSearch]);

    return (
        <div className="searchPage">
            <Search getSearchFields={getSearchFields} refreshKeywords={refreshKeywords} />
            {error && <div>{error}</div>}
            {isSearching && <div>Searching...</div>}
            {!isSearching && filteredPosts && <PostsContainer posts={filteredPosts} />}
        </div>
    );
}
export default SearchPage;