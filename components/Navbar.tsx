import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { BrainCircuitIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar=()=>{
    return(
        <div className="flex items-center justify-between h-20 bg-gray-100 border-b shadow-sm fixed top-0 z-10 w-full">
            <div className="flex items-center justify-center mx-12">
                <div className="mx-4"><BrainCircuitIcon className="size-10 text-[#6C42F5]"/></div>
                <div className="font-bold text-3xl">Br<i className="text-[#6C42F5]">ai</i>nscribe</div>
            </div>

            <div className="flex items-center space-x-8 mx-12">
                <ThemeToggle />
                <Link href="/">Home</Link>
                <Link href="/signup" className={buttonVariants()}>Signup</Link>
                <Link href="/signin" className={buttonVariants()}>Signin</Link>
            </div>
        </div>
    )
}