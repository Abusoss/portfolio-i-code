import { useTheme } from "next-themes";
import MyLogo from "../../Logo";
import { ModeToggle } from "../../ThemeToggle";
import Menu from "./Menu";

const Navbar = () => {
   const { theme } = useTheme()
   return (
      <nav className={`flex flex-col md:flex-row items-center w-full ${theme === 'dark' ? 'backdrop-blur-md md:backdrop-blur-0 bg-black/10 md:bg-transparent' : 'backdrop-blur-md md:backdrop-blur-0 bg-white/10 md:bg-transparent'}`}>
         <div className="flex self-start items-center md:space-x-4 justify-between pr-2 w-full md:w-[300px]">
            <MyLogo />
         <ModeToggle />
         </div>
         <div className="md:mt-0 w-full md:w-auto p-0 md:px-3 md:py-2 rounded-xl md:backdrop-blur-sm md:bg-white/10 md:dark:bg-black/10 ">
            <Menu />
         </div>
      </nav>
   );
}

export default Navbar;