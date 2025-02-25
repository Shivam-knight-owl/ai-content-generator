"use client"
import DashboardSearch from "@/components/DashboardSearch";
import DashboardTemplateList from "@/components/DashboardTemplateList";
import { useState } from "react";

const Dashboard=()=>{
    // const session=await getServerSession(authOptions);//get session from next-auth on server side component
    // //console.log(session);

    // if(!session){
    //     redirect("/signin");
    // }

    const [search,setSearch]=useState<string>("");//search state for search input in DashboardSearch component

    return(
        <div>
            {/* Search section */}
            <DashboardSearch setSearch={setSearch}/>

            {/* Template List section */}
            <DashboardTemplateList search={search}/>
        </div>
    )
}
export default Dashboard;