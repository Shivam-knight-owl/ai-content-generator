import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import * as z from "zod";

//  Define a schema for input validation took from signupform.tsx in components/form
const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(50,"Username must be less than 50 characters"),
  email: z.string().min(1, "Email is required").email("Invalid Email"),
  password: z.string().min(1, "Password is required").min(8, "Password must be at least 8 characters long"),
});

export async function POST(req:NextRequest){
    try{
        const body = await req.json();

        //if input vaildation fails
        if(userSchema.safeParse(body).success===false){
            return NextResponse.json({message:"Invalid input",errors:userSchema.safeParse(body).error},{status:400});
        }

        const{email,username,password}=userSchema.parse(body);//parse the body to validate the input

        //check if email is already exists
        const existingUserByEmail = await prisma.user.findUnique({
            where:{
                email:email
            }
        });
        if(existingUserByEmail){
            return NextResponse.json({user:null,message:"User with this email already exists"},{status:409});
        }

        //if username already exists
        const existingUserByUsername = await prisma.user.findUnique({
            where:{
                username:username
            }
        });
        if(existingUserByUsername){
            return NextResponse.json({user:null,message:"User with this username already exists"},{status:409});
        }

        //create new user
        const hashedpassword=await bcrypt.hash(password,10);
        const newUser=await prisma.user.create({
            data:{
                email,
                username,
                password:hashedpassword
            },
            select:{
                password:false
            }
        });
        
        return NextResponse.json({newUser,message:"User created successfully"},{status:201});
    }
    catch(err){
        return NextResponse.json({message:'Something went wrong!',err},{status:500});
    }
}