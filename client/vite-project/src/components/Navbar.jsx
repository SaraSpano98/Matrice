import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSettings } from "../hooks/useSettings";

import matrixLogo from "../assets/immagini/matrixLogo.png";
import Button from "./shared/Button";

const Navbar = ({ user }) => {
    const { t, i18n } = useTranslation();
    const { settings: { darkMode }, toggleDarkMode } = useSettings();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isImparaOpen, setIsImparaOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsMenuOpen(false);
        setIsImparaOpen(false);
    }, [location.pathname]);

    return (
        <nav className="w-full fixed z-10 border-b bg-primary dark:bg-secondary py-4">
            <div className="flex justify-between items-center mx-auto px-5">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img src={matrixLogo} alt="Matrix Logo" className="h-12 object-contain" />
                    <span className="text-xl font-bold text-light dark:text-primary">{t("navbar.title") || "Matrix of Destiny"}</span>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-4 font-semibold">
                    <Link to="/" className="text-light dark:text-primary hover:text-accent">{t("navbar.home")}</Link>
                    <Link to="/matrici"><Button type="default">{t("navbar.matrici")}</Button></Link>
                    <Link to="/matrice-coppia" className="text-light dark:text-primary hover:text-accent">{t("navbar.matriceCoppia")}</Link>

                    {/* Impara dropdown */}
                    <div className="relative">
                        <button onClick={() => setIsImparaOpen(!isImparaOpen)} className="text-light dark:text-primary flex items-center hover:text-accent">
                            {t("navbar.impara")}
                            <span className="ml-1">▼</span>
                        </button>
                        {isImparaOpen && (
                            <div className="absolute left-0 mt-2 w-64 bg-secondary dark:bg-primary border rounded shadow-lg z-20">
                                <Link to="/impara/matrice-vuota" className="block p-3 hover:bg-accent/20 dark:hover:bg-secondaryAccent/20 rounded">
                                    {t("impara.matriceVuota.title")}
                                </Link>
                                <Link to="/impara/zona-matrice" className="block p-3 hover:bg-accent/20 dark:hover:bg-secondaryAccent/20 rounded">
                                    {t("impara.zonaMatrice.title")}
                                </Link>
                                <Link to="/impara/arcani-maggiori" className="block p-3 hover:bg-accent/20 dark:hover:bg-secondaryAccent/20 rounded">
                                    {t("impara.arcaniMaggiori.title")}
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Language */}
                    <select onChange={(e) => i18n.changeLanguage(e.target.value)} defaultValue={i18n.language} className="ml-2 p-1 rounded bg-light dark:bg-dark text-dark dark:text-light border">
                        <option value="en">🇬🇧 English</option>
                        <option value="it">🇮🇹 Italiano</option>
                    </select>

                    {/* Dark mode toggle */}
                    <button onClick={() => toggleDarkMode(!darkMode)} className="ml-2 p-2 rounded bg-accent dark:bg-secondaryAccent">
                        {darkMode ? "🌙" : "☀️"}
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center space-x-2">
                    <button onClick={() => toggleDarkMode(!darkMode)} className="p-2">{darkMode ? "🌙" : "☀️"}</button>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                        {isMenuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-secondary dark:bg-primary border-t border-dark dark:border-light py-4">
                    <Link to="/" className="block p-2 text-light dark:text-primary">{t("navbar.home")}</Link>
                    <Link to="/matrici" className="block p-2 text-light dark:text-primary">{t("navbar.matrici")}</Link>
                    <Link to="/matrice-coppia" className="block p-2 text-light dark:text-primary">{t("navbar.matriceCoppia")}</Link>
                    <button onClick={() => setIsImparaOpen(!isImparaOpen)} className="block p-2 text-light dark:text-primary">{t("navbar.impara")}</button>
                    {isImparaOpen && (
                        <div className="pl-4">
                            <Link to="/impara/matrice-vuota" className="block p-1 text-light dark:text-primary">{t("impara.matriceVuota.title")}</Link>
                            <Link to="/impara/zona-matrice" className="block p-1 text-light dark:text-primary">{t("impara.zonaMatrice.title")}</Link>
                            <Link to="/impara/arcani-maggiori" className="block p-1 text-light dark:text-primary">{t("impara.arcaniMaggiori.title")}</Link>
                        </div>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;



