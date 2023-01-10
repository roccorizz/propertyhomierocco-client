import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from 'react-icons/fa';
import logo from '../../../../assets/logo.svg';
import { AuthContext } from '../../../../Contexts/Authprovider/Authprovider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch();

    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/aboutme'>About Me</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        <li className='font-semibold'><Link to='/allservices'>All Services</Link></li>
        <li className='font-semibold'><Link to='/contact'>Contact</Link></li>

        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/addaservice'>Add a Service</Link></li>
                    <li className='font-semibold'>
                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                    </li>
                    <li className='font-semibold'><Link to='/myreviews'>My Review</Link></li>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                </>

        }

    </>
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <Link to="/" className="normal-case p-6">
                    <img src={logo} className='h-12 w-16 rounded-xl' alt='logo'></img>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end flex">
                <h2 className='text-xl text-red-600 px-2'><FaPhoneAlt /></h2>
                <h2 className='font-semibold  text-xl text-slate-500'>+1 (886) 234-5678</h2>

            </div>
        </div>
    );
};

export default Header;