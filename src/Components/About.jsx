import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-br from-white via-blue-50 to-emerald-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-8 border-b-4 border-blue-500 inline-block">
          About Me
        </h2>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          I'm <strong className="text-blue-600">Golam Kibria Hassan</strong>, a passionate{" "}
          <span className="text-emerald-600 font-semibold">Full Stack Web Developer</span> and{" "}
          <span className="text-indigo-600 font-semibold">Android App Developer (Java)</span> from Bangladesh.
        </p>

        {/* 🎓 Education */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">🎓 Education</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-2">
            <li>🏫 <strong>Annada Govt High School</strong></li>
            <li>🏛️ <strong>Govt Science College</strong></li>
            <li>🎓 <strong>University of Dhaka</strong> — CSE Department</li>
          </ul>
        </div>

        {/* 💼 Skills */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold text-green-600 mb-2">💼 Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3 text-sm sm:text-base font-medium mt-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">HTML</span>
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">CSS</span>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">JavaScript</span>
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full">React.js</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Redux</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">Express.js</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full">MySQL</span>
            <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full">Bootstrap</span>
            <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full">Firebase</span>
            <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full">Git & GitHub</span>
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full">Netlify</span>
            <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full">Vercel</span>
            <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full">Java (Android)</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">C</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">C++</span>
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full">Java</span>
          </div>
        </div>

    

        {/* 📄 Download CV */}
        <div className="text-center">
          <a
            href="/Golam_Kibria_Hassan_CV.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            📄 Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
