import { useContext } from 'react';
import './header.css';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthProvider';

const Header = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const navigate = useNavigate();

    const LogOutHandler = () => {
        setIsAuth(false);
        navigate("/login")
    }
    return (
        <header className="bg-cyan-950 py-4">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="text-slate-300 text-xl">Logo</div>
                    <ul className="flex gap-6 items-center">
                        <li className="text-slate-300">
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        {isAuth && (
                            <>
                                <li className="text-slate-300">
                                    <NavLink to={"counter"}>Counter</NavLink>
                                </li>
                                <li className="text-slate-300">
                                    <NavLink to={"student"}>Student</NavLink>
                                </li>
                            </>
                        )}
                        <li>
                            {isAuth ? (
                                <button onClick={LogOutHandler} className="py-2 px-3 bg-red-500 text-white rounded-sm cursor-pointer">Log Out</button>) : (<Link to="/login"
                                    className="py-2 px-3 bg-cyan-500 text-white rounded-sm cursor-pointer">Log In</Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
