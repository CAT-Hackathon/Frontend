import { CircleUser, Menu } from "lucide-react";
import { Button } from "@components/ui/button";
import Logo from "@assets/svg/logo.svg?react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@components/ui/sheet";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

const Nav = () => {
  const navLinkStyle = ({ isActive }: { isActive: boolean }) => {
    return isActive ? "text-white gradients" : "text-black";
  };

  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <header className="fixed w-full backdrop-blur-sm top-0 flex items-center justify-between gap-4 border-none bg-transparent py-4 px-4 md:px-6 z-[99]">
      <NavLink
        to="/"
        className="flex items-center gap-2 text-lg font-semibold md:text-base sm:flex-none md:flex-none lg:flex-none flex-1"
      >
        <Logo className="h-12 w-12" />
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#113573] to-[#4B97F4] font-bold text-[1.5rem]">
          Met2ashara
        </h1>
      </NavLink>

      <nav className="hidden flex-col gap-8 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
              { isActive }
            )}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
              { isActive }
            )}`
          }
        >
          About Us
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
              { isActive }
            )}`
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/companies"
          className={({ isActive }) =>
            `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
              { isActive }
            )}`
          }
        >
          Companies
        </NavLink>

        <NavLink
          to="/roadmap"
          className={({ isActive }) =>
            `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
              { isActive }
            )}`
          }
        >
          Roadmap
        </NavLink>
      </nav>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium pt-[90px]">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
                  { isActive }
                )}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
                  { isActive }
                )}`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
                  { isActive }
                )}`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/roadmap"
              className={({ isActive }) =>
                `p-4 rounded-[10px] transition-all hover:text-white hover:gradients ${navLinkStyle(
                  { isActive }
                )}`
              }
            >
              Roadmap
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>

      {auth?.isLoggedIn ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>
              Welcome {auth ? auth?.user?.user.name :""}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> navigate("/profile")}>Profile</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                auth.logout();
              }}
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button variant="default" onClick={() => navigate("/login")}>
          Log in
        </Button>
      )}
    </header>
  );
};

export default Nav;
