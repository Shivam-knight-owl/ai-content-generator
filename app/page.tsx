import LandingPage from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <div>Landing Page</div>
        <Link href="/dashboard" className={buttonVariants()}>Dashboard</Link>
      </div> */}
      <LandingPage />
    </>
  );
}
