import { useEffect, useState } from "react";
import Login from "./Login";

const Home = () => {
    const [isBrowserReady, setIsBrowserReady] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:7000/')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not launch headless browser. Please try again');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                setIsBrowserReady(false);
                setError(null);
            })
            .catch(err => {
                setIsBrowserReady(true);
                setError(err.message);
            });
    }, []);

    return (
        <div className="home">
            <h1>Instasearch</h1>
            <a href="https://sebcontreras.github.io/index.html">by Sebastian Contreras</a>
            <Login />
            {error && <div>{error}</div>}
            {isBrowserReady && !error && <div>Preparing Headless Browser...</div>}
            {!isBrowserReady && !error && <div>Headless Browser Ready!</div>}
            <h2>How to Use</h2>
            <p>
                Hey gang, in this full React tutorial series,I'll take you from novice to ninja.
                We'll cover all the basics - what React is, setting up, components & routing -
                before diving into state management, async code, built-in hooks & custom hooks too.
            </p>
        </div>
    );
}

export default Home;