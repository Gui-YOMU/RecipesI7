import { IoMenu } from "react-icons/io5";
import { useToggle } from "../../hooks/useToggle";
import { NavList } from "../NavList/NavList";

export const Header = () => {
  const drawerToggle = useToggle();

  return (
    <header className="flex items-center justify-between bg-gray-400 p-2 h-15 sm:h-20">
      <h1 className="w-full text-center text-xl font-bold">RecipesI7</h1>
      <nav className="w-fit">
        <div className="p-2 sm:hidden" onClick={drawerToggle.toggle}>
          <IoMenu size={24} />
          <div>
            {drawerToggle.isOn && (
              <ul className="absolute top-12 left-full -translate-x-full w-fit bg-gray-400 p-2 flex flex-col gap-2">
                <NavList />
              </ul>
            )}
          </div>
        </div>
        <ul className="hidden sm:flex sm:max-md:flex-col md:gap-3 justify-around pr-4 ">
          <NavList />
        </ul>
      </nav>
    </header>
  );
};
