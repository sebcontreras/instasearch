import { useState } from "react";

const Search = ({ getSearchFields }) => {
    const [account, setAccount] = useState('');
    const [keywords, setKeywords] = useState('');
    const [limit, setLimit] = useState(25);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchFields = { account, keywords, limit };
        console.log(searchFields);
        getSearchFields(searchFields);
    }

    return (
        <div className="login">
            <h1>Search Input</h1>
            <form onSubmit={handleSubmit}>
                <label>Account:</label>
                <input
                    type="text"
                    required
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                />
                <label>Keywords:</label>
                <input
                    type="text"
                    required
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                />
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