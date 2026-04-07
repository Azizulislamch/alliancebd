import { NavLink } from "react-router";

import logo from "../../../assets/images/logo.png"

export default function Navbar() {
    return (
        <div className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* LEFT: LOGO */}
                <div className="flex items-center gap-4">
                    <NavLink to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-9 object-contain cursor-pointer"
                        />
                    </NavLink>

                </div>

                {/* CENTER: MENU */}
                <ul className="hidden md:flex items-center gap-8 text-gray-700">
                    <li>
                        <NavLink to="/" className={({ isActive }) =>
                            isActive ? "text-cyan-500 font-bold" : "hover:text-cyan-500 text-gray-700"
                        }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ isActive }) =>
                            isActive ? "text-cyan-500 font-bold" : "hover:text-cyan-500 text-gray-700"
                        }>
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/buying-house" className={({ isActive }) =>
                            isActive ? "text-cyan-500 font-bold" : "hover:text-cyan-500 text-gray-700"
                        }>
                            Buying House
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/factory" className={({ isActive }) =>
                            isActive ? "text-cyan-500 font-bold" : "hover:text-cyan-500 text-gray-700"
                        }>
                            Factory & Machinery
                        </NavLink>
                    </li>
                </ul>

                {/* RIGHT: BUTTON */}
                <div>
                    <NavLink to="/contact">
                        <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-md cursor-pointer transition">
                            Contact US
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}