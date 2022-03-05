import { useState } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const Search = ({ getSearchFields, refreshKeywords }) => {
    const [account, setAccount] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [limit, setLimit] = useState(25);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchFields = { account, keywords, limit };
        console.log(searchFields);
        getSearchFields(searchFields);
    }

    const handleKeywordsUpdate = (words) => {
        setKeywords(words);
    }

    return (
        <div className="login">
            <h1>Search Input</h1>
            <form className="input-form" onSubmit={handleSubmit}>
                <div className="login-account">
                    <label>Account:</label>
                    <input
                        type="text"
                        required
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                    />
                </div>
                <div>
                    <label>Keywords:</label>
                    <ReactTagInput
                        tags={keywords}
                        onChange={(newKey) => handleKeywordsUpdate(newKey)}
                    />
                </div>
                <label>Limit:</label>
                <select
                    type="number"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                >
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                </select>
                <button>Search</button>
            </form>
        </div>
    );
}

export default Search;