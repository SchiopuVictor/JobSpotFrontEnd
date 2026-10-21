import '../styles/header.css';
function HeaderComponent() {
    return (
        <div>
            <header className="header p-3">
                <nav className="navbar navbar-expand-md navbar-light bg-white rounded-pill shadow-sm px-4 d-flex justify-content-between align-items-center">
                    <a className="navbar-brand fw-bold text-dark" href="/">
                        JobSpot
                    </a>

                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <a className="nav-link fw-semibold text-primary" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold text-secondary" href="/internship">Internships</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold text-secondary" href="/notificari">Notificari</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-semibold text-secondary" href="/cv">CV</a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-none d-md-block">
                        <a href="/login" className="btn btn-primary rounded-pill px-4 hover-shadow hover-invert">
                            Login
                        </a>
                        <a href="/register" className="btn btn-outline-primary rounded-pill px-4 ms-2 hover-shadow hover-invert">
                            Register
                        </a> 
                    </div>

                </nav>
            </header>
        </div>
    );
}

export default HeaderComponent;