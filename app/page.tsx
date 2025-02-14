import { Navbar } from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <Navbar />
      <div>Landing Page</div>
    </div>
  );
}
