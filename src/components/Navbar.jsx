import { Link, NavLink } from "react-router-dom";
import { BiSolidPlaneAlt } from "react-icons/bi";


const Navbar = () => {


    const navLinks = <>
        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-blue-600 text-2xl' : 'mr-4 text-blue-300 text-2xl'} to='/'>Home</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-blue-600 text-2xl' : 'mr-4 text-blue-300 text-2xl'} to='/allTourist'>All tourists spot</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-blue-600 text-2xl' : 'mr-4 text-blue-300 text-2xl'} to='/addTourist'>Add tourists spot</NavLink>

        <NavLink className={({ isActive }) => isActive ? 'underline mr-4 text-blue-600 text-2xl' : 'mr-4 text-blue-300 text-2xl'} to='/myList'>My list</NavLink>
    </>



    return (
        <div>
            <div className="navbar bg-base-100 mt-9">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        <p className="flex gap-2 items-center text-blue-900 text-4xl font-bold">SCENIC SOJOURNS <BiSolidPlaneAlt></BiSolidPlaneAlt></p>
                        <p className="text-blue-600 text-2xl font-semibold ml-24">explore the world</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn bg-blue-900 text-white rounded mr-6">Login</Link>
                    <Link to='/register' className="btn bg-blue-900 text-white rounded">Register</Link>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Navbar;