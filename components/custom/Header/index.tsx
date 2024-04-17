"use client";

import Navbar from "./Navbar";


const Header = () => {
   return (
      <header className="grid sticky top-0 grid-flow-row p-4 ">
         <Navbar/>
      </header>
   );
}

export default Header;