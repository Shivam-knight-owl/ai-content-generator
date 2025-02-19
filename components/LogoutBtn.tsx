"use client"
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogoutBtn(){
    return(
        <div>
            <Button variant={"outline"} className="border border-[#6C42F5] hover:bg-slate-800 hover:text-white" onClick={()=>signOut()}>Log Out</Button> 
        </div>
    )
}