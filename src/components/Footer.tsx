import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Gem Lanka. All rights reserved.</p>
        <nav className="mt-4">
          <a href="/about" className="mx-2 hover:underline">
            About Us
          </a>
          <a href="/contact" className="mx-2 hover:underline">
            Contact
          </a>
          <a href="/privacy" className="mx-2 hover:underline">
            Privacy Policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
