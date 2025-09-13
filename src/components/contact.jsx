"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-20 max-w-3xl mx-auto space-y-8"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>

      <p className="text-gray-300 text-center">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
      </p>

      <div className="flex flex-col items-center space-y-4 text-gray-300">
        <a
          href="mailto:vibhorsaxena000@gmail.com"
          className="underline hover:text-gray-400"
        >
          📧 Email: vibhorsaxena000@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/vibhor-saxena-96196b256/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-400"
        >
          🔗 LinkedIn: vibhor-saxena
        </a>
        <a
          href="https://github.com/VibhorSaxena-23"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-400"
        >
          💻 GitHub: VibhorSaxena-23
        </a>
        <a
          href="https://codeforces.com/profile/vibhorsaxena000"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-400"
        >
          ⚡ Codeforces: vibhorsaxena000
        </a>
        <a
          href="https://www.codechef.com/users/chaosconqueror"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-400"
        >
          🏆 CodeChef: chaosconqueror
        </a>
        <a
          href="https://leetcode.com/VibhorSaxena-23"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-400"
        >
          💡 LeetCode: VibhorSaxena-23
        </a>
        <p className="text-gray-300">📱 +91-7023492881</p>
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} | Vibhor Saxena
      </footer>
    </section>
  );
}
