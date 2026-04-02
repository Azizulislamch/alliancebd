import { Link } from "react-router";

import logo from "../../../assets/images/logo.png"

export default function Navbar() {
    return (
        <div className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* LEFT: LOGO */}
                <div className="flex items-center gap-4">
                    <img
                        src={logo}
                        alt="logo"
                        className="h-9 object-contain hover:cursor-pointer"
                    />
                    
                </div>

                {/* CENTER: MENU */}
                <ul className="hidden md:flex items-center gap-8 text-gray-700">
                    <li>
                        <Link to="/" className="hover:text-blue-500">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-blue-500">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/buying-house" className="hover:text-blue-500">
                            Buying House
                        </Link>
                    </li>
                    <li>
                        <Link to="/factory" className="hover:text-blue-500">
                            Factory & Machinery
                        </Link>
                    </li>
                </ul>

                {/* RIGHT: BUTTON */}
                <div>
                    <Link to="/contact">
                        <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition">
                            Contact US
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}