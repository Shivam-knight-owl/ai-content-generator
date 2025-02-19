import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function DashboardHeader() {
    const session=await getServerSession(authOptions);//get session from next-auth on server side component
    //console.log(session);
    
    if(!session){
        redirect("/signin");
    }
    
    return (
        <div className="p-5 shadow-sm border-b-2 flex justify-center">
            <div className="relative w-full max-w-xl">
                {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#6C42F5] size-5"/>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-1 focus:ring-[#6C42F5] placeholder-primary"
                /> */}

                <div className="flex items-center justify-center space-y-4 text-xl"> 
                Welcome to your dashboard, <span className="text-[#6C42F5] font-semibold ml-1"><i>{session?.user.username || session?.user.name}</i></span>
                </div>

            </div>
        </div>
    );
}
