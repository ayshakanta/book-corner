import { NavLink } from "react-router-dom";


const Header = () => {

    const links = < >
        <li className="text-[#23BE0A] bg-white border-2 border-[#23BE0A] rounded-lg hover:bg-[#23BE0A] font-semibold md:mr-4"><NavLink to="/" >Home</NavLink></li>
        <li className="md:mr-4"><NavLink to="/books">Listed Books</NavLink></li>
        <li><NavLink to="/pages">Pages to read</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1]  shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl md:text-3xl font-bold ">Book Corner</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-1 md:gap-4">
                <a className="btn bg-[#23BE0A] text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] text-white">Sign Up</a>
            </div>
           
        </div>
    );
};

export default Header;