import { useState } from "react";
import PostsContainer from "./PostsContainer";
import Search from "./Search";


const SearchPage = () => {
    const [searchFields, setSearchFields] = useState(null);

    const getSearchFields = (searchInput) => {
        setSearchFields(searchInput);
    }

    return (
        <div className="searchPage">
            <h2>Search Page</h2>
            <Search getSearchFields={getSearchFields} />
            <p>{searchFields && searchFields.username}</p>
            <PostsContainer />
        </div>
    );
}

export default SearchPage;