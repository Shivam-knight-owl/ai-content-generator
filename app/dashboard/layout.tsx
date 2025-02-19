import DashboardHeader from '@/components/DashboardHeader';
import DashboardSideNav from '@/components/DashboardSideNav';
import { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function layout({ children }: LayoutProps){
    return(
        <div>
            <div className='md:w-72 hidden md:block fixed'>
                <DashboardSideNav/>
            </div>
            <div className='md:ml-72'>
                <DashboardHeader/>
                {children}
            </div>
        </div>
    )
}