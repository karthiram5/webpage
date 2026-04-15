// ─── Shared Data ────────────────────────────────────────────────────────────
// Declared with var so they are available globally for all component files.

var NAV_LINKS = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Contact'];

var SKILLS = [
  { icon: '💻', label: '.NET / C#',            pct: 88 },
  { icon: '🟩', label: 'Node.js',               pct: 85 },
  { icon: '🔺', label: 'Three.js',              pct: 80 },
  { icon: '🗄️', label: 'SQL / NoSQL',           pct: 82 },
  { icon: '🔗', label: 'REST APIs',             pct: 90 },
  { icon: '☁️', label: 'Cloud / DevOps',        pct: 70 },
  { icon: '🎨', label: 'HTML / CSS / JS',       pct: 92 },
  { icon: '🐙', label: 'Git & Version Control', pct: 86 },
];

var EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Different Hair Pvt. Ltd · Chennai, Tamil Nadu, India',
    start: '2025-03',
    end: null,          // null = Present
    desc: 'Building and maintaining full-stack web applications using .NET and Node.js. Collaborating with cross-functional teams to design and deliver scalable, high-performance solutions aligned with business goals.',
  },
  {
    role: 'Software Engineer',
    company: 'RepuNEXT · Chennai, Tamil Nadu, India',
    start: '2021-06',
    end: '2025-03',
    desc: 'Worked as a Software Engineer contributing to the full development lifecycle — requirement analysis, system design, implementation and production support using .NET, Node.js, and modern front-end frameworks.',
  },
];

var EDUCATION = [
  {
    icon: '🎓',
    degree: 'Bachelor of Engineering',
    institution: 'Pallavan College of Engineering',
    desc: 'Specialization in Electronics & Communication Engineering — building strong fundamentals in electronics, signal processing, and systems design.',
    badge: 'B.E – Electronics & Communication Engineering',
  },
  {
    icon: '🏛️',
    degree: 'Master of Business Administration',
    institution: 'Alagappa University',
    desc: 'Specialization in Systems Management — bridging technology and business strategy with a focus on information systems, project management, and organizational decision-making.',
    badge: 'MBA – Systems Management',
  },
];
