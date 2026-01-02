'use client';

import Image from 'next/image';
import { EducationSection } from '@/components/sections/education-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ProjectTitlesSection } from '@/components/sections/project-titles-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        {/* Hero Section - Clean & Minimalist */}
        <section id="me" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Photo - Subtle & Clean */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full border-4 border-blue-200 overflow-hidden shadow-lg">
                    <Image
                      src="/profile-image/profile.jpeg"
                      alt="Ramsan Profile Photo"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover object-top"
                      style={{ objectPosition: 'center 45%' }}
                    />
                  </div>
                  {/* Status indicator */}
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-teal-500 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Hero Content - Clean Typography */}
              <div className="text-center lg:text-left space-y-6">
                {/* Name */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Thaventhiran Ramsan
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl sm:text-2xl font-medium text-gray-600">
                  AI & Full Stack Developer
                </h2>

                {/* About Me */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gray-800"> About Me</h3>
                  <p className="text-base text-gray-600 leading-relaxed max-w-5xl">
I build intelligent and scalable web applications using the MERN stack and Next.js, focusing on practical solutions for real-world challenges. My work clean UI/UX design, and SaaS-oriented thinking to create user-friendly and efficient products.

I am interested in collaborating on AI-driven systems, full stack platforms, SaaS applications, startup MVPs, and innovative digital products that use modern web and AI technologies. I enjoy transforming ideas into functional applications that can grow into real products.

I am continuously developing my skills in full stack development, AI and machine learning fundamentals, UI/UX principles, SaaS architecture, entrepreneurship,HRM and modern productivity workflows. 

                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section with subtle background */}
        <div className="relative z-10">
          <EducationSection />
        </div>

        {/* Projects Section with gradient background */}
        <div className="relative z-10 bg-gradient-to-r from-gray-50 to-blue-50">
          <ProjectsSection />
        </div>

        {/* Project Titles Section */}
        <div className="relative z-10">
          <ProjectTitlesSection />
        </div>

        {/* Skills Section with gradient background */}
        <div className="relative z-10 bg-gradient-to-r from-blue-50 to-indigo-50">
          <SkillsSection />
        </div>

        {/* Contact Section with subtle background */}
        <div className="relative z-10">
          <ContactSection />
        </div>

        {/* Footer with enhanced styling */}
        <footer className="relative z-10 bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              {/* Left Column - Personal Info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-blue-400">Ramsan</h3>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  Passionate AI & Full Stack Developer dedicated to building innovative solutions with a curious mind and a drive for learning.
                </p>
              </div>

              {/* Middle Column - Quick Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li><a href="#me" className="hover:text-blue-400 transition-colors">About Me</a></li>
                  <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
                  <li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
                  <li><a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a></li>
                  <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Right Column - Connect */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">Connect</h4>
                <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                  I&apos;m open to collaboration, freelance work, or a friendly chat about AI and full‑stack projects. Reach me at ramsandota@gmail.com or find me on <a href="https://www.linkedin.com/in/ramsan001/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">LinkedIn</a> and <a href="https://github.com/Ramsan-code" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">GitHub</a>.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-700 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Thaventhiran Ramsan. All rights reserved.
              </p>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
