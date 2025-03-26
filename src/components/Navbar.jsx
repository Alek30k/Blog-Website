import { useState } from "react";
import { IKImage } from "imagekitio-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          path="/logo.png"
          alt="logo"
          className="w-8 h-8"
        />
        <span>Alelog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div
          className="cursor-pointer text-4xl "
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
      </div>
      {/* MOBILE LINK LIST */}
      <div
        className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
          open ? "-right-0" : "-right-[100%]"
        }`}
      >
        Menu
      </div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a to="/">Home</a>
        <a to="/posts?sort=trending">Trending</a>
        <a to="/posts?sort=popular">Most Popular</a>
        <a to="/">About</a>
        <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
          Login 👋
        </button>
        {/* <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn> */}
      </div>
    </div>
  );
};

export default Navbar;
