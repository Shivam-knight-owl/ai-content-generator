"use server"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/db";
import { getServerSession } from "next-auth"

export const saveInDb=async(formData:any,templateSlug:any,templateCategory:any,aiResponse:string)=>{

    try{
        const session=await getServerSession(authOptions);//get session from server
        console.log("Session:",session);

        console.log("props coming are data coming to be saved:",formData,templateSlug,templateCategory,aiResponse);

        if(!session?.user?.userId){
            console.log("User not authenticated");
            return null;
        }

        const savedAiOutput = await prisma.aiOutput.create({
            data:{
                userId:session.user.userId,
                formData:JSON.stringify(formData),
                templateSlug,
                category:templateCategory,
                aiResponse,
            }
        });
        return savedAiOutput;
    }
    catch(err){
        console.log("Error while saving AI generated output:",err);
    }
}