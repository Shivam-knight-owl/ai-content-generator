import { ReactNode } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

interface GoogleSigninBtnProps {
    children: ReactNode;
}

export default function GoogleSigninBtn({ children }: GoogleSigninBtnProps) {
    const loginWithGoogle=()=>{
        console.log("Login with google");
        signIn("google",{callbackUrl:"http://localhost:3000/dashboard"});
    }

    return(
        // why use children here because we want 
        <Button onClick={loginWithGoogle} className='w-full mb-4 bg-white border border-slate-300 text-black text-md hover:bg-transparent hover:border-slate-500'>
            <img src="/googlelogo.png" alt="" width={16} height={16}/>
            {children}
        </Button> 
    )
}