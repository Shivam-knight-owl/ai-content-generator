"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import GoogleSigninBtn from "../GoogleSigninBtn"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast, useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid Email"),
  password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters long"),
})

export default function SigninForm() {
    const router=useRouter();
    const {toast}=useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    });

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        //call signin function default next-auth signin function
        const signinData=await signIn("credentials",{
            email:values.email,
            password:values.password,
            redirect:false,//do not redirect to home page after signin
        });
        console.log(signinData);
        if(signinData?.error){
            console.log("Signin failed",signinData.error);
            toast({
                title:"Sign in failed!",
                description:"Oops! Something went wrong.",
                variant:"destructive",
            })
        }
        else{
            router.push("/dashboard");
        }
    }

    return (
        <div className="p-10 rounded-md shadow-md border w-full max-w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="xyz@email.com" {...field} className="focus:border-[#6C42F5] " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password" type="password" {...field} className="focus:border-[#6C42F5] " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full text-md">Sign in</Button>
                </form>

                <div className="my-4 mx-auto flex w-full items-center justify-evenly before:mr-4 before:block before:flex-grow before:h-px before:bg-slate-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-slate-400 text-sm text-slate-500 font-semibold">
                    OR
                </div>

                <GoogleSigninBtn>Sign in with Google</GoogleSigninBtn>

                <div className="text-center flex items-center justify-center space-x-2">
                    <div>Don't have an account?</div>
                    <div>
                        <Link href={"/signup"} className="text-[#6C42F5] hover:underline">Sign up</Link>
                    </div>
                </div>
            </Form>
        </div>
    )
}
