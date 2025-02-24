"use client"
import QuickUpdateUsageContext from "@/app/(context)/QuickUpdateUsageContext";
import TotalUsageContext from "@/app/(context)/totalUsageContext";
// import { useParams } from "next/navigation";

import Templates from "@/app/(data)/Templates";
import { saveInDb } from "@/app/actions/saveInDb";
import { TEMPLATE } from "@/components/DashboardTemplateList";
import FormSection from "@/components/FormSection";
import GeneratedContentSection from "@/components/GeneratedContentSection";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { chatSession } from "@/utils/AiModel";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";

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

    //console.log(urlParams["template-slug"]);//get template-slug from url params

    //get selected template from Templates data by matching template-slug
    const selectedTemplate:TEMPLATE | undefined=Templates.find((template:TEMPLATE)=>template.slug===urlParams["template-slug"]);

    const [loading,setLoading]=useState<boolean>(false);

    const [aiOutput,setAiOutput]=useState<string>("");//state to store ai output and pass it to GeneratedContentSection component to display it.

    //check if the limit of totalUsage(based on word count) is reached if yes dont generate content and give msg that limit reached. we have totalUsage state in TotalUsageContext to keep track of totalUsage based on word count of each history item. we can use this state to check if the limit is reached or not.

    const {totalUsage,setTotalUsage}=useContext(TotalUsageContext);
    const {updateCreditUsage,setUpdateCreditUsage}=useContext(QuickUpdateUsageContext);

    // Gen Ai content function
    const genAiContent=async(formData:any)=>{

        //check if the limit of totalUsage(based on word count) is reached if yes dont generate content and give msg that limit reached.
        if(totalUsage>=10000){
            toast({
                title: "Credits Limit Reached!",
                description: "You have reached the limit of 10000 credits. Upgrade to premium to get more credits.",
                variant:"destructive",
                duration: 3000,
            })

            return;
        }

        setLoading(true);//set loading to true

        const selectedPrompt=selectedTemplate?.aiPrompt;//get aiPrompt from selected template

        const finalAIPrompt = `${selectedPrompt}, with the following details: ${Object.entries(formData)
            .map(([key, value]) => `${key}: ${value}`)
            .join(", ")}`;
          //combine form data and aiPrompt

        const result=await chatSession.sendMessage(finalAIPrompt);//send prompt to chatSession in utils/AiModel to get response

        //console.log(result.response.text());//get response from chatSession

        setAiOutput(result.response.text());//set aiOutput state with response

        setLoading(false);//set loading to false after getting response

        //call the server action to save the generated content to the db
        const savedAiOutput = await saveInDb(formData,selectedTemplate?.slug,selectedTemplate?.category,result?.response.text());
        //console.log("AI generated output saved in db:",savedAiOutput);

        //quick update the updateCreditUsage to instantly update the credits used in the dashboard sidenav

        setUpdateCreditUsage(Date.now());//update the updateCreditUsage state to update the credits used in the dashboard sidenav and now do useEffect in CreditsUsage compo whenever updateCreditUsage state changes to get the latest credits used.
    }

    //to save the ai output generated content to the db we are going make a server action and import it here and use inside genAiContent function to save the generated content to the db after getting response from chatSession.

   
    return(
        <div className="p-3">
            <Link href={"/dashboard"}>
                <Button className="ml-5"> 
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
            loading={loading}
            />
            {/* Gen content section */}
            <div className="col-span-2">
            <GeneratedContentSection aiOutput={aiOutput}/>
            </div>
        </div>
    </div>
    )
}