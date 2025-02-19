"use client"
import { SessionProvider } from "next-auth/react"
import { ReactNode } from "react";

//for using useSession hook we need to wrap our app with SessionProvider useSession hook is used in client components only so we need to wrap our app with SessionProvider and getServerSession fn which doesnt need to be wrapped with SessionProvider as it is used in server components only.

// put this provider in layout.tsx root and wrap all the components/children with this provider so that we can use useSession hook in client components.

interface ProviderProps{
    children:ReactNode;
}
const Provider=({children}:ProviderProps)=>{
    return <SessionProvider>{children}</SessionProvider>
}

export default Provider;