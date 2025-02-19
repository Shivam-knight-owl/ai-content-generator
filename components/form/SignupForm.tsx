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
import { useRouter } from "next/navigation"
import { toast, useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  username: z.string().min(1, "Username is required").max(50,"Username must be less than 50 characters"),
  email: z.string().min(1, "Email is required").email("Invalid Email"),
  password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters long"),
  confirmPassword: z.string().min(1, "Password Confirmation is required"),
})
.refine((data)=>data.password===data.confirmPassword,{
    path:["confirmPassword"],
    message:"Password do not match"
})

export default function SignupForm() {
    const router=useRouter();
    const {toast}=useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          username:"",
          email: "",
          password: "",
          confirmPassword:""
        },
    });

    const onSubmit = async(values: z.infer<typeof formSchema>) => {
        const response=await fetch("/api/user",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                username:values.username,
                email:values.email,
                password:values.password
            })
        });
        if(response.ok){
            router.push("/signin");
        }else{
            console.log("Registration failed");
            toast({
                title:"Sign up failed!",
                description:"Oops! Something went wrong.",
                variant:"destructive",
            })
        }
    }

    return (
        <div className="p-10 rounded-md shadow-md border w-full max-w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="johndoe" {...field} className="focus:border-[#6C42F5] "/>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="xyz@email.com" {...field}  className="focus:border-[#6C42F5] "/>
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

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Re-Enter your password" type="password" {...field} className="focus:border-[#6C42F5] " />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full text-lg">Sign up</Button>
                </form>

                <div className="my-4 mx-auto flex w-full items-center justify-evenly before:mr-4 before:block before:flex-grow before:h-px before:bg-slate-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-slate-400 text-sm text-slate-500 font-semibold">
                    OR
                </div>

                <GoogleSigninBtn>Sign up with Google</GoogleSigninBtn>

                <div className="text-center flex items-center justify-center space-x-2">
                    <div>Already have an account?</div>
                    <div>
                        <Link href={"/signin"} className="text-[#6C42F5] hover:underline">Sign in</Link>
                    </div>
                </div>
            </Form>
        </div>
    )
}
