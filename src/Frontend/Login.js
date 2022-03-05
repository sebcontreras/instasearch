import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const credentials = { username, password };
        setUsername(username);
        setPassword(password);
        setIsLoggingIn(true);
        setIsLoggedIn(false);
        console.log(credentials);

        const abortCont = new AbortController();

        // send login API
        fetch(`http://localhost:7000/login/?username=${username}&password=${password}`)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not launch headless browser. Please try again');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setIsLoggingIn(false);
                setIsLoggedIn(true);
                setError(null);
                // redirect to search page
                history.push('/search');
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsLoggingIn(false);
                    setIsLoggedIn(false);
                    setError(err.message);
                }
            });

        return () => abortCont.abort();
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <div className="login-form">
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
            <div className="application-status">
                <h2>Application Status</h2>
                {error && <div>{error}</div>}
                {isLoggingIn && !error && <div>Loggin In...</div>}
                {isLoggedIn && !error && <div>Logged In!</div>}
            </div>
        </div>
    );
}

export default Login;