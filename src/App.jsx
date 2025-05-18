import React, { useRef, useState, useEffect } from 'react';
import { FaCode, FaEnvelope, FaFileAlt, FaGitAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import MyPhoto from './assets/Myphoto.jpg'
import Currencyconverter from './assets/Currencyconverter.jpg'
import EmptyList from './assets/EmptyList.png'
import TaskList from './assets/TaskList.png'
import Portfolio from './assets/Portfolio.png'
import NumberPlate  from './assets/NumberPlate.png'
const baseUrl = import.meta.env.VITE_BASE_URL;



function App() {
  const [activeSection, setActiveSection] = useState('');
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['about', 'skills', 'projects'];

  const observer = useRef(null);

  useEffect(() => {
    const options = { threshold: Array.from({ length: 101 }, (_, i) => i / 100) };

    const currentObserver = new IntersectionObserver((entries) => {
      let maxRatio = 0;
      let visibleSectionId = '';

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          visibleSectionId = entry.target.id;
        }
      });

      if (visibleSectionId) {
        setActiveSection(visibleSectionId);
      }
    }, options);

    const elements = sections.map((id) => document.getElementById(id)).filter(Boolean);
    elements.forEach((el) => currentObserver.observe(el));

    return () => {
      elements.forEach((el) => currentObserver.unobserve(el));
      currentObserver.disconnect();
    };
  }, []);


  const scrollToSection = (section) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col md:flex-row m-0 p-0 w-full justify-center items-center bg-gradient-to-r from-indigo-600 to-pink-800">
  
      <div className="md:hidden fixed top-0 right-0 mt-4 mr-4 z-50">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 rounded-md bg-black/20 hover:bg-black/30"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gradient-to-r from-indigo-600 to-pink-800 z-40 flex flex-col justify-center items-center">
          <h1 className="text-white text-3xl font-bold mb-8">Divya Kandhakula</h1>
          <div className="flex flex-col items-center">
            {sections.map((section) => (
              <div 
                key={section} 
                onClick={() => scrollToSection(section)}
                className="text-white text-xl uppercase mb-6 hover:text-yellow-300 transition-colors duration-200"
              >
                {section}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-6 mt-10">
            <div className="flex bg-gray-600 rounded-full p-2">
              <a href="https://github.com/kdivya-19" target="_blank" rel="noopener noreferrer">
                <FaGithub className='w-6 h-6 text-green-300' />
              </a>
            </div>
            <div className="flex bg-gray-600 rounded-full p-2">
              <a href="https://www.linkedin.com/in/kandhakuladivya/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='w-6 h-6 text-blue-500' />
              </a>
            </div>
            <div className="flex bg-gray-600 rounded-full p-2">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FaFileAlt className='w-6 h-6 text-gray-300' />
              </a>
            </div>
            <div className="flex bg-gray-600 rounded-full p-2">
              <a href="mailto:divyakandhakula2003@gmail.com" target="_blank" rel="noopener noreferrer">
                <FaEnvelope className='w-6 h-6 text-red-200' />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Left Sidebar - Hidden on mobile */}
      <div className="hidden md:flex fixed top-0 left-0 mt-[9%] ml-16 h-screen w-1/2 flex-col text-gray-400 text-xl font-normal">
        <h1 className='underline decoration-yellow-400 text-white text-5xl font-bold '>Divya Kandhakula</h1>
        <div className="flex items-center mt-3">           
          <span className="text-gray-100 text-xl">Aspiring Software Engineer </span>
        </div>

        <div className="flex flex-col mt-24">
          {sections.map((section) => {
            const isActive = activeSection === section;
            const isHovered = hoveredSection === section && !isActive; 
            return (
              <div 
                key={section} 
                onClick={() => {
                  const el = document.getElementById(section);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredSection(section)} 
                onMouseLeave={() => setHoveredSection(null)} 
                className="roboto-mono-items flex items-center mt-1 mb-4 group w-1/3 cursor-pointer transition-all duration-200"
              >
                <div className={`border-t border-gray-300 mx-4 w-16 transition-all duration-200 ${
                  isActive ? 'border-2 w-24 border-white ' : isHovered ? 'border-2 w-24 border-white ' : ''
                }`}>
                </div>
                <div className={`tracking-widest text-sm text-gray-400 font-semibold transition-all duration-200 ${
                  isActive ? 'font-bold text-white ' : isHovered ? 'font-bold text-white' : ''
                }`}>
                  {section.toUpperCase()}
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-7 mt-20 ml-4">
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="https://github.com/kdivya-19" target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-8 h-8 text-green-300' />
            </a>
          </div>
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="https://www.linkedin.com/in/kandhakuladivya/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='w-8 h-8 text-blue-500' />
            </a>
          </div>
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt className='w-8 h-8 text-gray-300' />
            </a>
          </div>
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="mailto:divyakandhakula2003@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className='w-6 h-8 text-red-200' />
            </a>
          </div>
        </div>
      </div>

      {/* Right Content - Full width on mobile */}
      <div className="w-full md:w-3/5 md:ml-auto px-2 md:pl-20 text-white space-y-20 md:space-y-24 md:space-y-reverse ">
        {/* Mobile Header - Only visible on mobile */}
        <div className="md:hidden text-center mb-8 ">
          <h1 className='underline decoration-yellow-400 text-white text-3xl font-bold mb-2'>Divya Kandhakula</h1>
          <span className="text-gray-100 text-lg">Aspiring Software Engineer</span>
        </div>

        {/* About Section */}
        <section id="about" onMouseEnter={() => setHoveredSection('about')} onMouseLeave={() => setHoveredSection(null)} className="min-h-[80vh] md:h-screen flex flex-col items-center">
          <div className="flex flex-col justify-center items-center gap-9 p-1 md:mt-10 hover:bg-white/10 transition-all rounded-xl w-full">
            <h2 className="text-2xl font-bold mt-8 text-center">My Story</h2>
            <img src={MyPhoto} alt='Profile' className='h-40 w-28 items-center rounded-md' />
            <div className="flex justify-center px-4 items-center mb-5 text-white/75">
              <p className='text-base'>I am a Computer Science student with expertise in web technologies and a strong foundation in Python, JavaScript, Java, HTML, and CSS. I have experience developing applications such as a machine learning-powered vehicle number plate recognition system using Python and Flask, as well as responsive web applications using React, Tailwind CSS, and HTML.
                  I am passionate about problem-solving, building user-friendly and responsive applications, and contributing to dynamic teams. Eager to learn new technologies and looking for opportunities to grow and kickstart my career in software development.</p>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section id="skills" onMouseEnter={() => setHoveredSection('skills')} onMouseLeave={() => setHoveredSection(null)} className="min-h-[80vh] md:h-screen flex flex-col justify-center">
          <h2 className="md:hidden text-2xl font-bold mt-8 mb-5 text-center">Skills</h2>
          <div className="flex flex-col w-full justify-center items-center gap-4 pb-5 hover:bg-white/10 transition-all rounded-xl">
            <div className="flex flex-col justify-center items-center mt-2 gap-5">
              <h1 className='text-xl font-semibold mb-4'>Languages-Known</h1>
              <div className="flex gap-5 justify-center items-center">
                <div><i className="fa-brands fa-python text-5xl text-blue-500"></i></div>
                <div className="flex bg-white rounded-md"><i className='fa-brands fa-js text-yellow-500 text-5xl'></i></div>
                <div className="flex bg-white rounded-sm"><i className="fa-brands fa-java text-5xl text-red-600"></i></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-4 gap-5">
              <h1 className='text-xl font-semibold'>Front-end</h1>
              <div className="flex flex-wrap justify-center items-center gap-5">
                <div className='flex bg-white rounded-md'><i className='fa-brands fa-html5 text-orange-600 text-5xl'></i></div>
                <div className="flex bg-white rounded-md"><i className='fa-brands fa-css3-alt text-blue-500 text-5xl'></i></div>
                <div><i className='fa-brands fa-react text-blue-500 text-5xl'></i></div>
                <div className='flex flex-col justify-center items-center'><img
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="Tailwind CSS"
                  className="w-10 h-10"
                /><p className='text-xs text-gray-400'>Tailwind CSS</p></div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-4 gap-5">
              <h1 className='text-xl font-semibold'>Back-end</h1>
              <div className="flex justify-center items-center gap-5">
                <div className="flex rounded-md">
                  <SiMongodb className='text-green-500 text-5xl'/>
                </div>
                <div><i className='fa-brands fa-tailwind text-blue-500 text-5xl'></i></div>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-4 gap-5">
              <h1 className='text-xl font-semibold'>Tools</h1>
              <div className="flex justify-center items-center gap-5">
                <div className="flex">
                  <i className="fab fa-git text-[#F05032] text-5xl"></i>
                </div>
                <div className="flex">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="VS Code" width="36" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" onMouseEnter={() => setHoveredSection('projects')} onMouseLeave={() => setHoveredSection(null)} className="min-h-[80vh] md:h-[250vh] flex flex-col items-center space-y-4 md:space-y-14">
          <h2 className="md:hidden text-2xl font-bold mb-8 mt-5 text-center">Projects</h2>
          {/* Project 1 */}
          <div className="w-full ">
            <a href="https://kdivya-19.github.io/Currency-Converter/" target='_blank' rel="noopener noreferrer">
              <div className="flex flex-col md:flex-row w-full gap-3 p-2 hover:bg-white/10 group cursor-pointer hover:scale-105 hover:shadow-lg transition-all rounded-xl">
                <div className="w-full md:w-1/3 mb-4 order-2 md:order-1 md:mb-0 flex justify-center md:justify-start md:mt-4">
                  <img src={Currencyconverter} className='h-48 md:h-24 w-auto md:w-44 border-2 border-white rounded-lg'/>
                </div>
                <div className="flex flex-col w-full order-1 md:order-2 md:w-3/4 gap-2 justify-start top-0 mt-2 md:top-0 ">
                  <div className='text-2xl pt-1 text-white group-hover:text-green-400 font-semibold rounded-3xl text-center md:text-left'>
                    Currency Converter
                  </div>
                  <div className="flex flex-col pr-3 pb-2 justify-center text-white/75">
                    <p>I created this currency converter web app as a simple and user-friendly tool to help users convert values between different currencies in real time. The interface is clean and <span className='text-green-400 text-lg font-semibold'>Responsive</span>, designed with modern CSS styling.</p>
                    <p>This project helped me reinforce key frontend skills and taught me how to integrate third-party <span className='text-green-400 text-lg font-semibold'>API</span>s.</p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-3 items-center justify-center md:justify-start">
                    <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>HTML</p>
                    <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>CSS</p>
                    <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>Javascript</p>
                  </div>
                </div>
              </div>
            </a> 
          </div>

          {/* Project 2 */}
          <div className="w-full mb-11">
            <a href='https://kdivya-19.github.io/TodoList/' target="_blank" rel="noopener noreferrer">
              <div className="flex flex-col md:flex-row w-full gap-3 p-2 hover:bg-white/10 group cursor-pointer hover:scale-105 hover:shadow-lg transition-all rounded-xl">
                <div className="w-full md:w-1/3 order-2 md:order-1 mb:4 md:mb-0  md:mt-4 flex flex-col items-center md:items-start gap-2">
                  <img src={EmptyList} className='h-48 md:h-24 w-auto md:w-44 border-2 border-white rounded-lg'/>
                  <img src={TaskList} className='h-48 md:h-24 w-auto md:w-44 border-2 border-white rounded-lg'/>
                </div>
                <div className="flex flex-col w-full md:w-3/4 gap-2 order-1 md:order-2">
                  <div className='text-2xl pt-1 text-white group-hover:text-green-400 font-semibold rounded-3xl text-center md:text-left'>
                    ToDo-List
                  </div>
                  <div className="flex flex-col pr-3 pb-2 justify-center text-white/75">
                    <p>I developed this ToDo List web application to efficiently manage my daily tasks. This is designed with simplicity and functionality in mind, allowing users to <span className='text-green-400 text-lg font-semibold'>add</span>, <span className='text-green-400 text-lg font-semibold'>edit</span>, <span className='text-green-400 text-lg font-semibold'>delete</span>, and <span className='text-green-400 text-lg font-semibold'>save</span> tasks easily—all while ensuring data persistence using <span className='text-green-400 text-lg font-semibold'>localStorage</span>. I deployed this application using <span className='text-green-400 text-lg font-semibold'>GitHub Pages</span></p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-3 items-center justify-center md:justify-start">
                    <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>HTML</p>
                    <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>Tailwind CSS</p>
                    <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>Javascript</p>
                    <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>React</p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Project 3 */}
          <div className="w-full mb-11">
            <a href={baseUrl} target='_blank' rel="noopener noreferrer">
            <div className="flex flex-col md:flex-row w-full gap-3 p-2 group cursor-pointer hover:bg-white/10 hover:scale-105 hover:shadow-lg transition-all rounded-xl">
              <div className="w-full md:w-1/3 mb-4 order-2 md:order-1  md:mt-4 md:mb-0 flex justify-center md:justify-start">
                <img src={Portfolio} className='h-48 md:h-24 w-auto md:w-44 border-2 border-white rounded-lg'/>
              </div>
              <div className="flex flex-col w-full md:w-3/4 gap-2 order-1 md:order-2">
                <div className='text-2xl pt-1 text-white group-hover:text-green-400 font-semibold rounded-3xl text-center md:text-left'>
                  My-Portfolio
                </div>
                <div className="flex flex-col pr-3 pb-2 justify-center text-white/75">
                  <p>I developed this personal portfolio website to showcase my technical skills, projects and achievements in a visually appealing and organized manner. I deployed this website using <span className='text-green-400 text-lg font-semibold'>GitHub Pages</span>.</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-3 items-center justify-center md:justify-start">
                  <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>HTML</p>
                  <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>Tailwind CSS</p>
                  <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>Javascript</p>
                  <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>React</p>
                </div>
              </div>
            </div>
            </a>
          </div>

          {/* Project 4 */}
          <div className="w-full mb-11">
            <div className="flex flex-col md:flex-row w-full gap-3 p-2 hover:bg-white/10 transition-all rounded-xl">
              <div className="w-full order-2 md:order-1  md:mt-4 md:w-1/3 mb-4 md:mb-0 flex justify-center md:justify-start">
                <img src={NumberPlate} className='h-48 md:h-24 w-auto md:w-44 border-2 border-white rounded-lg'/>
              </div>
              <div className="flex flex-col w-full order-1 md:order-2 md:w-3/4 gap-2">
                <div className='text-2xl pt-1 text-white font-semibold rounded-3xl text-center md:text-left'>
                  Automatic Number Plate Recognition 
                </div>
                <div className="flex flex-col pr-3 pb-2 justify-center text-white/75">
                  <p> Thi is an ML-powered system for vehicle number plate recognition developed using Python and Flask. Implemented image processing using OpenCV and OCR functionality with Pytesseract. Integrated TensorFlow and Keras for deep learning-based character recognition. Designed a database system (SQL) to store and retrieve vehicle information</p>
                </div>
                <div className="flex flex-wrap gap-3 mb-3 items-center justify-center md:justify-start">
                  <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>Python</p>
                  <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>Flask</p>
                  <p className='text-base p-2 text-green-400 font-bold bg-white/10 rounded-2xl'>SQL</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
        {/* Mobile Social Links - Only visible on mobile */}
        <div className="md:hidden flex justify-center items-center gap-7 py-8">
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="https://github.com/kdivya-19" target="_blank" rel="noopener noreferrer">
              <FaGithub className='w-6 h-6 text-green-300' />
            </a>
          </div>
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="https://www.linkedin.com/in/kandhakuladivya/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className='w-6 h-6 text-blue-500' />
            </a>
          </div>
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <FaFileAlt className='w-6 h-6 text-gray-300' />
            </a>
          </div>
          <div className="flex bg-gray-600 rounded-full p-2">
            <a href="mailto:divyakandhakula2003@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className='w-6 h-6 text-red-200' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
