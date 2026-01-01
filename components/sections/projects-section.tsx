'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'AI-Doc-Explorer',
    description:
      'AI Doc Explorer is a Django-based web application designed to simplify document comprehension, particularly for legal contracts and complex documents. The platform automatically processes uploaded PDF documents ',
    technologies: ['Python', 'Django', 'mariadb'],
    github: 'https://github.com/Ramsan-code/ai-doc-explorer.git',
  },
  {
    title: 'Book Locator ',
    description:
      'Introduction Book Locator is a web-based peer-to-peer book marketplace designed to connect readers within local communities. In an era where digital reading is prevalent, many still prefer physical books but struggle to find them affordably or locally. Book Locator addresses this by providing a platform for users to buy, sell, and discover books in their immediate vicinity, fostering a sustainable and community-driven reading culture',
    technologies: [
      'Next.js',
      'MongoDB',
      'Shadcn UI',
      'Node.js',
      'Express.js',
      'Typescript',
      'Vercel',
      'CORS',
      'radix-ui',
      'stripe',
      'cloudinary',
      'lucide-icons',
      'axios',
      'react-hook-form',
      'zod',
      'sonner',
      'bcryptjs',
      'dotenv',
      'jsonwebtoken',
      'multer',
      'nodemailer',
      'nodemon',
    ],
    github: 'https://github.com/Ramsan-code/Book-Locator.git',
  },

  {
    title: 'Exam Result Progress System',
    description: 'Exam Result Progress System using python',
    technologies: ['python'],
    github: 'https://github.com/Ramsan-code/final-assignment.git',
  },

  {
    title: 'Google Translater ',
    description:
      'A web application that translates text between different languages using the Google Translate API. Users can input text, select source and target languages, and receive accurate translations in real-time.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Google Translate API'],
    github: 'https://github.com/Ramsan-code/google_Translater.git',
  },
  {
    title: 'QR Code Generator ',
    description:
      'A simple and user-friendly QR code generator web application that allows users to create QR codes quickly for URLs, text, and other data',
    technologies: ['HTML', 'CSS', 'JavaScript', 'qrcode.min.js'],
    github: 'https://github.com/Ramsan-code/QR_Genarator.git',
  },
  {
    title: 'Theme Switcher ',
    description: 'I create theme-switcher for only using html,css and vanilla javascript',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ramsan-code/theme_swicher.git',
  },
];

export function ProjectsSection() {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const toggleProject = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  const truncateDescription = (description: string, maxLength: number = 120) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <section id="projects" className="scroll-mt-24 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            My Projects
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Showcasing my AI , Full Stack  & Next.js projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            return (
              <div
                key={project.title}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {/* Project Content */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Description with Read More */}
                  <div className="mb-3">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {expandedProjects.has(index)
                        ? project.description
                        : truncateDescription(project.description, 100)}
                    </p>
                    {project.description.length > 100 && (
                      <button
                        onClick={() => toggleProject(index)}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium mt-1 transition-colors"
                      >
                        {expandedProjects.has(index) ? 'Read Less' : 'Read More'}
                      </button>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200 hover:bg-blue-100 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-900 hover:bg-gray-800 text-white text-center py-2 px-3 rounded-lg transition-colors duration-200 hover-lift text-sm"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
