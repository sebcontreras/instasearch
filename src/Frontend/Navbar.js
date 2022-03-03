import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Instasearch</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/search" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Search</Link>
            </div>
        </nav>
    );
}

export default Navbar;