import { useState } from "react";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { username, password };
        console.log(credentials);
        // send login API
        // redirect to search page
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password:</label>
                <input
                    type="text"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
        </div>
    );
}

export default Login;