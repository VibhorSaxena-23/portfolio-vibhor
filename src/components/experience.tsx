"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-20 max-w-4xl mx-auto space-y-8"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Experience</h2>

      <div className="space-y-6 text-gray-300">
        {/* ITJOBXS */}
        <div>
          <h3 className="text-xl font-semibold">SDE Intern — ITJOBXS</h3>
          <p className="text-gray-400">July 2025 – Present | Remote</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Designed and developed a fully responsive web page for multiple company interview experiences.</li>
            <li>Enhanced backend user registration flow by designing validation logic in PHP & MySQL to prevent fake bot accounts, reducing spam registrations.</li>
            <li>Proposed and implemented solutions like temporary cleanup queries, domain whitelisting with hashmaps, and Google reCAPTCHA integration.</li>
            <li>Improved system reliability by debugging a critical issue causing rapid database growth, ensuring genuine user registrations.</li>
          </ul>
        </div>

        {/* SEMS Welfare Foundation */}
        <div>
          <h3 className="text-xl font-semibold">UI/UX & Web Development Intern — SEMS Welfare Foundation</h3>
          <p className="text-gray-400">May 2024 – July 2024 | Remote</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Optimized UI/UX and developed web pages using WordPress for improved performance.</li>
            <li>Built a mobile app with React Native to enhance user engagement and accessibility.</li>
            <li>Integrated APIs to boost app functionality.</li>
          </ul>
        </div>

        {/* AddLens Technologies */}
        <div>
          <h3 className="text-xl font-semibold">Machine Learning Intern — AddLens Technologies</h3>
          <p className="text-gray-400">May 2024 – July 2024 | Remote</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Contributed to OrdaLane, a mobile app enabling users to explore and shop online from nearby businesses with competitive pricing and quick delivery.</li>
            <li>Implemented machine learning models for personalized product recommendations and demand forecasting.</li>
            <li>Designed dashboards and reports to visualize shopping trends and customer behavior for data-driven decisions.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
