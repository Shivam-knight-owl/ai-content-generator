import SignupForm from "@/components/form/SignupForm";
import { BrainCircuitIcon } from "lucide-react";

export default function Signup() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12">
            <div className="flex items-center mx-12 mb-6">
                <div className="mx-1"><BrainCircuitIcon className="size-10 text-[#6C42F5]" /></div>
                <h1 className="font-bold text-4xl ml-2">
                    Br<i className="text-[#6C42F5]">ai</i>nscribe
                </h1>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-6">Sign up</h2>
            <SignupForm />
        </div>
    );
}
