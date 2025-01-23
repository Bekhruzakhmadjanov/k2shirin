// src/components/Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Access translation utilities
  const [navOpen, setNavOpen] = useState(false); // Mobile menu state
  const [desktopLangMenuOpen, setDesktopLangMenuOpen] = useState(false); // Desktop language menu state
  const [mobileLangMenuOpen, setMobileLangMenuOpen] = useState(false); // Mobile language menu state
  const desktopLangMenuRef = useRef(null); // Ref for desktop language menu
  const mobileLangMenuRef = useRef(null); // Ref for mobile language menu

  // Change the language dynamically
  const changeLanguage = (lng, isMobile) => {
    i18n.changeLanguage(lng); // Switch language dynamically
    localStorage.setItem('language', lng); // Save the selected language
  
    if (isMobile) {
      setMobileLangMenuOpen(false); // Close the mobile language menu
    } else {
      setDesktopLangMenuOpen(false); // Close the desktop language menu
    }
  };
  

  // Close the desktop language menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (desktopLangMenuRef.current && !desktopLangMenuRef.current.contains(e.target)) {
        setDesktopLangMenuOpen(false);
      }
      if (mobileLangMenuRef.current && !mobileLangMenuRef.current.contains(e.target)) {
        setMobileLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 shadow-lg">
      <div className="custom-navbar-container mx-auto px-4 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-white font-extrabold text-xl tracking-widest uppercase">
          <a href="/" className="hover:text-orange-400 transition-colors">Shirin</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 uppercase font-semibold text-white">
          <li><a href="/" className="hover:text-orange-400 transition-colors">{t('navbar.home')}</a></li>
          <li><a href="/products" className="hover:text-orange-400 transition-colors">{t('navbar.products')}</a></li>
          <li><a href="/about" className="hover:text-orange-400 transition-colors">{t('navbar.about')}</a></li>
          <li><a href="/contact" className="hover:text-orange-400 transition-colors">{t('navbar.contact')}</a></li>
        </ul>

        {/* Desktop Language Menu */}
        <div ref={desktopLangMenuRef} className="relative hidden md:block">
          <button
            onClick={() => setDesktopLangMenuOpen(!desktopLangMenuOpen)}
            className="ml-4 focus:outline-none hover:scale-110 transition-transform flex items-center justify-center"
          >
            <img src="../images/globe.png" alt="Language" className="w-6 h-6" />
          </button>
          {desktopLangMenuOpen && (
            <ul className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md text-sm z-50">
              <li className="px-4 py-2 hover:bg-orange-300 cursor-pointer font-bold" onClick={() => changeLanguage('en')}>English</li>
              <li className="px-4 py-2 hover:bg-orange-300 cursor-pointer font-bold" onClick={() => changeLanguage('ru')}>Русский</li>
              <li className="px-4 py-2 hover:bg-orange-300 cursor-pointer font-bold" onClick={() => changeLanguage('uz')}>O'zbekcha</li>
            </ul>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex flex-col items-end justify-between h-6 w-8 focus:outline-none group"
          onClick={() => setNavOpen(!navOpen)}
        >
          <span className="block w-8 h-1 bg-white rounded-sm transition-all transform group-hover:scale-x-110"></span>
          <span className="block w-6 h-1 bg-white rounded-sm transition-all transform group-hover:scale-x-110"></span>
          <span className="block w-4 h-1 bg-white rounded-sm transition-all transform group-hover:scale-x-110"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 transform transition-transform ${navOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute top-0 right-0 w-3/4 sm:w-1/2 h-full bg-gradient-to-b from-red-500 via-orange-400 to-yellow-300 shadow-2xl p-6 flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-white text-lg font-extrabold uppercase">{t('navbar.menu')}</span>
            <button className="focus:outline-none text-white hover:text-orange-300 transition-colors" onClick={() => setNavOpen(false)}>✕</button>
          </div>

          <ul className="space-y-6 uppercase font-semibold text-white tracking-wide">
            <li><a href="/" onClick={() => setNavOpen(false)} className="block py-2 hover:text-orange-300 transition-colors">{t('navbar.home')}</a></li>
            <li><a href="/products" onClick={() => setNavOpen(false)} className="block py-2 hover:text-orange-300 transition-colors">{t('navbar.products')}</a></li>
            <li><a href="/about" onClick={() => setNavOpen(false)} className="block py-2 hover:text-orange-300 transition-colors">{t('navbar.about')}</a></li>
            <li><a href="/contact" onClick={() => setNavOpen(false)} className="block py-2 hover:text-orange-300 transition-colors">{t('navbar.contact')}</a></li>
          </ul>

          {/* Mobile Language Menu */}
          <div ref={mobileLangMenuRef} className="relative mt-8">
            <button
              onClick={() => setMobileLangMenuOpen(!mobileLangMenuOpen)}
              className="focus:outline-none text-white uppercase hover:text-orange-300 transition-colors"
            >
              {t('navbar.language')}
            </button>
            {mobileLangMenuOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md text-sm z-50 text-gray-700">
                <li className="px-4 py-2 hover:bg-orange-300 cursor-pointer font-bold" onClick={() => changeLanguage('en')}>English</li>
                <li className="px-4 py-2 hover:bg-orange-300 cursor-pointer font-bold" onClick={() => changeLanguage('ru')}>Русский</li>
                <li className="px-4 py-2 hover:bg-orange-300 cursor-pointer font-bold" onClick={() => changeLanguage('uz')}>O'zbekcha</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
