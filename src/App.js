import React from 'react';
import './App.css';

// Import assets
import profileImg from './assets/m.jpg';
import certImg from './assets/NC2.png';
import systemImg from './assets/system.png';
import awesomeImg from './assets/Awesome.png';
import techImg from './assets/tech.png';
import urbanImg from './assets/urba.png';
import datadynastyImg from './assets/Screenshot 2026-04-03 123711.png';
import javaVideo from './assets/java.mp4';

const skills = {
  Frontend: ['React', 'JavaScript', 'HTML', 'CSS'],
  Backend: ['Node.js', 'Express', 'PHP', 'MySQL', 'Firebase Firestore'],
  Tools: ['Git', 'VS Code'],
};

const projects = [
  {
    title: 'Course Registration System',
    image: systemImg,
    tech: ['HTML', 'CSS', 'Java'],
    link: 'https://github.com/UlyssesGtHb/ITCC_Project',
    linkLabel: 'GitHub',
  },
  {
    title: 'Awesometodos',
    image: awesomeImg,
    tech: ['React', 'Express', 'JavaScript'],
    link: 'https://awesome-todos-app-a5bq.onrender.com/',
    linkLabel: 'View Live',
  },
  {
    title: 'Tech Haven',
    image: techImg,
    tech: ['HTML', 'CSS'],
    link: 'https://yaunmeyos.github.io/yaun_prefi/',
    linkLabel: 'View Live',
  },
  {
    title: 'Urban Tastebuds',
    image: urbanImg,
    tech: ['HTML', 'CSS', 'PHP', 'SQL'],
    link: 'https://arcenojp.github.io/ITPE-Project-Online-Shop/',
    linkLabel: 'View Live',
  },
  {
    title: 'DataDynasty',
    image: datadynastyImg,
    tech: ['HTML', 'CSS', 'PHP', 'SQL'],
    link: 'https://github.com/yaunmeyos/DataDynasty',
    linkLabel: 'GitHub',
  },
];

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    event.target.reset();
  };

  return (
    <div className="App">
      <nav className="navbar">
        <a href="#home" className="logo">Mary Rose</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="hero">
        <img src={profileImg} alt="Mary Rose Ya-un" className="avatar" />
        <h1>Hi, I'm Mary Rose E. Ya-un</h1>
        <p className="subtitle">Frontend Developer / UI/UX Designer</p>
        <a href="#projects" className="button">View My Work</a>
      </header>

      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Mary Rose E. Ya-un, a 2nd year BSIT student at Western Institute of Technology.
            I have a strong interest in technology and design, constantly working to build my expertise
            in web development and creative digital solutions.
          </p>
          <div className="stats">
            <div><strong>2</strong><span>Years Experience</span></div>
            <div><strong>5</strong><span>Projects Completed</span></div>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-group" key={group}>
              <h3>{group}</h3>
              <ul className="tags">
                {items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}

          <div className="cert">
            <img src={certImg} alt="NC2 Certificate" />
            <div>
              <h3>National Certificate II — Computer Systems Servicing</h3>
              <p>TESDA - Technical Education and Skills Development Authority</p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <img src={project.image} alt={project.title} />
                <div className="card-body">
                  <h3>{project.title}</h3>
                  <ul className="tags small">
                    {project.tech.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} →</a>
                </div>
              </article>
            ))}
            <article className="card">
              <video controls src={javaVideo}></video>
              <div className="card-body">
                <h3>Course Registration System Video</h3>
                <p>I'm an editor and doing voice over for this video.</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <div className="contact">
            <div className="contact-info">
              <p><strong>Email</strong><br />yaunmaryrose28@gmail.com<br />maryroseyaun@gmail.com</p>
              <p><strong>Location</strong><br />Iloilo City, Philippines</p>
              <p className="social">
                <a href="https://github.com/yaunmeyos" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://web.facebook.com/maryrose.eyaun" target="_blank" rel="noreferrer">Facebook</a>
                <a href="https://www.instagram.com/_meyos" target="_blank" rel="noreferrer">Instagram</a>
              </p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea placeholder="Message" rows="5" required></textarea>
              <button type="submit" className="button">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 Mary Rose E. Ya-un</p>
      </footer>
    </div>
  );
}

export default App;
