
import { fetchHistory, HISTORY } from "@/app/actions/fetchHistory"
import { Button } from "./ui/button"
import { useContext, useEffect, useState } from "react";
import TotalUsageContext from "@/app/(context)/totalUsageContext";

export const CreditUsage=()=>{

    //fetch history and do the total credits used calc on basis of word count of each history item

    // const [totalUsage,setTotalUsage]=useState<number>(0);

    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);

    const GetHistoryCreditCalc=async()=>{
        const historyList=await fetchHistory();//get the history list from server action
        
        if (historyList) {
            CalcCreditUsage(historyList);
        }
    }

    const CalcCreditUsage=(historyList:HISTORY[])=>{
        let totalWords=0;
        historyList.map((item:HISTORY)=>{
            const words=item.aiResponse?.split(" ").length || 0;
            totalWords+=words;
        });

        console.log("Total Words:",totalWords);
        setTotalUsage(totalWords);
    }

    useEffect(()=>{
        GetHistoryCreditCalc();
    },[]);

    return(
        <div className="m-5">
            <div className="bg-primary p-3 rounded-lg text-white">
                <h2>Credits</h2>
                <div className="rounded-full w-full bg-[#a781ff] h-2 mt-2">
                    <div className="rounded-full h-2 bg-white" 
                    style={{
                            width: `${totalUsage <= 10000 ? (totalUsage / 10000) * 100 : 100}%`
                        }}>
                    </div>
                </div>
                <h2 className="text-sm my-1">{totalUsage===0?"Calculating...":totalUsage}/10000 Credits used</h2>
            </div>

            <Button className="mt-5 w-full bg-slate-800 text-white hover:bg-primary border border-primary">Upgrade to Premium</Button>
        </div>
    )
}