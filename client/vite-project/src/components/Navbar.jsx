import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { useSettings } from "../hooks/useSettings";

const Navbar = ({user}) => {
    const {
        settings: { darkMode },
        toggleDarkMode,
    } = useSettings();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isImparaOpen, setIsImparaOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
        setIsImparaOpen(false);
    }, [location.pathname]);

    const handleToggleDarkMode = () => {
        toggleDarkMode(!darkMode);
    };

    return (
        <nav className="w-full z-10 fixed border-b py-4 bg-primary dark:bg-dark">
            <div className="w-full px-5 mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <div className="h-12">
                        <img src={matrixLogo} alt="Matrix Logo" className="h-full object-contain" />
                    </div>
                    <div>
                        {/* Site Title */}
                        <span className="text-xl font-bold text-white hover:!text-accent cursor-pointer dark:text-primary dark:hover:!text-accent">
                            Matrix of Destiny
                        </span>
                    </div>


                </div>
            </div>
        </nav>
    )

    
}