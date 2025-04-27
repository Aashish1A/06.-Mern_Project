import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useProductStore } from "../../Store/Product";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  const { products } = useProductStore();

  return (
    <nav className="flex items-center justify-between px-[6%] py-4 bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="flex items-center space-x-3">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 dark:text-gray-200"
        >
          ProductStore
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/create" className="text-gray-800 dark:text-gray-200">
          <AiOutlinePlusSquare size={24} />
        </Link>
        <button
          onClick={toggleDarkMode}
          className="text-gray-800 dark:text-gray-200"
        >
          {darkMode ? <IoSunny size={24} /> : <IoMoon size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
