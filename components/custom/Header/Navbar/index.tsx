import MyLogo from "../../Logo";
import { ModeToggle } from "../../ThemeToggle";
import Menu from "./Menu";

const Navbar = () => {
   return (
      <nav className="grid grid-flow-col grid-cols-[1fr,min-content,1fr] place-content-between w-full">
         <MyLogo/>
         <Menu/>
         <ModeToggle/>
      </nav>
   );

}

export default Navbar;