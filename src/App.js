import React from 'react';
import './App.css';

import profileImg from './assets/profile.webp';
import certImg from './assets/NC2.png';
import systemImg from './assets/system.png';
import awesomeImg from './assets/Awesome.png';
import techImg from './assets/tech.png';
import urbanImg from './assets/urba.png';
import datadynastyImg from './assets/Screenshot 2026-04-03 123711.png';
import javaVideo from './assets/java.mp4';

const EMAIL = 'yaunmaryrose28@gmail.com';
const RESUME = `${process.env.PUBLIC_URL}/Mary_Rose_Ya-un_Resume.pdf`;

const Icon = ({ d, size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const icons = {
  pin: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  file: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 13h6M9 17h6" /></>,
  folder: <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  award: <><circle cx="12" cy="9" r="6" /><path d="m8.5 14-1.5 7 5-3 5 3-1.5-7" /></>,
  code: <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />,
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" /></>,
  cap: <><path d="m2 9 10-5 10 5-10 5z" /><path d="M6 11v5c3 2 9 2 12 0v-5" /></>,
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  github: <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
  instagram: <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></>,
};

const stats = [
  { value: '5', label: 'Projects', icon: icons.folder },
  { value: 'NC II', label: 'TESDA Certified', icon: icons.award },
  { value: '3rd Year', label: 'BSIT Student', icon: icons.cap },
];

const projects = [
  {
    title: 'DataDynasty',
    subtitle: 'Esports Tournament Manager',
    image: datadynastyImg,
    tech: ['PHP', 'MySQL', 'PDO'],
    description: 'Create teams and players, schedule matches, record winners, and rank teams by wins and win rate. Built on a 6-table MySQL database with prepared statements.',
    links: [{ label: 'source code', href: 'https://github.com/yaunmeyos/DataDynasty' }],
  },
  {
    title: 'Awesome Todos',
    subtitle: 'Task Manager App',
    image: awesomeImg,
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'A React front end that creates and manages tasks through a REST API, deployed on Render.',
    links: [{ label: 'live site', href: 'https://awesome-todos-app-a5bq.onrender.com/' }],
  },
  {
    title: 'Urban Tastebuds',
    subtitle: 'Restaurant Online Ordering',
    image: urbanImg,
    tech: ['HTML', 'CSS', 'JavaScript'],
    description: 'Menu search and filters, shopping cart, table reservations, and login. Front-end developer on a 9-person team.',
    links: [
      { label: 'live site', href: 'https://arcenojp.github.io/ITPE-Project-Online-Shop/' },
      { label: 'source code', href: 'https://github.com/arcenojp/ITPE-Project-Online-Shop' },
    ],
  },
  {
    title: 'Course Registration System',
    subtitle: 'Java Desktop App',
    image: systemImg,
    tech: ['Java', 'Java Swing'],
    description: 'Students log in, register, and enroll in courses. I edited the demo video and recorded its voice-over.',
    links: [{ label: 'source code', href: 'https://github.com/UlyssesGtHb/ITCC_Project' }],
    video: javaVideo,
  },
  {
    title: 'Tech Haven',
    subtitle: 'Gadget Store Website',
    image: techImg,
    tech: ['HTML', 'CSS'],
    description: 'A multi-page store with a product catalog and prices, customer reviews, FAQs and contact details.',
    links: [
      { label: 'live site', href: 'https://yaunmeyos.github.io/yaun_prefi/' },
      { label: 'source code', href: 'https://github.com/yaunmeyos/yaun_prefi' },
    ],
  },
];

const techStack = [
  { group: 'Languages', items: ['JavaScript', 'PHP', 'Java', 'Python', 'HTML', 'CSS'] },
  { group: 'Frontend', items: ['React.js', 'Responsive Layouts', 'Vanilla JS UI'] },
  { group: 'Backend & Databases', items: ['Node.js', 'PHP (PDO)', 'MySQL', 'MongoDB', 'REST APIs'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'GitHub Pages', 'Render'] },
  { group: 'IT Support', items: ['Hardware Assembly', 'OS & Software Install', 'Network Setup', 'Troubleshooting'] },
  { group: 'Multimedia', items: ['Video Editing', 'Voice-over'] },
];

const experience = [
  {
    role: 'Student Web & App Developer',
    org: 'Western Institute of Technology · Iloilo City',
    date: '2024 – Present',
    current: true,
    points: [
      'Built websites, web apps and mobile apps for BSIT coursework, from UI design to coding, testing and deployment.',
      'Front-end developer on team projects of up to 9 members, coordinating with project managers, UI designers and backend developers through GitHub.',
      'Developed database-driven systems with PHP and MySQL, and full-stack apps with React and Node.js.',
    ],
  },
  { role: 'Web Developer', org: 'DataDynasty · Esports Tournament Manager', date: 'Oct 2025' },
  { role: 'Front-End Developer', org: 'Urban Tastebuds · team of 9', date: 'Apr 2025' },
  { role: 'Team Member', org: 'Course Registration System · Java Swing', date: 'Apr 2025' },
  { role: 'Web Developer', org: 'Tech Haven · Gadget Store Website', date: 'Mar 2025' },
];

const socials = [
  { label: 'Email', href: `mailto:${EMAIL}`, icon: icons.mail },
  { label: 'GitHub', href: 'https://github.com/yaunmeyos', icon: icons.github },
  { label: 'Facebook', href: 'https://web.facebook.com/maryrose.eyaun', icon: icons.facebook },
  { label: 'Instagram', href: 'https://www.instagram.com/_meyos', icon: icons.instagram },
];

function Section({ id, num, title, children }) {
  return (
    <section id={id} className="panel">
      <h2><span className="sec-num">{num}</span>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const subject = encodeURIComponent(`Portfolio message from ${form.name.value}`);
    const body = encodeURIComponent(`${form.message.value}\n\n— ${form.name.value} (${form.email.value})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-inner">
          <a href="#home" className="logo">Mary Rose Ya-un</a>
          <button
            type="button"
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon d={menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />} size={20} />
          </button>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#certificates">Certificates</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        <header id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">Hello, I'm</p>
            <h1>Mary Rose E. Ya-un</h1>
            <p className="role">Web Developer &amp; BSIT Student</p>
            <p className="tagline">Building full CRUD web apps, from database design to the interface.</p>
            <div className="hero-meta">
              <span><Icon d={icons.pin} size={14} /> Banate, Iloilo, Philippines</span>
              <span className="status"><span className="dot" /> Open to opportunities</span>
            </div>
            <a href={RESUME} target="_blank" rel="noreferrer" className="btn btn-primary"><Icon d={icons.file} /> View Resume</a>
          </div>
          <div className="avatar-wrap">
            <img src={profileImg} alt="Mary Rose Ya-un" className="avatar" />
          </div>
        </header>

        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-icon"><Icon d={s.icon} size={18} /></span>
              <div>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        <Section id="about" num="01" title="About">
          <p>
            I'm a third-year BS Information Technology student at Western Institute of Technology with
            hands-on experience building websites and systems in HTML, CSS, JavaScript, PHP, MySQL, React and Java.
            I've worked as a front-end developer on team projects and built full CRUD web apps with login and
            database design.
          </p>
          <p>
            Beyond code, I'm a TESDA NC II holder in Computer Systems Servicing, so I'm comfortable assembling
            hardware, installing systems and troubleshooting networks. I also edit videos and record voice-overs
            for project demos.
          </p>
        </Section>

        <Section id="projects" num="02" title="Projects">
          <div className="projects-grid">
            {projects.map((p) => (
              <article className="project" key={p.title}>
                <div className="project-media">
                  {p.video
                    ? <video controls poster={p.image} src={p.video} preload="none" />
                    : <img src={p.image} alt={p.title} loading="lazy" />}
                </div>
                <h3>{p.title}</h3>
                <p className="project-sub">{p.subtitle}</p>
                <p className="project-desc">{p.description}</p>
                <ul className="chips small">
                  {p.tech.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <div className="project-links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                      {l.label} <Icon d={icons.arrow} size={12} />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" num="03" title="Tech Stack">
          <div className="stack">
            {techStack.map(({ group, items }) => (
              <div className="stack-card" key={group}>
                <h3>{group}</h3>
                <ul className="chips">
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="certificates" num="04" title="Certificates">
          <div className="cert">
            <img src={certImg} alt="TESDA NC II Certificate" />
            <div>
              <h3>National Certificate II — Computer Systems Servicing</h3>
              <p className="muted">TESDA · Technical Education and Skills Development Authority</p>
            </div>
          </div>
        </Section>

        <Section id="experience" num="05" title="Experience">
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role + e.date} className={e.current ? 'is-current' : ''}>
                <span className="tl-dot" />
                <div className="tl-body">
                  <div className="tl-head">
                    <h3>{e.role}</h3>
                    <span className={`mono tl-date${e.current ? ' badge' : ''}`}>{e.current ? 'Current' : e.date}</span>
                  </div>
                  <p className="muted">{e.org}{e.current && ` · ${e.date}`}</p>
                  {e.points && (
                    <ul className="tl-points">
                      {e.points.map((pt) => <li key={pt}>{pt}</li>)}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="education" num="06" title="Education">
          <ol className="timeline">
            <li className="is-current">
              <span className="tl-dot" />
              <div className="tl-body">
                <div className="tl-head">
                  <h3>BS Information Technology · 3rd Year</h3>
                  <span className="mono tl-date badge">Current</span>
                </div>
                <p className="muted">Western Institute of Technology · 2024 – Present · Expected graduation 2028</p>
              </div>
            </li>
          </ol>
        </Section>

        <Section id="contact" num="07" title="Get in Touch">
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer">
                <Icon d={s.icon} /> {s.label}
              </a>
            ))}
            <a href="tel:+639702965244"><Icon d={icons.phone} /> +63 970 296 5244</a>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" type="text" placeholder="Name" required />
              <input name="email" type="email" placeholder="Email" required />
            </div>
            <textarea name="message" placeholder="Message" rows="4" required />
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </Section>

        <footer className="footer">© 2026 Mary Rose E. Ya-un. All rights reserved.</footer>
      </main>
    </div>
  );
}

export default App;
