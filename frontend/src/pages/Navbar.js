import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';

export default function Navbar() {

    let isAuthenticate = localStorage.getItem('isAuthenticate');
    const navigate = useNavigate();
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="nav-link active" to={'/'}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to={'/'}>Home</Link>
                            </li>
                        </ul>
                        {!isAuthenticate &&
                            <>
                                <Link Link className="btn btn-outline-primary text-light me-2" to={"/signup"} >Sign Up</Link>
                                <Link className="btn btn-outline-primary text-light" to={'/login'} >Login</Link>
                            </>
                        }
                        {isAuthenticate &&
                            <Button onClick={() => {
                                localStorage.removeItem('isAuthenticate')
                                navigate('/login')
                            }} >
                                Logout
                            </Button>
                        }
                    </div>
                </div>
            </nav >
        </>

    )
}
