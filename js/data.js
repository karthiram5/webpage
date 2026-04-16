// ─── Shared Data ────────────────────────────────────────────────────────────
// Declared with var so they are available globally for all component files.

var NAV_LINKS = ['Home', 'About', 'Skills', 'Tools', 'Education', 'Contact'];

var TOOLS = [
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg', name: 'Visual Studio', category: 'IDE' },
  { icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',        name: 'VS Code',        category: 'IDE' },
  { icon: '�️', name: 'Cursor',           category: 'AI Tools' },
  { icon: '🔌', name: 'MCP Server',       category: 'AI Tools' },
  { icon: '🚀', name: 'Antigravity',      category: 'AI Tools' },
  { icon: '🐙', name: 'Git & GitHub',     category: 'Version Control' },
  { icon: '🐋', name: 'Docker',           category: 'DevOps' },
  { icon: '☁️', name: 'Azure',            category: 'Cloud' },
  { icon: '🗄️', name: 'SSMS',            category: 'Database' },
  { icon: '🐘', name: 'PostgreSQL',       category: 'Database' },
  { icon: '🐬', name: 'MySQL',            category: 'Database' },
  { icon: '📬', name: 'Postman',          category: 'API Testing' },
  { icon: '🔍', name: 'Chrome DevTools',  category: 'Debugging' },
  { icon: '📦', name: 'npm / NuGet',      category: 'Package Mgmt' },
  { icon: '🖥️', name: 'IIS',             category: 'Web Server' },
];

var SKILLS = [
  // Frontend
  { icon: '🎨', label: 'HTML / CSS / JS',       pct: 92, category: 'Frontend' },
  { icon: '🔺', label: 'Three.js',              pct: 80, category: 'Frontend' },
  { icon: '⚛️', label: 'React',                 pct: 78, category: 'Frontend' },
  // Backend
  { icon: '💻', label: '.NET / C#',            pct: 88, category: 'Backend' },
  { icon: '🟩', label: 'Node.js',               pct: 85, category: 'Backend' },
  { icon: '🔗', label: 'REST APIs',             pct: 90, category: 'Backend' },
  // Database
  { icon: '🐘', label: 'PostgreSQL',            pct: 85, category: 'Database' },
  { icon: '🐬', label: 'MySQL',                 pct: 82, category: 'Database' },
  // DevOps & Cloud
  { icon: '☁️', label: 'Azure',                 pct: 72, category: 'DevOps & Cloud' },
  { icon: '🐋', label: 'Docker',                pct: 68, category: 'DevOps & Cloud' },
  { icon: '🐙', label: 'Git & Version Control', pct: 86, category: 'DevOps & Cloud' },
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
