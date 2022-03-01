const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Instasearch</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/search" style={{
                    color: 'white',
                    backgroundColor: '#f1356d',
                    borderRadius: '8px'
                }}>New Search</a>
            </div>
        </nav>
    );
}

export default Navbar;