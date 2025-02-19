import Templates from "@/app/(data)/Templates";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE{
    name:string,
    desc:string,
    category:string,
    icon:string,
    aiPrompt:string,
    slug:string,
    form?:FORM[],
}
export interface FORM{
    label:string,
    field:string,
    name:string,
    required?:boolean,
}

export default function DashboardTemplateList({search}:{search:string}) {

    //filter templates based on search input
    const filteredTemplates=Templates.filter((template:TEMPLATE)=>template.name.toLowerCase().includes(search.toLowerCase()));

    return(
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-8">
            {
                filteredTemplates.length===0?
                <div className="col-span-full flex justify-center items-center min-h-[50vh]">
                    <div className="text-center text-lg font-semibold text-slate-600">
                        No templates found !
                    </div>
                </div>:
                filteredTemplates.map((template: TEMPLATE, index: number) => (
                    <TemplateCard {...template} key={index}/>
                ))
            }
        </div>
    )
}