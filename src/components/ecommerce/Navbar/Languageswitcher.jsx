import React, { useEffect, useRef, useState } from 'react'

const Languageswitcher = ({ selectedLanguage, onLanguageChange }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', name: 'En', flag: 'https://flagcdn.com/us.svg' },
        { code: 'ru', name: 'Ru', flag: 'https://flagcdn.com/ru.svg' },
      ];
      const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);
    //   const closeDropdown = () => setDropdownOpen(false);

       // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);// Close the dropdown if the click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
    <button
      className="flex items-center space-x-2  sm:text-secondary  rounded-lg px-4 py-2 focus:outline-none"
      onClick={toggleDropdown}
    >
      <img
        src={languages.find((lang) => lang.code === selectedLanguage)?.flag}
        alt="flag"
        className="w-5 h-5 rounded-full"
      />
      <span>{selectedLanguage.toUpperCase()}</span>
    </button>
    {dropdownOpen && (
      <div className="absolute bottom-full sm:bottom-auto mt-2 z-10">
        {languages.map((lang) => (
          <div
            key={lang.code}
            onClick={() => {
              onLanguageChange(lang.code);
              setDropdownOpen(false);
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary text-secondary cursor-pointer"
          >
            <img src={lang.flag} alt={lang.name} className="w-5 h-5 rounded-full" />
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    )}
  </div>
  )
}

export default Languageswitcher
