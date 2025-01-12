import React, { useState, useEffect } from 'react';

const DarkMode = () => {
  const initialTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative ">
      <button
        id="theme-toggle"
        className="w-6 h-6 cursor-pointer drop-shadow-custom transition-all duration-300 relative right-0 z-10 align-middle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <span
          className={`block w-full h-full rounded-full transition-all duration-300 ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          }`}
        ></span>
      </button>
    </div>
  );
};

export default DarkMode;

