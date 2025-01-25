"use client";
import { AlignJustify, X } from "lucide-react";
import React, { useState } from "react";

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-primary p-4 relative flex flex-row gap-2 text-white">
        <AlignJustify color="white" onClick={() => setIsOpen(!isOpen)} />
        Gem Lanka
      </div>
      <div
        className={`absolute top-0 inset z-50 w-full ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-200 ease-in-out`}
      >
        <div className="bg-primary w-[90%] h-screen p-4 relative ">
          <X className="absolute right-4" onClick={() => setIsOpen(false)} />
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Drawer;
