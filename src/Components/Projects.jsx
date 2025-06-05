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
    <section id="projects" className="bg-gradient-to-br from-white to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-12 text-center border-b-4 border-blue-300 inline-block">
          My Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-white shadow-lg hover:shadow-xl transition duration-300 rounded-xl p-6 border border-blue-100"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full transition"
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
