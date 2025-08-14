"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="font-sans bg-black text-white min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <header className="flex justify-center gap-10 p-6 border-b border-gray-700">
        <Link
          href="https://your-fitness-tracker-link.com"
          className="hover:underline hover:underline-offset-4"
        >
          Fitness Tracker
        </Link>
        <Link
          href="https://your-cp-profile-link.com"
          className="hover:underline hover:underline-offset-4"
        >
          CP Profile Manager
        </Link>
        <Link
          href="https://your-blogs-news-link.com"
          className="hover:underline hover:underline-offset-4"
        >
          Blogs & News
        </Link>
        <Link
          href="https://your-special-link.com"
          className="hover:underline hover:underline-offset-4"
        >
          Something Special
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <Image
          src="/next.svg"
          alt="Logo"
          width={180}
          height={38}
          priority
          className="mb-6"
        />
        <h1 className="text-3xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-gray-300 mt-4 max-w-xl">
          Explore my projects, achievements, and ideas. Click on the links above or chat with my AI bot to learn more about me.
        </p>
      </main>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-white text-black rounded-full p-4 shadow-lg hover:bg-gray-200 transition"
      >
        💬
      </button>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h2 className="font-bold">AI Resume Guide</h2>
            <button onClick={() => setIsChatOpen(false)}>✖</button>
          </div>
          <div className="flex-grow overflow-y-auto">
            {/* Replace with your AI bot integration */}
            <p>Hello! I’m your AI guide. Ask me anything about my resume!</p>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center p-4 border-t border-gray-700 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
