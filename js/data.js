// ─── Shared Data ────────────────────────────────────────────────────────────
// Declared with var so they are available globally for all component files.

var NAV_LINKS = ['Home', 'About', 'Skills', 'Tools', 'Education', 'Contact'];

// ── Icon helpers ──────────────────────────────────────────────────────────
var DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
// Simple Icons CDN — supports /color suffix for tinting SVGs
var SI = 'https://cdn.simpleicons.org/';

// Inline SVG data URI for SQL Server — no CDN dependency, always renders
var SQL_SERVER_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cellipse cx='12' cy='5' rx='10' ry='3.2' fill='%23CC2927'/%3E%3Cpath fill='%23a31f1f' d='M2 5v5.5c0 1.77 4.48 3.2 10 3.2s10-1.43 10-3.2V5c0 1.77-4.48 3.2-10 3.2S2 6.77 2 5z'/%3E%3Cpath fill='%23CC2927' d='M2 10.5v5.5c0 1.77 4.48 3.2 10 3.2s10-1.43 10-3.2v-5.5c0 1.77-4.48 3.2-10 3.2S2 12.27 2 10.5z'/%3E%3Cellipse cx='12' cy='19.2' rx='10' ry='3.2' fill='%23a31f1f'/%3E%3Ctext x='12' y='19.8' font-family='Arial' font-size='4.5' font-weight='bold' fill='white' text-anchor='middle'%3ESQL%3C/text%3E%3C/svg%3E";

var TOOLS = [
  { icon: DI + 'visualstudio/visualstudio-plain.svg',           name: 'Visual Studio',    category: 'IDE' },
  { icon: DI + 'vscode/vscode-original.svg',                    name: 'VS Code',           category: 'IDE' },
  // AI Tools
  { icon: SI + 'claude/d97706',                                  name: 'Claude',            category: 'AI Tools' },
  { icon: SI + 'githubcopilot/8b949e',                          name: 'GitHub Copilot',    category: 'AI Tools' },
  { icon: '⌨️',                                                  name: 'Cursor',            category: 'AI Tools' },
  { icon: '🔌',                                                  name: 'MCP Server',        category: 'AI Tools' },
  { icon: '🚀',                                                  name: 'Antigravity',       category: 'AI Tools' },
  // Version Control
  { icon: DI + 'git/git-original.svg',                          name: 'Git & GitHub',      category: 'Version Control' },
  // DevOps
  { icon: DI + 'docker/docker-original.svg',                    name: 'Docker',            category: 'DevOps' },
  // Cloud
  { icon: DI + 'azure/azure-original.svg',                      name: 'Azure',             category: 'Cloud' },
  // Database
  { icon: '🗄️',                                                  name: 'SSMS',              category: 'Database' },
  { icon: SQL_SERVER_ICON,                                        name: 'SQL Server',        category: 'Database' },
  { icon: DI + 'postgresql/postgresql-original.svg',            name: 'PostgreSQL',        category: 'Database' },
  { icon: DI + 'mysql/mysql-original.svg',                      name: 'MySQL',             category: 'Database' },
  // Other
  { icon: DI + 'postman/postman-original.svg',                  name: 'Postman',           category: 'API Testing' },
  { icon: DI + 'chrome/chrome-original.svg',                    name: 'Chrome DevTools',   category: 'Debugging' },
  { icon: DI + 'npm/npm-original-wordmark.svg',                 name: 'npm / NuGet',       category: 'Package Mgmt' },
  { icon: '🖥️',                                                  name: 'IIS',               category: 'Web Server' },
];

var SKILLS = [
  // Frontend
  { icon: DI + 'html5/html5-original.svg',             label: 'HTML / CSS / JS',      pct: 92, category: 'Frontend' },
  { icon: DI + 'angular/angular-original.svg',         label: 'Angular',              pct: 82, category: 'Frontend' },
  { icon: DI + 'react/react-original.svg',             label: 'React',                pct: 78, category: 'Frontend' },
  { icon: '🔮',                                         label: 'Three.js',             pct: 80, category: 'Frontend' },
  // Backend
  { icon: DI + 'dotnetcore/dotnetcore-original.svg',   label: '.NET / C#',            pct: 88, category: 'Backend' },
  { icon: DI + 'nodejs/nodejs-original.svg',           label: 'Node.js',              pct: 85, category: 'Backend' },
  { icon: DI + 'php/php-original.svg',                 label: 'PHP',                  pct: 75, category: 'Backend' },
  { icon: '🌐',                                         label: 'REST APIs',            pct: 90, category: 'Backend' },
  // Database
  { icon: DI + 'postgresql/postgresql-original.svg',   label: 'PostgreSQL',           pct: 85, category: 'Database' },
  { icon: DI + 'mysql/mysql-original.svg',             label: 'MySQL',                pct: 82, category: 'Database' },
  // DevOps & Cloud
  { icon: DI + 'azure/azure-original.svg',             label: 'Azure',                pct: 72, category: 'DevOps & Cloud' },
  { icon: DI + 'docker/docker-original.svg',           label: 'Docker',               pct: 68, category: 'DevOps & Cloud' },
  { icon: DI + 'git/git-original.svg',                 label: 'Git & Version Control',pct: 86, category: 'DevOps & Cloud' },
];

var EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Different Hair Pvt. Ltd · Chennai, Tamil Nadu, India',
    start: '2025-03',
    end: null,
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
