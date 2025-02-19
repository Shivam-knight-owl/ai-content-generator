import { Navbar } from "@/components/Navbar";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const dashboard=async()=>{
    const session=await getServerSession(authOptions);//get session from next-auth on server side component
    //console.log(session);

    if(!session){
        redirect("/signin");
    }

    return(
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center space-y-4 text-xl"> 
                Welcome to your dashboard, <span className="text-[#6C42F5] font-semibold ml-1"><i>{session?.user.username || session?.user.name}</i></span>
            </div>
        </>
    )
}
export default dashboard;