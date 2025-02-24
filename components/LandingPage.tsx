"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {  ClipboardCopy, History, Search, Sparkles, LayoutTemplate, Pen } from "lucide-react";

const features = [
  {
    title: "AI Content Generation",
    desc: "Generate high-quality content instantly with our AI, tailored precisely to your inputs.",
    icon: <Sparkles size={36} />,
  },
  {
    title: "Rich Text Editor",
    desc: "Edit, format, and style your content seamlessly in a powerful WYSIWYG editor.",
    icon: <Pen size={36} />,
  },
  {
    title: "Copy to Clipboard",
    desc: "Easily copy your AI-generated content with just a click for quick sharing and usage.",
    icon: <ClipboardCopy size={36} />,
  },
  {
    title: "View History",
    desc: "Access and manage all your previously generated content anytime, anywhere.",
    icon: <History size={36} />,
  },
  {
    title: "17 Unique Templates",
    desc: "Choose from 17 professionally crafted templates designed for diverse content creation.",
    icon: <LayoutTemplate size={36} />,
  },
  {
    title: "Search Templates",
    desc: "Quickly find the perfect template from our collection to match your content needs.",
    icon: <Search size={36} />,
  },
];

export default function LandingPage() {
  return (
    <main className="bg-[#121212] text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center py-16 md:py-24 px-4 sm:px-6 bg-white text-black">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Welcome to <span className="">Br<i className="text-primary">ai</i>nscribe</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg">
            Transform your ideas into compelling content with our AI-powered generator. Enjoy{" "}
            <span className="font-semibold text-primary">10,000 free credits</span> and explore{" "}
            <span className="font-semibold text-primary">17 unique templates</span> designed to boost your creativity.
          </p>
          <Link href="/dashboard">
            <Button className="bg-[#6C42F5] hover:bg-[#5A34D9] text-white text-base sm:text-lg px-6 py-3 sm:py-4 rounded-lg shadow-xl mt-8">
              ✨ Go to Dashboard
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-[#121212] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-white">Explore Our Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-[#1A1A1A] p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-[#6C42F5]/50 transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4 text-primary">{feature.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Templates Section */}
      <section className="py-16 sm:py-20 bg-white text-[#121212] px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Diverse Templates at Your Fingertips</h2>
          <p className="text-base sm:text-lg mb-8">
            Choose from <span className="text-[#6C42F5] font-semibold">17 versatile templates</span> designed for every
            content need, from social media posts to blogs and beyond.
          </p>
          <Link href="/dashboard">
            <Button className="px-6 py-3 sm:py-4 bg-[#6C42F5] text-white text-base sm:text-lg rounded-lg hover:bg-[#5a39d0] transition-colors duration-300">
              🚀 Explore Templates
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#121212] text-center py-6 text-gray-400 text-sm sm:text-base">
        © {new Date().getFullYear()} Br<i>ai</i>nscribe. All rights reserved.
      </footer>
    </main>
  );
}
