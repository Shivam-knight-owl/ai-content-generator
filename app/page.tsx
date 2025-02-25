import { Navbar } from "@/components/Navbar"
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <div>Landing Page</div>
        {/* if user already loggedin, Link to dashboard page */}
        <Link href="/dashboard" className={buttonVariants()}>Dashboard</Link>
      </div>
    </>
  );
}
