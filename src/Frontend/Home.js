import Login from "./Login";

const Home = () => {
    return (
        <div className="home">
            <h1>Instasearch</h1>
            <a href="https://sebcontreras.github.io/index.html">by Sebastian Contreras</a>
            <Login />
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