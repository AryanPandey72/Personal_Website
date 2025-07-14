
const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Aryan Kumar
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white/80 hover:text-purple-400 transition-colors duration-300">Home</a>
              <a href="#about" className="text-white/80 hover:text-purple-400 transition-colors duration-300">About</a>
              <a href="#education" className="text-white/80 hover:text-purple-400 transition-colors duration-300">Education</a>
              <a href="#projects" className="text-white/80 hover:text-purple-400 transition-colors duration-300">Projects</a>
              <a href="#contact" className="text-white/80 hover:text-purple-400 transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-pink-800/20"></div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Aryan Kumar
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 font-light">
              AI & Machine Learning Enthusiast | Final Year Student
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Passionate about artificial intelligence, data analytics, and building innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </a>
              <a 
                href="https://www.linkedin.com/in/aryan-kumar-sql-python-data-analytics/" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-white/80 leading-relaxed">
                I'm a passionate final year student specializing in Artificial Intelligence and Machine Learning at Nitte Meenakshi Institute of Technology, Bangalore. My journey in tech is driven by curiosity and the desire to solve real-world problems using cutting-edge technology.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                With expertise in SQL, Python, and data analytics, I enjoy working on projects that combine theoretical knowledge with practical applications. I'm always eager to learn new technologies and contribute to innovative solutions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Skills & Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Python</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/80">SQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/80">Data Analytics</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white/80">Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-white/80">AI Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-white/80">Problem Solving</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Nitte Meenakshi Institute of Technology
                </h3>
                <p className="text-xl text-purple-400 mb-2 font-semibold">
                  Bachelor of Engineering
                </p>
                <p className="text-lg text-pink-400 mb-4 font-medium">
                  Artificial Intelligence and Machine Learning
                </p>
                <p className="text-white/60 mb-6">
                  Bangalore, Karnataka
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-400/30">
                  <span className="text-purple-400 font-semibold">Final Year Student</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project placeholders - you can customize these */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Project 1</h3>
              <p className="text-white/60 mb-4">Machine learning model for data analysis and prediction.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm">ML</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Analytics Project</h3>
              <p className="text-white/60 mb-4">Comprehensive data analysis using SQL and Python.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-sm">SQL</span>
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">Analytics</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-40 bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-4xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Deep Learning Model</h3>
              <p className="text-white/60 mb-4">Neural network implementation for complex problem solving.</p>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-green-600/20 text-green-400 rounded-full text-sm">AI</span>
                <span className="px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-sm">Deep Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, innovative projects, and connecting with fellow tech enthusiasts.
          </p>
          <div className="flex justify-center">
            <a 
              href="https://www.linkedin.com/in/aryan-kumar-sql-python-data-analytics/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Aryan Kumar. Crafted with passion for AI and Machine Learning.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
