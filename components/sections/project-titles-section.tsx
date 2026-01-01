'use client';

const projects = [
  { title: 'AI Doc Explorer' },
  { title: 'Students Info Dashboard' },
  { title: 'Form Design' },
  { title: 'Book API' },
  { title: 'File Base User API' },
  { title: 'Uki Coding School Biodata' },
  { title: 'My Daily Tasks' },
  { title: 'Tasty Bites Restaurant' },
  { title: 'Todo App' },
  { title: 'IPL Score' },
  { title: 'Taste of Jaffna Project' },
  { title: 'Math Exercise' },
  { title: 'Average Calculator' },
  { title: 'Number Sorting' },
  { title: 'Big Number Finder' },
  { title: 'Mass Converter' },
  { title: 'Mini Calculator' },
];

export function ProjectTitlesSection() {
  return (
    <section id="project-titles" className="scroll-mt-24 bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 animate-fade-in-up">
           Other Project Titles
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            View My GitHub for more details 
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200 text-gray-800 font-medium shadow-sm hover:shadow-md hover:border-blue-300 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up cursor-default"
              style={{ animationDelay: `${0.3 + index * 0.05}s` }}
            >
              {project.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
