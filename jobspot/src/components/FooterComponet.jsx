import React from 'react';

function FooterComponent() {
    return (
        <footer className="footer-container py-5 bg-light text-dark">
            <div className="container">
                <div className="row gy-4 mb-5">
                    
                    <div className="col-12 col-md-5">
                        <div className="d-flex align-items-center mb-3 gap-2 align-items-center">
                            <span className="fs-4 fw-bold text-dark">JobSpot</span>
                        </div>
                        <p className="text-secondary style-description pe-md-4 ">
                            Găsește rapid cele mai potrivite internship-uri și oportunități de carieră pentru studenți și absolvenți.
                        </p>
                    </div>

                    <div className="col-6 col-md-2">
                        <h6 className="text-muted mb-3 fw-normal">Useful Link</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                            <li><a href="/" className="text-decoration-none text-dark fw-semibold">Home</a></li>
                            <li><a href="/solutions" className="text-decoration-none text-dark fw-semibold">Solutions</a></li>
                            <li><a href="/pricing" className="text-decoration-none text-dark fw-semibold">Pricing</a></li>
                            <li><a href="/contact" className="text-decoration-none text-dark fw-semibold">Contact</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2">
                        <h6 className="text-muted mb-3 fw-normal">Product</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                            <li><a href="/internships" className="text-decoration-none text-dark fw-semibold">Internships</a></li>
                            <li><a href="/companies" className="text-decoration-none text-dark fw-semibold">Companies</a></li>
                            <li><a href="/jobs" className="text-decoration-none text-dark fw-semibold">Jobs</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-3">
                        <h6 className="text-muted mb-3 fw-normal">Company</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 m-0">
                            <li><a href="/register" className="text-decoration-none text-dark fw-semibold">Sign up</a></li>
                            <li><a href="/login" className="text-decoration-none text-dark fw-semibold">Login</a></li>
                        </ul>
                    </div>
                </div>


                <div 
                    className="d-flex flex-column flex-md-row justify-content-between align-items-center px-4 py-3 rounded-pill"
                    style={{ backgroundColor: '#e6f4f1' }} 
                >
                    <span className="text-secondary small mb-2 mb-md-0">
                        Copyright © 2026 JobSpot.co
                    </span>

                    <div className="d-flex gap-2">
                        <a href="https://twitter.com" className="btn btn-white rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm p-0" style={{ width: '36px', height: '36px', color: '#139a8c' }}>
                            <i className="bi bi-twitter-x">X</i>
                        </a>
                        <a href="https://facebook.com" className="btn btn-white rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm p-0" style={{ width: '36px', height: '36px', color: '#139a8c' }}>
                            <i className="bi bi-facebook">f</i>
                        </a>
                        <a href="https://instagram.com" className="btn btn-white rounded-circle d-flex align-items-center justify-content-center bg-white shadow-sm p-0" style={{ width: '36px', height: '36px', color: '#139a8c' }}>
                            <i className="bi bi-instagram">in</i>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default FooterComponent;