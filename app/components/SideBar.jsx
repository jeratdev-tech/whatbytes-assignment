import { useState } from "react";
import { BarChart, Medal, FileText, Menu, X } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 md:hidden fixed top-4 left-4 z-50 bg-white shadow-md rounded-md"
        >
          <Menu size={30} />
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-white shadow-md p-4 w-30 transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:block md:w-55`}
      >
        {/* Logo & Close Button */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-black"></div>
            <span className="text-lg font-semibold">WhatBytes</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="md:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 space-y-4">
          <NavItem icon={<BarChart size={20} />} text="Dashboard" />
          <NavItem
            icon={<Medal size={20} className="text-blue-600" />}
            text="Skill Test"
            active
          />
          <NavItem icon={<FileText size={20} />} text="Internship" />
        </nav>
      </div>

      {/* Overlay (Closes Sidebar when clicked) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

function NavItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center p-2 rounded-lg cursor-pointer ${
        active ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700"
      }`}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
}
