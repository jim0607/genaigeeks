import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import AuthButtons from "@/components/AuthButtons";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-green-600 text-white">
        <div className="text-2xl font-bold">GenAI Geeks</div>
        <div className="flex items-center gap-2 w-1/3">
          <Input placeholder="Search articles, questions, models..." className="rounded-md px-3 py-2" />
          <Button variant="secondary" className="bg-green-700 hover:bg-green-800">
            <Search size={16} />
          </Button>
        </div>
        <div className="flex gap-4">
          <AuthButtons />
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-3xl font-semibold mb-4">Hello, What Do You Want To Learn?</h1>
        <div className="max-w-xl mx-auto flex gap-2">
          <Input placeholder="Search Python, LLM, Diffusion models..." className="rounded-md px-4 py-3" />
          <Button className="bg-green-600 hover:bg-green-700 text-white px-4">Search</Button>
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-green-700">
          <span className="cursor-pointer hover:underline">LoRA Fine-tuning</span>
          <span className="cursor-pointer hover:underline">Model Compression</span>
          <span className="cursor-pointer hover:underline">Diffusion Theory</span>
        </div>
        <div className="mt-8">
          <Link href="/articles">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Explore All Articles
            </button>
          </Link>
        </div>
      </section>

      {/* Explore Section */}
      <section className="px-6 py-10">
        <h2 className="text-xl font-semibold mb-6">Explore Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "AI Fundamentals & Theory", color: "bg-green-300" },
            { title: "Projects & Code", color: "bg-purple-400" },
            { title: "Large Language Models (LLM)", color: "bg-rose-300" },
            { title: "Stable Diffusion", color: "bg-indigo-300" },
            { title: "Prompt Engineering", color: "bg-yellow-300" },
            { title: "Machine / Deep Learning", color: "bg-blue-300" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${item.color} rounded-xl p-6 text-white shadow hover:shadow-lg transition`}
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <Button
                variant="outline"
                className="bg-white text-gray-900 border border-gray-200 hover:bg-gray-100 hover:text-black"
              >
                View more →
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-sm text-center py-6 bg-green-600 text-white">
        © 2025 GenAI Geeks · An AI-focused Tech Community
      </footer>
    </div>
  );
}
