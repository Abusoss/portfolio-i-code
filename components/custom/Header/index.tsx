"use client";

import Navbar from "./Navbar";


const Header = () => {
   return (
      <header className="grid z-20 sticky top-0 grid-flow-row p-0 md:p-4  ">
         <Navbar/>
      </header>
   );
}

export default Header;