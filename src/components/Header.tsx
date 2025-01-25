import React from "react";
import Drawer from "./Drawer";

const Header: React.FC = () => {
  return (
    <>
      <header className="bg-gray-800 text-white p-4 hidden md:flex justify-between items-center ">
        <h1 className="text-xl">Gem Lanka</h1>

        <nav className="hidden md:flex space-x-4">
          <a href="#" className="">
            Home
          </a>
          <a href="#" className="">
            About
          </a>
          <a href="#" className="">
            Contact
          </a>
        </nav>
      </header>
      <div className="md:hidden ">
        <Drawer />
      </div>
    </>
  );
};

export default Header;
