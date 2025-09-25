"use client";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center px-6 sm:px-20 max-w-5xl mx-auto space-y-8"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>

      <div className="grid gap-6 text-gray-300">
        <div className="p-4 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">Facial Recognition Model</h3>
          <p className="text-gray-400">
            Built CNN, LBP, and HOG models; improved with KNN, SVM, and ANN on
            the LFW dataset for better accuracy in face recognition.
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">Khana Khoj</h3>
          <p className="text-gray-400">
            A recipe recommendation app developed using React Native +
            TensorFlow, providing healthy and personalized meal suggestions.
          </p>
        </div>

        <div className="p-4 border border-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">OlympIQ</h3>
          <p className="text-gray-400">
            Analytics platform analyzing socio-economic drivers of Olympic
            performance using React, D3.js, FastAPI, and Machine Learning.
          </p>
        </div>
      </div>
    </section>
  );
}
