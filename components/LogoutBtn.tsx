"use client"
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default function LogoutBtn(){
    return(
        <div>
            <Button variant={"outline"} className="border border-primary bg-slate-800 text-white hover:bg-primary hover:text-white" onClick={()=>signOut()}>Log Out</Button> 
        </div>
    )
}