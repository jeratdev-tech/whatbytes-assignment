const menuItems = [
  {
    items: [
      { icon: "📊", label: "Dashboard" },
      { icon: "📝", label: "Skills Test", isActive: true },
      { icon: "👨‍💻", label: "Internship" },
    ],
  },
];

const IconMenu = () => {
  return (
    <div className="p-2 mt-10 font-bold">
      {menuItems.map((section) => (
        <div key={section.title} className="mb-4">
          <div className="space-y-1">
            {section.items.map((item) => (
              <button
                key={item.label}
                className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                  item.isActive ? "bg-blue-100" : "hover:bg-gray-100"
                }`}
              >
                <span className="text-lg">{item.icon}</span>

                <span className="ml-3 mt-6 hidden md:inline text-sm">
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IconMenu;
