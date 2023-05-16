import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-center text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Slice Coders</a>
                <Link className='ml-10' to="/">Home</Link>
                <Link className='ml-10' to="/register">Register</Link>
                <Link className='ml-10' to="/orders">Orders</Link>
                {
                    user ? <> <span className='mx-4'>{user.email}</span>
                        <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button>
                    </> : <Link className='ml-10' to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;