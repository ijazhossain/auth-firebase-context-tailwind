import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (

        <div className="navbar bg-primary text-primary-content">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            <div>
                <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/order">Order</Link>
                {
                    user && <Link to="/profile" className='btn btn-ghost normal-case text-xl'>Profile</Link>
                }
                <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
                <Link className="btn btn-ghost normal-case text-xl" to="/login">LogIn</Link>
                {
                    user ? <><span>{user.email}</span><button onClick={handleLogOut} className="btn btn-xs">SignOut</button></> : <button className="btn btn-xs">Login</button>

                }
            </div>
        </div >

    );
};

export default Header;