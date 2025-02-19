import Image from "next/image";
import { TEMPLATE } from "./DashboardTemplateList";

export default function TemplateCard(template:TEMPLATE){
    return(
        <div className="p-5 shadow-sm rounded-lg bg-white flex flex-col justify-center gap-3 border border-slate-700 cursor-pointer hover:shadow-xl hover:scale-105 transition-all">
            <Image src={template.icon} alt={template.name} width={50} height={50}/>
            <h2 className="font-medium text-lg">{template.name}</h2>
            <p className="text-slate-600 line-clamp-3">{template.desc}</p>
        </div>
    )
}