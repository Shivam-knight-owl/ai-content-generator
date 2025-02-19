"use client"
// import { useParams } from "next/navigation";

import Templates from "@/app/(data)/Templates";
import { TEMPLATE } from "@/components/DashboardTemplateList";
import FormSection from "@/components/FormSection";
import GeneratedContentSection from "@/components/GeneratedContentSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

//In the App Router (app/ directory), dynamic segments like [template-slug] automatically pass params as a prop to your page component. by doing this no need to use useParam hook to get params from the url as it is automatically passed as a prop to the page component. and we dont need to make it client component. //but at the end to get formData form child component we need to make it client component.

interface PROPS{
    params:{
        "template-slug":string
    }
}

export default function GenerateContent({params}:PROPS){
    //get template-slug from params 
    // const  params=useParams();

    // const resolvedParams=await params;//since to get formData from child component we need to make this component client component so we cant use await to get params from the url as async component is only in server components and now it is client component.

    const urlParams = useParams();//get params from the url 

    console.log(urlParams["template-slug"]);//get template-slug from url params

    //get selected template from Templates data by matching template-slug
    const selectedTemplate:TEMPLATE | undefined=Templates.find((template:TEMPLATE)=>template.slug===urlParams["template-slug"]);

    // Gen Ai content function
    const genAiContent=(formData:any)=>{

    }
   
    return(
        <div className="p-5">
            <Link href={"/dashboard"}>
                <Button className=""> 
                    <ArrowLeft size={24}/> 
                    Back to Dashboard
                </Button>
            </Link>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
            {/* Form section */}
            <FormSection 
            selectedTemplate={selectedTemplate} 
            // userFormSubmit={(v:any)=>console.log("inside parent compo",v)}//callback function to get form data from child component
            userFormSubmit={(v:any)=>genAiContent(v)}//callback function to get form data from child component and then passing form data to genAiContent function to generate content based on form data.
            />
            {/* Gen content section */}
            <div className="col-span-2">
            <GeneratedContentSection/>
            </div>
        </div>
    </div>
    )
}