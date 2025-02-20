import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User{
    username:string | null,

  }
  interface Session {
    user:User & {
        username:string,
        userId:string
    }
    token:{
        username:string,
        userId:string
    }
  }
}