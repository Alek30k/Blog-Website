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
        <div className="cursor-pointer text-4xl">{open ? "X" : "☰"}</div>
      </div>
      {/* MOBILE BUTTON */}
      {/* MOBILE LINK LIST */}
      {/* DESKTOP MENU */}
      <div className="hidden md:flex">D</div>
    </div>
  );
};

export default Navbar;
