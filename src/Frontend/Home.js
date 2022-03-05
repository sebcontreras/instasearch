import { useEffect, useState } from "react";
import Login from "./Login";

const Home = () => {
    const [isBrowserReady, setIsBrowserReady] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch('http://localhost:7000/', { signal: abortCont.signal })
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
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsBrowserReady(true);
                    setError(err.message);
                }
            });

        return () => abortCont.abort();
    }, []);

    return (
        <div className="home">
            <Login />
            {error && <div>{error}</div>}
            {isBrowserReady && !error && <div>Preparing Headless Browser...</div>}
            {!isBrowserReady && !error && <div>Headless Browser Ready!</div>}
            <h2>How to Use</h2>
            <div className="how-to">
                <p>
                    Welcome to Instasearch!

                    Before using, ensure that the application status
                    is ready. Begin by entering your Instagram Login
                    details in the form above. Once you press enter,
                    a headless chrome browser will begin the session!
                </p>
            </div>
        </div>
    );
}

export default Home;