import { useState } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center space-x-2"></div>

      {/* Desktop Profile */}
      <div className="hidden md:flex items-center space-x-2">
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="font-medium">Rahil Siddique</span>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu size={24} />
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 right-6 bg-white shadow-lg p-4 rounded-lg md:hidden">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">Rahil Siddique</span>
          </div>
        </div>
      )}
    </nav>
  );
}
