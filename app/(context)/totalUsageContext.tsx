"use client"
import { createContext, useState } from "react";
  
  // Create context with default undefined
  const TotalUsageContext = createContext<any>(null);
  
  // Provider component
  export const TotalUsageProvider = ({ children }: { children: React.ReactNode }) => {
    const [totalUsage, setTotalUsage] = useState<number>(0);
  
    return (
        // this i was directly using in layout.tsx of dashboard but to use the useState hook there i needed to make it client compo but in nextjs 15 we cant make layout.tsx a client compo so i did this then used the TotalUsageProvider in layout.tsx
      <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>
        {children}
      </TotalUsageContext.Provider>
    );
  };

  export default TotalUsageContext;