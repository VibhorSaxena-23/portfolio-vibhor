"use client";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-20 max-w-4xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>

      <p className="text-gray-300 text-center mb-6">
        Here are some of the core technologies and tools I’ve worked with:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-gray-300">
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          C++ / Java / Python
        </div>
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          Data Structures & Algorithms
        </div>
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          Backend Development
        </div>
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          Databases (MySQL, MongoDB)
        </div>
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          Operating Systems
        </div>
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          Cloud Computing
        </div>
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          REST APIs & Microservices
        </div>
        <div className="p-4 border border-gray-700 rounded-lg text-center">
          Competitive Programming
        </div>
      </div>
    </section>
  );
}
