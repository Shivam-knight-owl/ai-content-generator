"use client"
import { BrainCircuitIcon, FileClock, Home, WalletCards } from "lucide-react";
import LogoutBtn from "./LogoutBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function DashboardSideNav(){

    const Navoptions=[
        {
            name:"Home",
            icon:Home,
            path:"/dashboard"
        },
        {
            name:"History",
            icon:FileClock,
            path:"/dashboard/history"
        },
        {
            name:"Billing",
            icon:WalletCards,
            path:"/dashboard/billing"
        }
    ]

    const path=usePathname();//get current path
    useEffect(()=>{
        console.log(path);
    })

    return(
        <div className="h-screen p-5 shadow-md border bg-white">
            {/* logo */}
            <Link href={"/"} className="flex items-center justify-center border-b-[#6C42F5] border-b-2 pb-5">
                <div><BrainCircuitIcon className="size-10 text-[#6C42F5]"/></div>
                <div className="font-bold text-3xl cursor-pointer">Br<i className="text-[#6C42F5]">ai</i>nscribe</div>
            </Link>

            {/* nav options */}
            <div className="mt-14 ml-4">
                {Navoptions.map((option,index)=>(
                    <div key={index} className={`flex items-center space-x-4 p-3 mb-3 rounded-lg hover:bg-primary hover:text-white cursor-pointer
                    ${path===option.path?"bg-primary text-white":""}`
                    }>
                        <option.icon/>
                        <h2 className="font-semibold">{option.name}</h2>
                    </div>
                ))}
            </div>

            {/* logout btn at bottom*/}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center">
                <LogoutBtn />
            </div>

        </div>
    )
}