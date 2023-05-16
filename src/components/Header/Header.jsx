import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-center text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Auth</a>
                <Link className='ml-10' to="/">Home</Link>
                <Link className='ml-10' to="/register">Register</Link>
                <Link className='ml-10' to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;