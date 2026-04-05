import React, { useEffect, useRef } from 'react';
import './App.css';

// Import assets
import profileImg from './assets/m.jpeg';
import certImg from './assets/NC2.png';
import systemImg from './assets/system.png';
import awesomeImg from './assets/Awesome.png';
import techImg from './assets/tech.png';
import urbanImg from './assets/urba.png';
import datadynastyImg from './assets/Screenshot 2026-04-03 123711.png';
import javaVideo from './assets/java.mp4';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);
  
  const scrollToSection = (sectionId) => {
    const refs = { home: homeRef, about: aboutRef, skills: skillsRef, projects: projectsRef, contact: contactRef };
    refs[sectionId]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    event.target.reset();
  };
  
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-content">
          <ul className="nav-links">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a></li>
            <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contacts</a></li>
          </ul>
        </div>
      </nav>
      
      <section id="home" className="hero" ref={homeRef}>
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span className="highlight">Mary Rose E. Ya-un</span></h1>
            <p className="subtitle">Frontend Developer / UI/UX Designer</p>
            <button className="cta-button" onClick={scrollToProjects}>View My Works</button>
          </div>
          <div className="hero-image">
            <img src={profileImg} alt="Mary Rose Ya-un" />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="about" ref={aboutRef}>
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Hello! I'm Mary Rose E. Ya-un, a 2nd year BSIT student at Western Institute of Technology. 
              I have a strong interest in technology and design, 
              constantly working to build my expertise in web development and creative digital solutions.</p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>2</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills" className="skills" ref={skillsRef}>
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info"><span>React</span><span>60%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '60%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>JavaScript</span><span>40%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '40%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>HTML</span><span>50%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '50%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>CSS</span><span>50%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '50%' }}></div></div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info"><span>Node.js</span><span>30%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '30%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Express</span><span>20%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '20%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>PHP</span><span>70%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '70%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>MySQL</span><span>70%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '70%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>Firebase Firestore</span><span>10%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '10%' }}></div></div>
              </div>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-items">
              <div className="skill-item">
                <div className="skill-info"><span>Git</span><span>70%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '70%' }}></div></div>
              </div>
              <div className="skill-item">
                <div className="skill-info"><span>VS Code</span><span>80%</span></div>
                <div className="progress-bar"><div className="progress" style={{ width: '80%' }}></div></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="certificate-wrapper">
          <div className="cert-card">
            <div className="cert-info">
              <div className="cert-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.25 3.75 10.15 9 11.35C17.25 21.15 21 16.25 21 11V5l-9-4zm-1 14l-3-3 1.41-1.41L11 12.17l5.59-5.58L18 8l-7 7z"/>
                </svg>
              </div>
              <span>Certificate Acquired</span><br />
              <strong>National Certificate II — Computer Systems Servicing</strong><br />
              <small>TESDA - Technical Education and Skills Development Authority</small>
              <img src={certImg} alt="NC2 Certificate" />
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="projects" ref={projectsRef}>
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <img src={systemImg} alt="Course Registration System" />
              <div className="project-overlay">
                <div className="project-tech">
                  <span>HTML</span><span>CSS</span><span>Java</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Course Registration System</h3>
              <div className="project-links">
                <a href="https://github.com/UlyssesGtHb/ITCC_Project" className="project-link" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={awesomeImg} alt="Awesometodos" />
              <div className="project-overlay">
                <div className="project-tech">
                  <span>HTML</span><span>CSS</span><span>React</span><span>Express</span><span>JavaScript</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Awesometodos</h3>
              <div className="project-links">
                <a href="https://awesome-todos-app-a5bq.onrender.com/" className="project-link" target="_blank" rel="noreferrer">View Live</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={techImg} alt="Tech Haven" />
              <div className="project-overlay">
                <div className="project-tech">
                  <span>HTML</span><span>CSS</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Tech Haven</h3>
              <div className="project-links">
                <a href="https://yaunmeyos.github.io/yaun_prefi/" className="project-link" target="_blank" rel="noreferrer">View Live</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={urbanImg} alt="Urban Tastebuds" />
              <div className="project-overlay">
                <div className="project-tech">
                  <span>HTML</span><span>CSS</span><span>PHP</span><span>SQL</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Urban Tastebuds</h3>
              <div className="project-links">
                <a href="https://arcenojp.github.io/ITPE-Project-Online-Shop/" className="project-link" target="_blank" rel="noreferrer">View Live</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={datadynastyImg} alt="DataDynasty" />
              <div className="project-overlay">
                <div className="project-tech">
                  <span>HTML</span><span>CSS</span><span>PHP</span><span>SQL</span>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>DataDynasty</h3>
              <div className="project-links">
                <a href="https://github.com/yaunmeyos/DataDynasty" className="project-link" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image video-card">
              <video controls src={javaVideo}></video>
            </div>
            <div className="project-content">
              <h3>Course Registration System Video</h3>
              <p>I'm an editor and doing voice over for this video.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact" ref={contactRef}>
        <h2>Contacts</h2>
        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>yaunmaryrose28@gmail.com</p>
              <p>maryroseyaun@gmail.com</p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Iloilo City, Philippines</p>
            </div>
            <div className="contact-item">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://github.com/yaunmeyos" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://web.facebook.com/maryrose.eyaun" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.instagram.com/_meyos" target="_blank" rel="noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>© 2026 Mary Rose E. Ya-un - Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
