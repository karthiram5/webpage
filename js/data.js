// ─── Shared Data ────────────────────────────────────────────────────────────
// Declared with var so they are available globally for all component files.

var NAV_LINKS = ['Home', 'About', 'Skills', 'Tools', 'Projects', 'Experience', 'Education', 'Contact'];

function calcYearsExp() {
  var start = new Date('2021-06-01');
  var now = new Date();
  var months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  return Math.floor(months / 12) + '+';
}

// ── Icon helpers ──────────────────────────────────────────────────────────
var DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
// Simple Icons CDN — supports /color suffix for tinting SVGs
var SI = 'https://cdn.simpleicons.org/';

// Inline SVG data URI for SQL Server — no CDN dependency, always renders
var SQL_SERVER_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cellipse cx='12' cy='5' rx='10' ry='3.2' fill='%23CC2927'/%3E%3Cpath fill='%23a31f1f' d='M2 5v5.5c0 1.77 4.48 3.2 10 3.2s10-1.43 10-3.2V5c0 1.77-4.48 3.2-10 3.2S2 6.77 2 5z'/%3E%3Cpath fill='%23CC2927' d='M2 10.5v5.5c0 1.77 4.48 3.2 10 3.2s10-1.43 10-3.2v-5.5c0 1.77-4.48 3.2-10 3.2S2 12.27 2 10.5z'/%3E%3Cellipse cx='12' cy='19.2' rx='10' ry='3.2' fill='%23a31f1f'/%3E%3Ctext x='12' y='19.8' font-family='Arial' font-size='4.5' font-weight='bold' fill='white' text-anchor='middle'%3ESQL%3C/text%3E%3C/svg%3E";

// XAMPP — orange rounded square with white X (matches official logo style)
var XAMPP_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Crect width='24' height='24' rx='5' fill='%23FB7A24'/%3E%3Cline x1='7' y1='7' x2='17' y2='17' stroke='white' stroke-width='3.2' stroke-linecap='round'/%3E%3Cline x1='17' y1='7' x2='7' y2='17' stroke='white' stroke-width='3.2' stroke-linecap='round'/%3E%3C/svg%3E";

// HeidiSQL — teal circle with bold white H (matches brand colour #4299B4)
var HEIDISQL_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ccircle cx='12' cy='12' r='11' fill='%234299B4'/%3E%3Crect x='7' y='7' width='2.5' height='10' rx='1' fill='white'/%3E%3Crect x='14.5' y='7' width='2.5' height='10' rx='1' fill='white'/%3E%3Crect x='7' y='10.75' width='10' height='2.5' rx='1' fill='white'/%3E%3C/svg%3E";

// ChatGPT — official icon from uxwing
var CHATGPT_ICON = "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/chatgpt-icon.png";

var TOOLS = [
  { icon: DI + 'visualstudio/visualstudio-plain.svg',           name: 'Visual Studio',    category: 'IDE' },
  { icon: DI + 'vscode/vscode-original.svg',                    name: 'VS Code',           category: 'IDE' },
  // AI Tools
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
  { icon: XAMPP_ICON,                                            name: 'XAMPP',             category: 'Local Dev' },
  { icon: HEIDISQL_ICON,                                         name: 'HeidiSQL',          category: 'Database' },
  // Other
  { icon: DI + 'postman/postman-original.svg',                  name: 'Postman',           category: 'API Testing' },
  { icon: DI + 'chrome/chrome-original.svg',                    name: 'Chrome DevTools',   category: 'Debugging' },
  { icon: DI + 'npm/npm-original-wordmark.svg',                 name: 'npm / NuGet',       category: 'Package Mgmt' },
  { icon: '🖥️',                                                  name: 'IIS',               category: 'Web Server' },
];

var SKILLS = [
  // Frontend
  { icon: DI + 'html5/html5-original.svg',             label: 'HTML / CSS / JS',      category: 'Frontend' },
  { icon: DI + 'angular/angular-original.svg',         label: 'Angular',              category: 'Frontend' },
  { icon: DI + 'react/react-original.svg',             label: 'React',                category: 'Frontend' },
  { icon: '🔮',                                         label: 'Three.js',             category: 'Frontend' },
  // Backend
  { icon: DI + 'dotnetcore/dotnetcore-original.svg',   label: '.NET / C#',            category: 'Backend' },
  { icon: DI + 'nodejs/nodejs-original.svg',           label: 'Node.js',              category: 'Backend' },
  { icon: DI + 'php/php-original.svg',                 label: 'PHP',                  category: 'Backend' },
  { icon: '🌐',                                         label: 'REST APIs',            category: 'Backend' },
  // Database
  { icon: DI + 'postgresql/postgresql-original.svg',   label: 'PostgreSQL',           category: 'Database' },
  { icon: DI + 'mysql/mysql-original.svg',             label: 'MySQL',                category: 'Database' },
  // DevOps & Cloud
  { icon: DI + 'azure/azure-original.svg',             label: 'Azure',                category: 'DevOps & Cloud' },
  { icon: DI + 'docker/docker-original.svg',           label: 'Docker',               category: 'DevOps & Cloud' },
  { icon: DI + 'git/git-original.svg',                 label: 'Git & Version Control',category: 'DevOps & Cloud' },
  // Development with AI
  { icon: SI + 'claude/d97706',                        label: 'Claude AI',            category: 'Development with AI' },
  { icon: SI + 'githubcopilot/8b949e',                 label: 'GitHub Copilot',       category: 'Development with AI' },
  { icon: CHATGPT_ICON,                                  label: 'ChatGPT',              category: 'Development with AI' },
  { icon: SI + 'deepseek/4d6bff',                      label: 'DeepSeek',             category: 'Development with AI' },
  { icon: SI + 'googlegemini/4285f4',                  label: 'Gemini AI',            category: 'Development with AI' },
  { icon: SI + 'perplexity/20b2aa',                    label: 'Perplexity AI',        category: 'Development with AI' },
  { icon: '🎨',                                         label: 'Gamma AI',             category: 'Development with AI' },
  { icon: '⌨️',                                         label: 'Claude CLI',           category: 'Development with AI' },
];

