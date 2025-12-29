export function EducationSection() {
  return (
    <section
      id="education"
      className="scroll-mt-24 bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Education</h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            An academic foundation developed through integrated education in artificial
            intelligence, full-stack development, UI/UX design, business fundamentals, and human
            resource management, with continuous learning aligned to industry demands
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Cards */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">Uki Technology of School</h4>
                <p className="text-blue-600 font-medium">
                  AI With Full-Stack Development and Next.js &amp; Entrepreneurial Skills
                </p>
                <p className="text-gray-600 text-sm">on Going</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  NoviTech R&amp;D Private Limited.
                </h4>
                <p className="text-blue-600 font-medium">Artificial Intelligence MasterClass</p>
                <p className="text-blue-600 font-medium">Full Stack Development</p>
                <p className="text-blue-600 font-medium">UI/UX Design</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">Yarl IT Hub</h4>
                <p className="text-blue-600 font-medium">Startup Essentials program</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  Balmoral institute of information technology
                </h4>
                <p className="text-blue-600 font-medium">Diploma in Microsoft office</p>
                <p className="text-gray-600 text-sm"></p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">
                  The Institute of Comparative Analysis for Scientific Environmental Development
                </h4>
                <p className="text-blue-600 font-medium">Diploma in Human Resource Management</p>
                <p className="text-gray-600 text-sm">on Going</p>
              </div>
            </div>
          </div>

          {/* Professional Development Card */}
          <div
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover-lift transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Certification</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">Current Role</h4>
                <p className="text-blue-600 font-medium">Web Developer</p>
                <p className="text-gray-600 text-sm">
                  AI-powered and full-stack web applications using MERN &amp; Next.js, including
                  real-world projects that combine Machine Learning, UI/UX, and SaaS-focused product
                  thinking
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900">Certifications</h4>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>MasterClass in Artificial Intelligence by NoviTech R&amp;D Private Limited</p>
                  <p>MasterClass in Full Stack Development by NoviTech R&amp;D Private Limited</p>
                  <p>UI/UX Design MasterClass by NoviTech R&amp;D Private Limited</p>
                  <p>Startup Essentials 2025 program by Uki and Yarl IT Hub.</p>
                  <p>Diploma in Microsoft office by Balmoral institute of information technology</p>
                  <p>
                    Certificate of Participation in Introduction To Artificial Intelligence And
                    Machine Learning by British Institute of Engineering &amp; Technology
                  </p>
                  <p>Skill camp on Leveraging Full Stack with AI, conducted by NoviTech R&amp;D</p>
                  <p>
                    2 Days Masterclass in Data Analytics, conducted by Pantech.AI &amp; Warriors
                    Way.
                  </p>
                  <p>
                    Certificate of Participation in Modern Project Management Trends and Globel
                    Opportunities for Project Management
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
