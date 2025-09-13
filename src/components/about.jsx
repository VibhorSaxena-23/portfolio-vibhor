"use client";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-20 max-w-4xl mx-auto space-y-6"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>

      <p className="text-gray-300">
        Hey, I am <b>Vibhor Saxena</b>! I am a B.Tech Computer Science undergraduate at{" "}
        <b>JK Lakshmipat University</b>, Jaipur, India. I was also selected as an exchange student at{" "}
        <b>IIT Jodhpur</b> and <b>IIT Kanpur</b>.
      </p>

      <p className="text-gray-300">
        I have interned at <b>ITJOBXS</b> as an SDE Intern, <b>SEMS Welfare Foundation</b> as a UI/UX & Web Development Intern, and <b>AddLens Technologies</b> as a Machine Learning Intern. During these roles, I worked on web development, backend validation logic, mobile apps, machine learning models, and dashboards for data-driven decisions.
      </p>

      <p className="text-gray-300">
        I am passionate about building scalable applications and solving challenging algorithmic problems. In competitive programming, I am an expert on Codeforces (1600+) and a 4-Star coder on CodeChef (Global Rank 90).
      </p>

      {/* Responsibilities */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Responsibilities</h3>
        <p className="text-gray-300">
          Worked as a competitive programming task creator for multiple competitions in informatics and programming with 200+ participants.  
          Also designed and implemented backend logic, ML models, and dashboards in various internships.
        </p>
      </div>

      {/* Coursework */}
      <div>
        <h3 className="text-2xl font-semibold mb-2">Computer Science Coursework</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-300">
          <li>Computer Networks</li>
          <li>Data Structures</li>
          <li>Design and Analysis of Algorithms</li>
          <li>Database Management System</li>
          <li>Operating Systems</li>
          <li>Object Oriented Programming</li>
          <li>Software Engineering</li>
          <li>Pattern Recognition nad Machine Learning</li>
          <li>Big Data Analysis</li>
        </ul>
      </div>
    </section>
  );
}
