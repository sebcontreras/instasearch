import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();

    const handleLogOut = (e) => {
        // send logout API
        fetch(`http://localhost:7000/logout/`)
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not logout. Please try again');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                // redirect to home page
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <nav className="navbar">
            <Link to="/"><h1>Instasearch</h1></Link>
            <div className="links">
                <a href="https://sebcontreras.github.io/index.html">by Sebastian Contreras</a>
                <Link to="/search">Search</Link>
                <Link to="/"
                    onClick={(e) => handleLogOut(e)}
                    style={{
                        color: 'white',
                        backgroundColor: '#f1356d',
                        borderRadius: '8px'
                    }}>Log out</Link>
            </div>
        </nav>
    );
}

export default Navbar;