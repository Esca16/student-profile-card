import './header.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-cyan-950 py-4">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div className="text-slate-300 text-xl">Logo</div>
                    <ul className="flex gap-6 items-center">
                        <li className="text-slate-300">
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li className="text-slate-300">
                            <NavLink to={"counter"}>Counter</NavLink>
                        </li>
                        <li className="text-slate-300">
                            <NavLink to={"student"}>Student</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
