"use client"
import { createContext, useState } from "react";

const QuickUpdateUsageContext=createContext<any>(null);

//Provider Component
 export const QuickUpdateUsageContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [updateCreditUsage, setUpdateCreditUsage] = useState<any>();
  
    return (
        // this i was directly using in layout.tsx of dashboard but to use the useState hook there i needed to make it client compo but in nextjs 15 we cant make layout.tsx a client compo so i did this then used the TotalUsageProvider in layout.tsx
      <QuickUpdateUsageContext.Provider value={{ updateCreditUsage, setUpdateCreditUsage }}>
        {children}
      </QuickUpdateUsageContext.Provider>
    );
  };

export default QuickUpdateUsageContext;