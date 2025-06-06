import React from "react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website built using React and Tailwind CSS. It showcases personal projects, skills, and contact info.",
    link: "https://your-portfolio-link.com",
  },
  {
    title: "E-commerce App",
    description: "A full-featured e-commerce web app with user authentication, product management, cart, and Stripe payment integration.",
    link: "https://your-ecommerce-app.com",
  },
  {
    title: "Blog Platform",
    description: "A full-stack blog application where users can read, write, and manage articles with Markdown support.",
    link: "https://your-blog-app.com",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-black py-24 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-14 text-center border-b-4 border-blue-300 inline-block pb-2">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 font-medium px-5 py-2.5 rounded-full transition duration-300"
              >
                🔗 View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
