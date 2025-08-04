import React from "react";
import DesktopNavbar from "./desktopNavbar";
import HamburgerMenu from "./hamburgerMenu";

const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar (xl and up) */}
      <div className="hidden xl:block sticky top-0 z-50">
        <DesktopNavbar />
      </div>

      {/* Mobile Hamburger Menu (below xl) */}
      <div className="block xl:hidden  ">
        <HamburgerMenu />
      </div>
    </>
  );
};

export default Navbar;
