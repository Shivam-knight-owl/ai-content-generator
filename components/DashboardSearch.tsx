"use client"
import { Search } from "lucide-react";

export default function DashboardSearch({setSearch}:any) {

    return (
        <div className="p-10 flex flex-col justify-center items-center bg-gradient-to-br from-[#996eff] via-[#6C42F5] to-[#350dbb] text-white">
            <h2 className="text-3xl font-bold">Browse All Templates</h2>
            <p>What would you like to create today?</p>
            <div className="w-full flex justify-center items-center">
                <div className="flex gap-2 items-center p-2 bg-white border border-slate-600 rounded-md my-5 w-[40%]">
                    <Search className="text-primary"/>
                    <input type="text" placeholder="Search..."
                     onChange={(e)=>setSearch(e.target.value)}
                     className="bg-transparent w-full outline-none text-black"/>
                </div>
            </div>
        </div>
    )
}