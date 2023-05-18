import { Link } from 'react-router-dom';
import logo from '../../../public/logo.svg'
const Navigation = () => {
    const navItems = <>
        <li><Link to='/' className='font-semibold'>Home</Link></li>
        <li><Link to='/allToys' className='font-semibold'>All Toys</Link></li>
        <li><Link to='/myToys' className='font-semibold'>My Toys</Link></li>
        <li><Link to='/addToys' className='font-semibold'>Add Toys</Link></li>
        <li><Link to='/blogs' className='font-semibold'>Blogs</Link></li>
    </>
    return (
        <div className="bg-base-200 py-3">
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
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div >
    );
};

export default Navigation;