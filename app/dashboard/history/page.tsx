import Templates from "@/app/(data)/Templates";
import { fetchHistory, HISTORY } from "@/app/actions/fetchHistory"
import { TEMPLATE } from "@/components/DashboardTemplateList";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export default async function History(){

    const historyList=await fetchHistory();//get the history list from server action

    //helper fn to get the template name
    const getTemplateName=(slug:string)=>{
        const template:TEMPLATE | undefined = Templates.find((item)=>item.slug===slug);
        return template  || { name: 'Unknown', icon: '/default-icon.png' };  // Fallback for undefined
    }

    return(
        <div className="bg-white shadow-lg p-5 m-5 rounded-xl border">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-800 ">HISTORY</h2>
                <p className="text-primary font-semibold">Search all of your previously AI generated content</p>
            </div>

            {/* table header */}
            <div className="grid grid-cols-7 bg-gray-100 px-5 py-2 mt-5 font-semibold text-slate-700">
                <h2 className="col-span-2 ">TEMPLATE</h2>
                <h2 className="col-span-2">AI RESPONSE</h2>
                <h2>DATE</h2>
                <h2>WORDS</h2>
                <h2>COPY</h2>
            </div>

            {/* history table content */}

            {historyList?.length === 0 ? (
                <p className="text-center text-primary font-medium">No history found!</p>
            ):(
                historyList?.map((item:HISTORY,idx:number)=>{
                    return (
                        <div key={idx} className="grid grid-cols-7 bg-white border-b px-5 py-2 mt-5">

                           <div className="flex items-center col-span-2">
                             <div className="mr-2">
                                <Image src={getTemplateName(item?.templateSlug)?.icon || "default-icon.png"} alt="Template Icon" width={25} height={25}/>
                             </div>
                             <h2 className="font-semibold">{getTemplateName(item.templateSlug)?.name} </h2> 
                           </div>

                           <h2 className='col-span-2 line-clamp-3'>{item?.aiResponse ?? 'No Response'}</h2>

                           <h2>{item?.createdAt}</h2>

                           <h2>{item?.aiResponse?.length || 0}</h2>  {/* Handle null AI responses */}

                           <h2>
                            <Button variant='ghost' className='text-primary'>Copy</Button>
                           </h2>
                        </div>
                    )
                })
            )}
            
        </div>
    )
}