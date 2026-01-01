'use client';

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">Thank you For Visiting My Portfolio</h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            My Details & Social Media Links 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <div className="flex items-center gap-2">
                      <a
                        href="mailto:ramsandota@gmail.com"
                        className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                      >
                        ramsandota@gmail.com
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('ramsandota@gmail.com');
                        }}
                        className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                        title="Copy email address"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Mobile Number */}
                <div className="flex items-center hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h2.3c.9 0 1.7.5 2.1 1.3l1.1 2.4a1 1 0 01-.2 1L9.2 10.8a13.3 13.3 0 005 5l1.9-1.3a1 1 0 011 .1l2.4 1.1c.8.4 1.3 1.2 1.3 2.1V19a2 2 0 01-2 2A17 17 0 013 5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile Number</h4>
                    <div className="flex items-center gap-2">
                      <a
                        href="tel:+94740832001"
                        className="text-blue-600 hover:text-blue-700 transition-colors font-medium"
                        aria-label="Call +94 74 083 2001"
                      >
                        +94 74 083 2001
                      </a>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('+94 74 083 2001');
                        }}
                        className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
                        title="Copy phone number"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/ramsan001/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      linkedin.com/in/ramsan001/
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">GitHub</h4>
                    <a
                      href="https://github.com/Ramsan-code"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      github.com/Ramsan-code
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center hover-lift transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">Vavuniya, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Social Media Links</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/ThavamRamsan "
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ramban_o01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="https://x.com/RamsanDota"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* BlueSky */}
              <a
                href="https://bsky.app/profile/ramsandota01.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="BlueSky"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 10.8c-1.32-2.4-3.6-4.8-7.2-4.8C1.8 6 0 7.8 0 10.2c0 3 2.4 7.8 12 11.4 9.6-3.6 12-8.4 12-11.4 0-2.4-1.8-4.2-4.8-4.2-3.6 0-5.88 2.4-7.2 4.8z" />
                </svg>
              </a>
              {/* Medium */}
              <a
                href="https://medium.com/@ramsandota"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-900 hover:bg-black hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="Medium"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 11-6.77-6.82A6.77 6.77 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.38-2.88-3.38-6.42 1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42zm3.04 0c0 3.17-.31 5.75-.7 5.75s-.7-2.58-.7-5.75.31-5.75.7-5.75.7 2.58.7 5.75z" />
                </svg>
              </a>
              {/* Stack Overflow */}
              <a
                href="https://stackoverflow.com/users/32114535/ramsan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="Stack Overflow"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.731-4.285l7.776 7.163 1.426-1.585-7.767-7.153-1.435 1.575zm4.338-2.923l5.144 9.265 1.877-1.041-5.144-9.266-1.877 1.042z" />
                </svg>
              </a>
              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/ramsandota/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="Pinterest"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
              {/* Reddit */}
              <a
                href="https://www.reddit.com/user/Same-Scallion-8467/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="Reddit"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.056 1.597.012.145.021.29.021.437 0 2.345-2.543 4.252-5.68 4.252-3.137 0-5.68-1.907-5.68-4.252 0-.147.009-.292.021-.437a1.753 1.753 0 0 1-1.056-1.597c0-.968.786-1.754 1.754-1.754.463 0 .875.182 1.185.476 1.162-.806 2.753-1.347 4.513-1.438l.857-4.035 3.132.661c.006-.006.013-.013.019-.019zM9.03 13.024c-.631 0-1.145.513-1.145 1.144s.513 1.144 1.145 1.144 1.144-.513 1.144-1.144-.513-1.144-1.144-1.144zm5.94 0c-.631 0-1.145.513-1.145 1.144s.513 1.144 1.145 1.144 1.144-.513 1.144-1.144-.513-1.144-1.144-1.144zm-4.712 3.223c-.231 0-.42.188-.42.42 0 .51.416.923.924.923.508 0 .923-.413.923-.923 0-.232-.188-.42-.42-.42zm3.746 0c-.231 0-.42.188-.42.42 0 .51.416.923.924.923.508 0 .923-.413.923-.923 0-.232-.188-.42-.42-.42z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@RamsanDotA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                title="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
          
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

