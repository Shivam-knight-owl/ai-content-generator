"use server"

import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db"
import { getServerSession } from "next-auth"

export interface HISTORY{
    id:string,
    templateSlug:string,
    formData:string,
    aiResponse:string | null,
    createdAt:string
}

export const fetchHistory=async()=>{
    const session = await getServerSession(authOptions);
    console.log("Session:",session);
    
    if(!session?.user?.userId){
        console.log("User not authenticated");
        return null;
    }

    let allHistoryList:HISTORY[]=[];

    try{
        const historyData = await prisma.aiOutput.findMany({
            where:{
                userId:session.user.userId
            },
            select: {
                id: true,
                templateSlug: true,
                formData: true,
                aiResponse: true,
                createdAt: true
            },
            orderBy:{
                createdAt: 'desc'
            }
        });

        allHistoryList = historyData.map(item => ({
            ...item,
            createdAt: item.createdAt.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })
        }));

        //console.log("History List:",allHistoryList);

        return allHistoryList;
        
        } catch (err: any) {
        //console.log("Error fetching history",err);
        throw new Error(`Failed to fetch history: ${err.message ?? err}`);
    }
}