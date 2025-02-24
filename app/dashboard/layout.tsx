import DashboardHeader from '@/components/DashboardHeader';
import DashboardSideNav from '@/components/DashboardSideNav';
import { ReactNode } from 'react';
import { TotalUsageProvider } from '../(context)/totalUsageContext';
import { QuickUpdateUsageContextProvider } from '../(context)/QuickUpdateUsageContext';

interface LayoutProps {
    children: ReactNode;
}

export default function layout({ children }: LayoutProps){
    //wrap the dashboard layout with totalUsageContext provider since we only need in /dashboard/content/[template-slug]/page.tsx for checking limit of credits before generating content. and also in the dashboardSideNav to show the total usage of credits.

    return(
        <TotalUsageProvider>
            <QuickUpdateUsageContextProvider>
            <div>
                <div className='md:w-72 hidden md:block fixed'>
                    <DashboardSideNav/>
                </div>
                <div className='md:ml-72'>
                    <DashboardHeader/>
                    {children}
                </div>
            </div>
            </QuickUpdateUsageContextProvider>
        </TotalUsageProvider>
    )
}