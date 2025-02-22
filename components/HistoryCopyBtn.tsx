"use client"
import { toast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
import { CheckCircle2, Copy } from "lucide-react";
import { useState } from "react";

export const HistoryCopyBtn = ({aiResponse}:{aiResponse:string|null}) => {
    const [copy,setCopy]=useState<boolean>(false);

    const handleCopy=(aiResponse:string | null)=>{
        if(aiResponse){
            setCopy(true);
            navigator.clipboard.writeText(aiResponse);//copy the aiResponse to clipboard
            toast({
                title: "Copied to clipboard !",
                duration: 1500,
            });
        }
        else{
            toast({
                title: "No response to copy !",
                duration: 1500,
            });
        }

        setTimeout(()=>{
            setCopy(false);
        },1500)
    }

    return(
        <div>
            <Button className="flex items-center space-x-2 text-primary" onClick={() => handleCopy(aiResponse)} variant='ghost'>
                {copy?(
                    <div className="flex items-center space-x-1">
                        <CheckCircle2 className="size-5"/>
                        <span> Copy </span>
                    </div>
                ):(
                    <div className="flex items-center space-x-1">
                        <Copy className="size-5"/>
                        <span> Copy </span>
                    </div>
                )}
            </Button>
        </div>
    )
}