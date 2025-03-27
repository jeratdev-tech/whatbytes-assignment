const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* ICONS AND USER */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <div className="w-[20px] h-[20px] bg-gray-300 rounded-sm"></div>
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <div className="w-[20px] h-[20px] bg-gray-300 rounded-sm"></div>
          <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <div className="w-[36px] h-[36px] bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navbar;
