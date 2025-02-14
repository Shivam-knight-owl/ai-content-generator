import SigninForm from "@/components/form/SigninForm";
import { BrainCircuitIcon } from "lucide-react";

export default function signin(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12" >
            <div className="flex items-center mx-12 mb-6">
                <div className="mx-1"><BrainCircuitIcon className="size-10 text-[#6C42F5]"/></div>
                <div className="font-bold text-4xl ml-2">Br<i className="text-[#6C42F5]">ai</i>nscribe
            </div>
            </div>
            <div className="text-2xl font-semibold text-center mb-6">Sign in</div>
            <SigninForm/>
        </div>
    )
}