var PROJECTS = [
  {
    code: 'SSO',
    title: 'Single Sign-On',
    desc: 'Built a centralised authentication gateway enabling secure, one-login access across multiple internal applications - including the NPS (Net Promoter Score) and CSAT (Customer Satisfaction) platforms - eliminating repeated credential entry and enforcing role-based access control across all connected systems.',
    stack: ['Node.js', 'PostgreSQL', 'REST APIs', 'JWT', 'OAuth 2.0'],
    apps: [
      { code: 'NPS', name: 'Net Promoter Score',       desc: 'Tracks promoter, passive & detractor trends with actionable dashboards.' },
      { code: 'CSAT', name: 'Customer Satisfaction',   desc: 'Measures post-interaction satisfaction scores across customer touchpoints.' },
    ]
  },
  {
    code: 'PPS',
    title: 'Production Planning Software',
    desc: 'Developed planning and execution modules to improve production scheduling, material visibility, and delivery coordination across teams.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'GitHub', 'Docker', 'AWS'],
    terms: [
      { abbr: 'MO',                    label: 'Manufacturing Order',      def: 'Order managing production from raw materials to finished goods with inventory & cost tracking.' },
      { abbr: 'SO',                    label: 'Sales Order',              def: 'Customer order that drives production planning; MOs are linked directly in make-to-order flow.' },
      { abbr: 'Stock Order',           label: 'Stock Order',              def: 'MO built for future inventory (make-to-stock) rather than a specific customer order.' },
      { abbr: 'Pick List',             label: 'Pick List',                def: 'Document listing all materials, quantities, and storage locations needed for an MO.' },
      { abbr: 'Batch Tracking',        label: 'Batch / Lot Tracking',     def: 'Assigns lot numbers to materials and finished goods for quality control and traceability.' },
      { abbr: 'Expiry Tracking',       label: 'Expiry Date Tracking',     def: 'Monitors shelf life to prevent use of expired stock in production.' },
      { abbr: 'Available vs Booked',   label: 'Available vs. Booked',     def: 'Available = free inventory; Booked = reserved for a specific order or production run.' },
      { abbr: 'Expected Qty',          label: 'Expected Quantity',        def: 'Incoming inventory from open purchase orders or in-progress production runs.' },
      { abbr: 'Replenishment',         label: 'Replenishment',            def: 'Auto or manual reorder triggered when stock falls to a defined reorder point.' },
      { abbr: 'Landed Cost',           label: 'Landed Cost',              def: 'Total product cost including purchase price, shipping, tariffs, and import fees.' },
      { abbr: 'Tariff Mgmt',           label: 'Tariff Management',        def: 'Captures and distributes tariff costs within purchase orders as part of landed cost.' },
      { abbr: '3PL',                   label: 'Third-Party Logistics',    def: 'External logistics providers integrated into inventory and fulfilment workflows.' },
      { abbr: 'Shop Floor App',        label: 'Shop Floor App',           def: 'Mobile interface for workers to view tasks, scan barcodes, and update production status in real time.' },
      { abbr: 'Smart Inventory',       label: 'Smart Inventory',          def: 'Real-time cross-channel inventory system ensuring accurate stock levels across all locations.' },
      { abbr: 'E2E Traceability',      label: 'End-to-End Traceability',  def: 'Full product tracking from raw material procurement through production to final delivery.' },
    ]
  }
];

var EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Different Hair Pvt. Ltd · Chennai, Tamil Nadu, India',
    start: '2025-03',
    end: null,
    desc: 'Building and maintaining full-stack web applications using .NET, Node.js and PHP. Collaborating with cross-functional teams to design and deliver scalable, high-performance solutions aligned with business goals.',
  },
  {
    role: 'Software Engineer',
    company: 'RepuNEXT · Chennai, Tamil Nadu, India',
    start: '2021-06',
    end: '2025-03',
    desc: 'Worked as a Software Engineer contributing to the full development lifecycle — requirement analysis, system design, implementation and production support using .NET, Node.js, PHP, and modern front-end frameworks.',
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
