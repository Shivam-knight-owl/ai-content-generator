"use client"
import Image from "next/image"
import { TEMPLATE } from "./DashboardTemplateList"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"
import { LoaderIcon } from "lucide-react"

interface PROPS{
    selectedTemplate:TEMPLATE | undefined,
    userFormSubmit:any,
    loading:boolean
}

export default function FormSection({selectedTemplate,userFormSubmit,loading}:PROPS){
   
    const [formData,setFormData]=useState<any>();//form data state
    
    const handleInputChange=(e:any)=>{
        e.preventDefault();//prevent default form submission page reload

        const {name,value}=e.target;//get name and value from input field
        //console.log(name,value);

        setFormData({...formData,[name]:value});//update form data state why used ...formData because we dont want to lose previous data meaning we want to update the state not replace it. as we type letter by letter in input field we want to update the state with each letter typed. and so at last letter typed we get the whole value in the state.
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Form submitted with formData",formData);
        //now we need to pass the formData to the parent component which is /dashboard/content/[template-slug]/page.tsx where we will get the formdata from children(this compo) and run genAIcontent fn which will generate content based on the form data. to pass data to parent we need to pass a function as prop to this component and call that function with formdata as argument in this component. and in parent component, we will get the formdata and run genAIcontent fn. i.e using callback prop we can pass data from child to parent component.

        //pass formdata to parent component
        userFormSubmit(formData);
    }


    return(
        <div className="p-5 shadow-md border rounded-lg bg-white">
            <Image src={selectedTemplate?.icon || "/default-icon.png"} alt={selectedTemplate?.name || "default name"} width={50} height={50}/>
            <h2 className="text-xl mb-2 font-bold font-sans">{selectedTemplate?.name}</h2>
            <p className="text-primary font-medium font-serif text-sm">{selectedTemplate?.desc}</p>
            
            {/* form on basis of particular template */}
            <form className="mt-7" onSubmit={handleSubmit}>
                {selectedTemplate?.form?.map((item,idx)=>{
                    return(
                        <div key={idx} className="my-3 flex flex-col gap-2 mb-8">
                            <label className="font-semibold">{item.label}</label>

                            {item.field==="input"?
                            <Input name={item.name} required={item.required} onChange={handleInputChange}/>
                            :item.field==="textarea"?
                            <Textarea name={item.name} onChange={handleInputChange}/>:null

                        }
                        </div>
                    )
                })}

                <div className="flex justify-center items-center ">
                    <Button disabled={loading} type="submit" className="w-[72%] py-4">
                        {loading && <LoaderIcon className="animate-spin" size={24}/>}
                        Generate Content
                    </Button>
                </div>
            </form>
        </div>
    )
}