"use client";

export default function Intro() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-5xl font-bold">Vibhor Saxena</h1>
      <p className="text-lg text-gray-400 max-w-2xl mt-4">
        B.Tech CSE @ JK Lakshmipat University | Exchange Student @ IIT Jodhpur & Kanpur
      </p>
      <div className="mt-6 flex space-x-6">
        <a
          href="mailto:vibhorsaxena000@gmail.com"
          className="underline hover:text-gray-300"
        >
          Email
        </a>
        <a
          href="https://www.linkedin.com/in/vibhor-saxena-96196b256/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300"
        >
          LinkedIn
        </a>
      </div>
    </main>
  );
}
