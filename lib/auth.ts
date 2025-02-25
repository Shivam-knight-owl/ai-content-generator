import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";

export const authOptions:NextAuthOptions={
    adapter:PrismaAdapter(prisma),//prisma adapter helps to connect next-auth with prisma and manage linking Oauth providers with prisma db existing users ,means if user already exists in db and tries to login with oauth provider, it will link the user with oauth provider.
    secret:process.env.NEXTAUTH_SECRET,//secret key for jwt token
    session:{
        strategy:"jwt",//use jwt for session management 
    },
    pages:{
        signIn:"/signin",//my custom signin page in app/signin/page.tsx
    },
    providers: [
        CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Email", type: "email", placeholder: "xyz@mail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            // Add logic here to look up the user from the credentials supplied
            if(!credentials?.email || !credentials?.password){
                return null;
            }
            //check user in db
            const existingUser=await prisma.user.findUnique({
                where:{
                    email:credentials?.email,
                }
            })
            if(!existingUser){
                return null;
            }

            //check password
            if(existingUser.password){
                const passwordMatch=await bcrypt.compare(credentials.password,existingUser.password);
                if(!passwordMatch){
                    return null;
                }
            }else{
                return null;//if password is not present in db as if user signed in with google or other oauth provider
            }
            //if user and password match
            console.log(existingUser);
            return {
                id:`${existingUser.id}`,//as our id is int in db we need to convert it to string
                email:existingUser.email,
                username:existingUser.username,
            }
          }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,// ! is used to tell typescript that these values are not null and will defo come dw
        })
      ],
    //   using callbacks 4 types of callbacks are available jwt,session,signIn,signOut in jwt callback we add username to token and so tht jwt passes it to the session and session callback adds username to session as by default only email,image,name are passed to session from jwt token 
      callbacks:{
        async jwt({token,user}){
            if(user){
                return{
                    ...token,
                    username:user.username,
                    userId:user.id,
                }
            }
            return token;
        },
        async session({session,token}){
            return{
                ...session,
                user:{
                    ...session.user,
                    username:token.username,
                    userId:token.userId,
                }
            }
      }
    }
}