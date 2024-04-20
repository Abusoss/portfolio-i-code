import MyLogo from "../../Logo";
import { ModeToggle } from "../../ThemeToggle";
import Menu from "./Menu";

const Navbar = () => {
   return (
      <nav className="grid grid-flow-col grid-cols-[1fr,1fr,1fr] place-content-between w-full">
         <MyLogo />
         <div className="h-fit max-w-[900px] w-full  px-3 py-2 rounded-xl backdrop-blur-sm bg-white/10 dark:bg-black/10">
            <Menu />
         </div>
         <ModeToggle />
      </nav>
   );

}

export default Navbar;