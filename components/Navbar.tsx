import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { BrainCircuitIcon } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import LogoutBtn from "./LogoutBtn";

export const Navbar=async()=>{
    const session=await getServerSession(authOptions);

    return(
        <div className="flex items-center justify-between h-20 bg-gray-50 border-b shadow-sm sticky top-0 z-10 w-full">
            <div className="flex items-center justify-center mx-12">
                <div className="mx-4"><BrainCircuitIcon className="size-10 text-[#6C42F5]"/></div>
                <div className="font-bold text-3xl">Br<i className="text-[#6C42F5]">ai</i>nscribe</div>
            </div>

            <div className="flex items-center space-x-8 mx-12">
                {/* <ThemeToggle/> */}
                <Link href="/">Home</Link>
                <Link href="/signup" className={buttonVariants()}>Signup</Link>
                
                {session?.user?(
                    // here onclick signOut() fn from next-auth wont work as it is server compo so we need to make to make a client compo for this btn as we want to defer client compo as much as possible,we can do useSession and make this navbar a client compo but getServerSession is faster than useSession.

                    // <Button variant={"outline"} className="border border-[#6C42F5] hover:bg-slate-800 hover:text-white" onClick={()=>signOut()}>Log Out</Button>
                    
                    <LogoutBtn />

                ):(
                    <Link href={"/signin"} className={buttonVariants()}>Sign In</Link>
                )}
                
            </div>
        </div>
    )
}