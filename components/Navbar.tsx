import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { BrainCircuitIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutBtn from "./LogoutBtn";

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="bg-gray-50 border-b shadow-sm sticky top-0 z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="mr-2">
              <BrainCircuitIcon className="size-10 text-[#6C42F5]" />
            </div>
            <div className="font-bold text-3xl">
              Br<i className="text-[#6C42F5]">ai</i>nscribe
            </div>
          </div>

          <input type="checkbox" id="menu-toggle" className="hidden peer" />
          <label
            htmlFor="menu-toggle"
            className="md:hidden block cursor-pointer p-2 rounded-md text-gray-800 hover:text-white hover:bg-[#6C42F5]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </label>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">Home</Link>
            <Link href="/signup" className={buttonVariants()}>
              Signup
            </Link>
            {session?.user ? (
              <LogoutBtn />
            ) : (
              <Link href="/signin" className={buttonVariants()}>
                Sign In
              </Link>
            )}
          </div>

          <div className="peer-checked:flex hidden flex-col absolute top-20 right-0 bg-gray-50 w-full py-4 space-y-4 shadow-lg md:hidden items-center z-20">
            <Link href="/">Home</Link>
            <Link href="/signup" className={buttonVariants()}>
              Signup
            </Link>
            {session?.user ? (
              <LogoutBtn />
            ) : (
              <Link href="/signin" className={buttonVariants()}>
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
