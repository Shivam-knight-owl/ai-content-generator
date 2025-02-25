import { ReactNode } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface GoogleSigninBtnProps {
    children: ReactNode;
    redirectUrl:string;
}

export default function GoogleSigninBtn({ children,redirectUrl }: GoogleSigninBtnProps) {
    const loginWithGoogle=()=>{
        //console.log("Login with google",redirectUrl);
        signIn("google",{callbackUrl:redirectUrl});
    }

    return(
        // why use children here because we want to use this component as a wrapper 
        <Button onClick={loginWithGoogle} className='w-full mb-4 bg-white border border-slate-300 text-black text-md hover:bg-transparent hover:border-slate-500'>
            <Image src="/googlelogo.png" alt="" width={16} height={16}/>
            {children}
        </Button> 
    )
}