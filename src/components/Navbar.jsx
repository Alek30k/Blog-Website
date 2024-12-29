import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>Alelog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
      </div>
      {/* MOBILE LINK LIST */}
      <div
        className={`w-full h-screen flex flex-col items-center justify-center absolute top-16  transition-all ease-in-out bg-red-500 ${
          open ? "-right-0" : "-right-[100%]"
        }`}
      >
        Menu
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default Navbar;
