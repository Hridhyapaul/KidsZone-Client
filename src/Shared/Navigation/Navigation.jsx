import { Link } from 'react-router-dom';
import logo from '../../../public/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const Navigation = () => {
    const { user, loading, logout } = useContext(AuthContext);
    const navItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/allToys' className='font-semibold'>All Toys</Link></li>
        {/* {
            user && <li><Link to='/myToys' className='font-semibold'>My Toys</Link></li>
        }
        {
            user && <li><Link to='/addToys' className='font-semibold'>Add Toys</Link></li>
        } */}
        <li><Link to='/blogs' className='font-semibold'>Blogs</Link></li>
    </>

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="bg-base-200 py-3 ">
            <div className="navbar container mx-auto px-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>

                    <Link className='flex justify-start items-center gap-2' to='/'>
                        <img className='h-10' src={logo} alt="" />
                        <a className="text-xl font-bold">KidsZone</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* {
                        user ?
                            <div className='flex items-center gap-x-4'>
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <div className="avatar">
                                        <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 tooltip">
                                            <img src={user.photoURL} />
                                        </div>
                                    </div>
                                </div>
                                <button className='bg-[#111111] px-4 py-2 text-white rounded font-semibold' onClick={handleLogout}>Log Out</button>
                            </div>
                            :
                            <Link to='/login'>
                                <button className='bg-[#111111] px-4 py-2 text-white rounded font-semibold'>Login</button>
                            </Link>
                    } */}
                </div>
            </div>
        </div >
    );
};

export default Navigation;