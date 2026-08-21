/* ============================================================
   CISCO COMMUNITY VIT BHOPAL " RECRUITMENT WEBSITE
   Pangea-Style Design . Team Illustrations . Animated Hero
   ============================================================ */

'use strict';

// ============================================================
// SVG ICON LIBRARY
// ============================================================
const ICONS = {
  network:    `<svg viewBox="0 0 24 24"><circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><line x1="12" y1="8" x2="5" y2="16"/><line x1="12" y1="8" x2="19" y2="16"/></svg>`,
  palette:    `<svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/><circle cx="7.5" cy="11.5" r="1" fill="currentColor"/><circle cx="12" cy="7.5" r="1" fill="currentColor"/><circle cx="16.5" cy="11.5" r="1" fill="currentColor"/></svg>`,
  megaphone:  `<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8 a3 3 0 1 1-5.8-1.6"/></svg>`,
  calendar:   `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  flask:      `<svg viewBox="0 0 24 24"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55A2 2 0 0 0 6.5 23.5h11a2 2 0 0 0 1.78-2.95l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/></svg>`,
  trendingUp: `<svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  award:      `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  rocket:     `<svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  users:      `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  book:       `<svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  clipboard:  `<svg viewBox="0 0 24 24"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`,
  checkCircle:`<svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  target:     `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  mic:        `<svg viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>`,
  gift:       `<svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  shield:     `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  globe:      `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  zap:        `<svg viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  star:       `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  userCheck:  `<svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>`,
  briefcase:  `<svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  chevronLeft:`<svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight:`<svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg>`,
  x:          `<svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  plus:       `<svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  sun:        `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
  moon:       `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  help:       `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  instagram:  `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  linkedin:   `<svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  twitter:    `<svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
  github:     `<svg viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  discord:    `<svg viewBox="0 0 24 24"><path d="M18 6h0a14 14 0 0 0-3.5-1.1.1.1 0 0 0-.1.05 10 10 0 0 0-.44.91 13 13 0 0 0-3.92 0 10 10 0 0 0-.45-.91.1.1 0 0 0-.1-.05A14 14 0 0 0 6 6a.1.1 0 0 0-.05.04C3.8 9.4 3.2 12.7 3.5 16a.1.1 0 0 0 .04.07 14 14 0 0 0 4.22 2.1.1.1 0 0 0 .11-.04c.33-.45.62-.93.87-1.43a.1.1 0 0 0-.05-.14 9.1 9.1 0 0 1-1.31-.62.1.1 0 0 1 0-.17c.09-.07.18-.14.26-.21a.1.1 0 0 1 .1 0c2.76 1.26 5.75 1.26 8.47 0a.1.1 0 0 1 .1 0c.09.07.18.14.27.21a.1.1 0 0 1 0 .17 9 9 0 0 1-1.32.63.1.1 0 0 0-.05.13c.26.5.55.98.88 1.43a.1.1 0 0 0 .1.05 14 14 0 0 0 4.23-2.1.1.1 0 0 0 .04-.07c.42-3.8-.7-7.1-3.05-9.92a.1.1 0 0 0-.05-.04z"/><circle cx="9.5" cy="11.5" r="1.5" fill="currentColor"/><circle cx="14.5" cy="11.5" r="1.5" fill="currentColor"/></svg>`,
  mail:       `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone:      `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8a16 16 0 0 0 7.91 7.91l.44-.44a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  mapPin:     `<svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  info:       `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
  check:      `<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
};

function icon(name, cls = '') {
  const svg = ICONS[name] || ICONS['info'];
  return svg.replace('<svg ', `<svg class="icon-svg ${cls}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" `);
}

// ============================================================
// SITE CONFIG
// ============================================================
const CONFIG = {
  clubName:        'Cisco Community VIT Bhopal',
  email:           'cisco.vitbhopal@gmail.com',
  phone:           '+91 98765 43210',
  address:         'VIT Bhopal University, Kothri Kalan, Sehore, MP " 466114',
  instagram:       'https://www.instagram.com/ciscovitb',
  linkedin:        'https://www.linkedin.com/company/cisco-vit-bhopal/',
  twitter:         'https://twitter.com/CiscoVITB',
  github:          'https://github.com/cisco-vitbhopal',
  discord:         'https://discord.gg/ciscoVITB',
  applyPage:       'apply.html',
  recruitmentYear: '2026–27',
};

const NAV_LINKS = [
  { label: 'About',   href: '#about' },
  { label: 'Teams',   href: '#teams' },
  { label: 'Process', href: '#recruitment' },
  { label: 'FAQ',     href: '#faq' },
];

const SOCIAL_LINKS = [
  { name: 'Instagram', iconKey: 'instagram', url: CONFIG.instagram },
  { name: 'LinkedIn',  iconKey: 'linkedin',  url: CONFIG.linkedin  },
  { name: 'Twitter',   iconKey: 'twitter',   url: CONFIG.twitter   },
  { name: 'GitHub',    iconKey: 'github',    url: CONFIG.github    },
  { name: 'Discord',   iconKey: 'discord',   url: CONFIG.discord   },
];

// ============================================================
// TEAMS DATA — single source of truth
// ============================================================
const TEAMS_DATA = [
  {
    id:          'technical',
    name:        'Technical Team',
    iconKey:     'network',
    badgeLabel:  'Core Team',
    colorHex:    '#22c55e',    // Pangea green
    openings:    8,
    shortDesc:   'Build, develop and maintain the technical backbone of the community through software, networking and emerging technologies.',
    focusAreas:  ['Development', 'Networking & Cloud', 'Cybersecurity'],
    description: 'The engineering backbone of Cisco Community. We build full-stack web applications, architect cloud infrastructure, configure enterprise networking labs, and spearhead cybersecurity initiatives.',
    roles:       ['Full-Stack Developer', 'Network Engineer', 'Cloud & DevOps', 'Cybersecurity Analyst', 'IoT Developer'],
    perks:       ['Cisco NetAcad certifications', 'Hands-on networking labs', 'Industry mentor pairing'],
  },
  {
    id:          'research',
    name:        'Research Team',
    iconKey:     'flask',
    badgeLabel:  'R & I',
    colorHex:    '#06b6d4',    // Pangea cyan
    openings:    4,
    shortDesc:   'Explore emerging technologies through technical research, experimentation, papers and innovative projects.',
    focusAreas:  ['AI / ML', 'Technical Research', 'Emerging Technologies'],
    description: 'Push the boundaries of emerging technologies. Conduct cutting-edge AI/ML research, author research papers for national/international conferences, and build open-source innovations.',
    roles:       ['ML / AI Researcher', 'Data Analyst', 'Research Author', 'Open Source Contributor', 'Technical Writer'],
    perks:       ['Research paper co-authorship', 'Conference travel grants', 'Faculty mentorship'],
  },
  {
    id:          'design',
    name:        'Design Team',
    iconKey:     'palette',
    badgeLabel:  'Creative',
    colorHex:    '#6366f1',    // Pangea indigo
    openings:    5,
    shortDesc:   'Shape the visual identity of the community through thoughtful interfaces, graphics and creative experiences.',
    focusAreas:  ['UI / UX', 'Graphics & Branding', 'Visual Design'],
    description: 'Shape the visual identity of Cisco Community. From UI/UX prototypes and brand guidelines to 3D motion graphics, video productions, and event materials — we make things beautiful.',
    roles:       ['Graphic Designer', 'UI/UX Designer', 'Video Editor', 'Motion Designer', 'Brand Strategist'],
    perks:       ['Adobe Creative Cloud access', 'Portfolio development', 'Design competitions'],
  },
  {
    id:          'content',
    name:        'Content Team',
    iconKey:     'book',
    badgeLabel:  'Content',
    colorHex:    '#ec4899',    // Pangea pink
    openings:    5,
    shortDesc:   'Turn technical ideas into engaging blogs, social content, scripts and clear community documentation.',
    focusAreas:  ['Technical Writing', 'Social Content', 'Documentation'],
    description: 'The voice and narrative engine of Cisco Community. We write compelling technical blogs, document key community milestones, script event walkthroughs, and produce insightful publications.',
    roles:       ['Technical Writer', 'Copywriter', 'Blog Editor', 'Scriptwriter', 'Documentation Lead'],
    perks:       ['Published author credits', 'Editorial leadership', 'Storytelling & communication masterclasses'],
  },
  {
    id:          'pr',
    name:        'PR & Outreach Team',
    iconKey:     'megaphone',
    badgeLabel:  'Outreach',
    colorHex:    '#ef4444',    // Pangea red
    openings:    6,
    shortDesc:   'Build meaningful connections with companies, communities and students through partnerships and strategic outreach.',
    focusAreas:  ['Partnerships', 'Sponsorships', 'Outreach & Communications'],
    description: 'Amplify the Cisco Community voice across campus and beyond. Run public relations campaigns, build strategic industry sponsorships, manage media channels, and expand our partner network.',
    roles:       ['PR Specialist', 'Media & Press Manager', 'Outreach Coordinator', 'Sponsorship Lead', 'Community Ambassador'],
    perks:       ['Industry PR tools', 'Sponsorship negotiation experience', 'Campus-wide reach & networking'],
  },
  {
    id:          'hr',
    name:        'HR Team',
    iconKey:     'users',
    badgeLabel:  'People',
    colorHex:    '#f59e0b',    // Pangea amber
    openings:    4,
    shortDesc:   'Build a strong community culture through recruitment, onboarding, coordination and member engagement.',
    focusAreas:  ['Recruitment', 'Onboarding', 'Member Engagement'],
    description: 'Nurture talent and cultivate a thriving, inclusive community culture. Manage the recruitment pipeline, facilitate member onboarding, coordinate internal engagement, and track member growth.',
    roles:       ['Talent Acquisition Lead', 'People Operations Specialist', 'Member Engagement Lead', 'Internal Operations Manager'],
    perks:       ['People management experience', 'Organizational leadership', 'Direct recruitment leadership'],
  },
  {
    id:          'events',
    name:        'Event Management Team',
    iconKey:     'calendar',
    badgeLabel:  'Operations',
    colorHex:    '#8b5cf6',    // Pangea violet
    openings:    7,
    shortDesc:   'Plan and execute engaging technical events, workshops, hackathons and sessions from concept to completion.',
    focusAreas:  ['Event Planning', 'Workshops & Hackathons', 'Event Coordination'],
    description: 'We turn ideas into unforgettable experiences. Plan and execute flagship hackathons, technical bootcamps, CTFs, speaker sessions, and our annual summits from end to end.',
    roles:       ['Event Coordinator', 'Logistics Manager', 'Volunteer Lead', 'Stage & Tech Director', 'Operations Specialist'],
    perks:       ['End-to-end event management', 'Speaker network access', 'Leadership development'],
  },
];

// ============================================================
// ABOUT, TIMELINE, PERKS, FAQ
// ============================================================
const ABOUT_FEATURES = [
  { iconKey: 'award',  title: 'Official Cisco NetAcad Partner',  desc: 'Access world-class networking courses and globally recognised certifications - CCNA, DevNet, and more.' },
  { iconKey: 'rocket', title: 'Launch Your Career',              desc: 'Alumni placed at Cisco, TCS, Infosys, Google, and 50+ leading companies. Your journey starts here.' },
  { iconKey: 'users',  title: 'Inclusive Community',             desc: 'A tight-knit family of 30+ members across all branches and years - diverse, driven, and welcoming.' },
  { iconKey: 'book',   title: 'Research & Innovation Hub',       desc: 'Publish papers, attend national conferences, and work on real-world projects with tangible impact.' },
];

const TIMELINE_DATA = [
  { iconKey: 'clipboard',   title: 'Online Application',     desc: 'Fill out our multi-step application form. Share your details, motivation, and aspirations.',        date: '',                         active: true },
  { iconKey: 'checkCircle', title: 'Shortlisting — Round 1', desc: 'Applications reviewed by our committee. Shortlisted candidates notified within 5 working days.',  date: '24 August – 12 September', active: false },
  { iconKey: 'target',      title: 'Task Round',             desc: 'A practical assignment tailored to your team. We test real skills, not theoretical knowledge.',     date: '4 – 12 September',        active: false },
  { iconKey: 'mic',         title: 'Interview',              desc: 'A relaxed conversation with team leads. We want to know you, not just your resume.',                date: '17 September — ECA Time', active: false },
  { iconKey: 'gift',        title: 'Onboarding',             desc: 'Welcome aboard! Team introductions, first project assignment, and an onboarding session await.',    date: '',                         active: false },
];

const PERKS_DATA = [
  { iconKey: 'shield',    title: 'Free Certifications',  desc: 'Cisco NetAcad CCNA & DevNet prep at no cost for all active members.' },
  { iconKey: 'globe',     title: 'Global Network',       desc: 'Connect with Cisco chapters worldwide and build an international professional circle.' },
  { iconKey: 'zap',       title: 'Skill Development',    desc: 'Workshops, hackathons, and boot camps every semester - always learning.' },
  { iconKey: 'star',      title: 'Recognition & Awards', desc: 'Leadership letters, LinkedIn recommendations, and official certificates.' },
  { iconKey: 'userCheck', title: 'Industry Mentorship',  desc: 'Paired with mentors from Cisco, Amazon, Microsoft, and top startups.' },
  { iconKey: 'briefcase', title: 'Internship Referrals', desc: 'Exclusive early-access referrals to internship openings in our alumni network.' },
];

const FAQ_DATA = [
  { q: 'Who can apply to Cisco Community VIT Bhopal?',      a: 'Any enrolled student of VIT Bhopal University - all years and all branches. Passion and willingness to learn matter far more than prior experience.' },
  { q: 'How many teams can I apply to?',                    a: 'You may indicate up to 2 preferred teams in your application. The recruitment committee considers your skills and preferences when making placements.' },
  { q: 'What does the recruitment process look like?',      a: 'Five stages: Online Application, Shortlisting — Round 1 (24 August – 12 September), Task Round (4 – 12 September), Interview (17 September during ECA Time), and Onboarding.' },
  { q: 'Is there a GPA or branch requirement?',             a: 'No. Cisco Community has no minimum GPA or branch restriction. We actively welcome students from CSE, ECE, Mechanical, MBA, and all other disciplines.' },
  { q: 'How much time is expected per week?',               a: 'Typically 4-8 hours per week depending on your team and current projects. We are always flexible around exam periods.' },
  { q: 'Will I receive a certificate?',                     a: 'Yes. Active members receive official certificates, LinkedIn recommendation letters, and priority access to Cisco NetAcad workshops and certifications.' },
  { q: 'When do applications close?',                       a: 'Shortlisting — Round 1 closes 12 September. We recommend applying early - spots are limited and filled on a rolling basis.' },
  { q: 'I have no technical background. Can I still join?', a: 'Absolutely. Teams like PR & Outreach, Design, Event Management, HR, and Content require no technical background. Even the Technical and Research teams have entry-level roles with full mentoring support.' },
];

// ============================================================
// THEME
// ============================================================
let currentTheme = localStorage.getItem('ccvitb-theme') || 'dark';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ccvitb-theme', theme);
  currentTheme = theme;
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) btn.innerHTML = theme === 'dark' ? icon('sun') : icon('moon');
}

// ============================================================
// NAVBAR
// ============================================================
function renderNavbar() {
  const nav = document.getElementById('navbar');
  nav.innerHTML = `
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">
        <img src="logo.png" alt="Cisco Community VIT Bhopal"/>
        <div class="nav-logo-stack">
          <span class="nav-logo-name">Cisco Community</span>
          <span class="nav-logo-sub">VIT Bhopal</span>
        </div>
      </a>
      <nav class="nav-links" aria-label="Primary">
        ${NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
      </nav>
      <div class="nav-right">
        <button class="theme-toggle" id="theme-toggle-btn" aria-label="Toggle theme">
          ${icon(currentTheme === 'dark' ? 'sun' : 'moon')}
        </button>
        <a href="${CONFIG.applyPage}" class="btn btn-primary btn-sm nav-cta-btn">Apply Now</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="nav-mobile" id="nav-mobile" aria-hidden="true">
      <div class="nav-mobile-inner">
        ${NAV_LINKS.map(l => `<a href="${l.href}" class="nav-mob-link">${l.label}</a>`).join('')}
        <div class="nav-mob-cta">
          <a href="${CONFIG.applyPage}" class="btn btn-primary btn-md nav-mob-apply-btn">Apply Now &nbsp;&rarr;</a>
        </div>
      </div>
    </div>
  `;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));
  document.getElementById('theme-toggle-btn').addEventListener('click', () => applyTheme(currentTheme === 'dark' ? 'light' : 'dark'));

  const burger = document.getElementById('hamburger');
  const mob    = document.getElementById('nav-mobile');

  function toggleMenu(open) {
    const isOpen = typeof open === 'boolean' ? open : !mob.classList.contains('open');
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
    mob.classList.toggle('open', isOpen);
    mob.setAttribute('aria-hidden', String(!isOpen));
    if (isOpen) {
      document.body.classList.add('nav-open');
    } else {
      document.body.classList.remove('nav-open');
    }
  }

  burger.addEventListener('click', () => toggleMenu());
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
  document.addEventListener('click', e => {
    if (mob.classList.contains('open') && !nav.contains(e.target)) {
      toggleMenu(false);
    }
  });
}

// ============================================================
// HERO " Centered text + Pangea arc cards strip
// ============================================================
function renderHero() {
  const el = document.getElementById('hero');

  // Build simple portrait cards for hero arc strip (colored borders)
  const heroCards = TEAMS_DATA.map((t, i) => `
    <div class="hero-team-card" data-idx="${i}"
         style="border-color:${t.colorHex};--card-color:${t.colorHex}"
         role="button" tabindex="0" aria-label="View ${t.name}">
      <div class="htc-badge" style="color:${t.colorHex};border-color:${t.colorHex}55;background:${t.colorHex}15">
        ${t.badgeLabel.toUpperCase()}
      </div>
      <div class="htc-art" style="background:linear-gradient(170deg,${t.colorHex}12 0%,var(--bg-0) 80%)">
        <div class="htc-icon" style="color:${t.colorHex}">${icon(t.iconKey)}</div>
      </div>
      <div class="htc-footer">
        <div class="htc-name">${t.name}</div>
        <div class="htc-meta">${t.openings} roles open</div>
      </div>
    </div>
  `).join('');

  el.innerHTML = `
    <!-- Background -->
    <div class="hero-bg">
      <div class="hero-grid-lines"></div>
      <div class="hero-vignette"></div>
    </div>

    <!-- CENTER TEXT -->
    <div class="hero-center">
      <div class="hero-kicker hero-anim-1">
        <span class="hero-kicker-dot"></span>
        Recruitment ${CONFIG.recruitmentYear}&nbsp;&nbsp;&ndash;&nbsp;&nbsp;Applications Open
      </div>

      <h1 class="display-xl hero-main-heading hero-anim-2" style="text-align:center;max-width:860px;margin:0 auto 22px">
        Join the community<br/>
        that builds the <span class="hero-accent-word">future</span>
      </h1>

      <p class="body-lg hero-anim-3" style="text-align:center;color:var(--text-2);max-width:480px;margin:0 auto 38px;line-height:1.85">
        30+ members. 7 teams. Real certifications, real projects,
        real impact — at VIT Bhopal University.
      </p>

      <div class="hero-actions hero-anim-4" style="justify-content:center">
        <a href="${CONFIG.applyPage}" class="btn btn-primary btn-lg" style="border-radius:var(--r-full)">
          Apply Now &nbsp;&rarr;
        </a>
        <a href="#about" class="btn btn-ghost btn-lg">Learn More</a>
      </div>

      <!-- Stats pill row -->
      <div class="hero-stats-row hero-anim-5">
        <div class="hsr-item"><strong>30+</strong><span>Members</span></div>
        <div class="hsr-sep"></div>
        <div class="hsr-item"><strong>7</strong><span>Teams</span></div>
        <div class="hsr-sep"></div>
        <div class="hsr-item"><strong>2–3</strong><span>Events / Year</span></div>
        <div class="hsr-sep"></div>
        <div class="hsr-item"><strong>3+</strong><span>Years</span></div>
      </div>
    </div>

    <!-- PANGEA ARC CARDS — fan out on scroll -->
    <div class="hero-arc" id="hero-arc">
      <div class="hero-arc-label">
        <div class="hsl-line"></div>
        <span>Our Seven Teams — Click to Apply</span>
        <div class="hsl-line"></div>
      </div>
      <div class="hero-arc-track" id="hero-arc-track">
        ${heroCards}
      </div>
    </div>

    <div class="hero-fade-bottom"></div>
  `;

  // Card clicks -> modal
  document.querySelectorAll('.hero-team-card').forEach(card => {
    const idx = parseInt(card.dataset.idx);
    card.addEventListener('click', () => openTeamModal(TEAMS_DATA[idx].id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openTeamModal(TEAMS_DATA[idx].id); }
    });
  });
}

// ============================================================
// ABOUT
// ============================================================
function renderAbout() {
  const el = document.getElementById('about');
  el.innerHTML = `
    <div class="container">
      <div class="about-layout">
        <div class="aos">
          <div class="about-logo-card">
            <img src="logo.png" alt="Cisco Community VIT Bhopal Logo"/>
            <div class="about-stats" style="width:100%">
              <div class="about-stat-item"><span class="about-stat-n">30+</span><span class="about-stat-l">Members</span></div>
              <div class="about-stat-item"><span class="about-stat-n">2–3</span><span class="about-stat-l">Events / Year</span></div>
              <div class="about-stat-item"><span class="about-stat-n">20+</span><span class="about-stat-l">Partners</span></div>
              <div class="about-stat-item"><span class="about-stat-n">100+</span><span class="about-stat-l">Certs Issued</span></div>
            </div>
          </div>
        </div>
        <div class="aos aos-delay-1">
          <div class="eyebrow">Who We Are</div>
          <h2 class="display-lg" style="margin-bottom:16px">Where technology<br/>meets community</h2>
          <p class="body-md text-2" style="margin-bottom:32px">
            Cisco Community VIT Bhopal is the official Cisco Networking Academy chapter
            at VIT Bhopal University. Since 2021, we have been empowering students with
            industry-grade skills, certifications, and real-world experience across
            seven specialised teams.
          </p>
          <div class="about-features">
            ${ABOUT_FEATURES.map(f => `
              <div class="about-feature">
                <div class="about-feat-icon">${icon(f.iconKey)}</div>
                <div class="about-feat-body">
                  <strong>${f.title}</strong>
                  <p>${f.desc}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// TEAMS — Full-height Pangea portrait cards
// ============================================================
function renderTeams() {
  const el = document.getElementById('teams');
  el.innerHTML = `
    <div class="container">
      <div class="teams-header">
        <div class="aos">
          <div class="eyebrow">Our Teams</div>
          <h2 class="display-lg" style="margin-bottom:8px">Find your role</h2>
          <p class="body-md text-2" style="max-width:420px">
            ${TEAMS_DATA.reduce((a,t)=>a+t.openings,0)} open positions across seven specialised teams.
            Click any card to learn more and apply directly.
          </p>
        </div>
        <div class="scroll-controls">
          <button class="scroll-btn" id="teams-prev" aria-label="Previous">${icon('chevronLeft')}</button>
          <button class="scroll-btn" id="teams-next" aria-label="Next">${icon('chevronRight')}</button>
        </div>
      </div>
      <div class="teams-track-wrapper">
        <div class="teams-track" id="teams-track">
          ${TEAMS_DATA.map(t => buildTeamCard(t)).join('')}
        </div>
      </div>
    </div>
  `;

  initTeamsCarousel();
  document.querySelectorAll('.team-card').forEach(card => {
    card.addEventListener('click', () => openTeamModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openTeamModal(card.dataset.id); }
    });
  });
}

// ── Monotone text-only team card ──
function buildTeamCard(team) {
  const focusAreas = (team.focusAreas || team.roles.slice(0, 3));
  return `
    <div class="team-card" data-id="${team.id}" tabindex="0" role="button"
         aria-label="View ${team.name} team details">

      <!-- HEADER -->
      <div class="tc-header">
        <div class="tc-icon-wrap">${icon(team.iconKey)}</div>
        <div class="tc-header-pills">
          <span class="tc-badge-mono">${team.badgeLabel.toUpperCase()}</span>
          <span class="tc-open-mono">${team.openings} Open</span>
        </div>
      </div>

      <!-- BODY -->
      <div class="tc-body">
        <div class="tc-name">${team.name}</div>
        <p class="tc-short">${team.shortDesc}</p>
        <div class="tc-focus-label">Focus Areas</div>
        <div class="tc-roles-row">
          ${focusAreas.map(a => `<span class="tc-role-chip">${a}</span>`).join('')}
        </div>
      </div>

      <!-- FOOTER: opens modal, does NOT navigate to apply.html -->
      <div class="tc-footer-bar">
        <div class="tc-details-btn">
          <span>View Details</span>
          <span class="tc-details-icon">${icon('arrowRight')}</span>
        </div>
      </div>

    </div>
  `;
}

function initTeamsCarousel() {
  const trackWrapper = document.querySelector('.teams-track-wrapper');
  const track = document.getElementById('teams-track');
  const prev  = document.getElementById('teams-prev');
  const next  = document.getElementById('teams-next');
  if (!track || !prev || !next) return;

  let idx = 0;

  function getStep() {
    const card = track.querySelector('.team-card');
    if (!card) return 305;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.gap) || 15;
    return card.offsetWidth + gap;
  }

  const slide = () => {
    if (window.innerWidth <= 768) {
      track.style.transform = 'none';
      return;
    }
    const step = getStep();
    const wrapperW = trackWrapper ? trackWrapper.offsetWidth : track.parentElement.offsetWidth;
    const visibleCards = Math.max(1, Math.floor(wrapperW / step));
    const max = Math.max(0, TEAMS_DATA.length - visibleCards);
    idx = Math.max(0, Math.min(idx, max));
    track.style.transform = `translateX(-${idx * step}px)`;
  };

  next.addEventListener('click', () => {
    if (window.innerWidth <= 768 && trackWrapper) {
      trackWrapper.scrollBy({ left: getStep(), behavior: 'smooth' });
    } else {
      idx++;
      slide();
    }
  });

  prev.addEventListener('click', () => {
    if (window.innerWidth <= 768 && trackWrapper) {
      trackWrapper.scrollBy({ left: -getStep(), behavior: 'smooth' });
    } else {
      idx--;
      slide();
    }
  });

  window.addEventListener('resize', slide);
}

// ============================================================
// TEAM DETAIL MODAL
// ============================================================
function openTeamModal(teamId) {
  const team = TEAMS_DATA.find(t => t.id === teamId);
  if (!team) return;

  const modal = document.getElementById('team-modal');
  modal.querySelector('.modal-box').innerHTML = `
    <div class="modal-hd">
      <div class="modal-hd-title-group">
        <div class="tc-badge-mono" style="font-size:0.65rem;padding:5px 12px">${team.badgeLabel.toUpperCase()}</div>
        <div class="heading-md modal-team-title">${team.name}</div>
      </div>
      <button class="modal-close" id="modal-close-btn" aria-label="Close modal">${icon('x')}</button>
    </div>

    <div class="modal-bd">
      <p class="body-md text-2" style="margin-bottom:20px;line-height:1.75">${team.description}</p>

      <div style="margin-bottom:20px">
        <div class="label text-3" style="margin-bottom:10px">Open Roles</div>
        <div style="display:flex;flex-wrap:wrap;gap:7px">
          ${team.roles.map(r => `<span class="tc-role-chip">${r}</span>`).join('')}
        </div>
      </div>

      <div style="margin-bottom:20px">
        <div class="label text-3" style="margin-bottom:10px">Member Benefits</div>
        ${team.perks.map(p => `
          <div style="display:flex;align-items:center;gap:10px;font-size:0.84rem;color:var(--text-2);padding:6px 0;border-bottom:1px solid var(--border-1)">
            <div style="width:16px;height:16px;flex-shrink:0;color:var(--text-2)">${icon('check')}</div>
            <span>${p}</span>
          </div>
        `).join('')}
      </div>

      <div style="background:var(--surface-2);border:1px solid var(--border-1);border-radius:var(--r-md);padding:14px 16px;font-size:0.82rem;color:var(--text-2)">
        <strong style="color:var(--text-1);display:block;margin-bottom:3px">${team.openings} positions available</strong>
        Applications are reviewed holistically. Passion and potential matter more than experience.
      </div>
    </div>

    <div class="modal-ft">
      <button class="btn btn-ghost btn-sm modal-btn-close" id="modal-cancel-btn">Close</button>
      <a href="${CONFIG.applyPage}?team=${encodeURIComponent(team.name)}"
         class="btn btn-primary btn-sm modal-btn-apply">
        Apply for ${team.name} ${icon('arrowRight')}
      </a>
    </div>
  `;

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
    window.removeEventListener('keydown', onKey);
  };

  const onKey = (e) => {
    if (e.key === 'Escape') closeModal();
  };

  document.body.classList.add('modal-open');
  modal.classList.add('open');
  window.addEventListener('keydown', onKey);

  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
}

// ============================================================
// RECRUITMENT / PROCESS
// ============================================================
function renderRecruitment() {
  const el = document.getElementById('recruitment');
  el.innerHTML = `
    <div class="container">
      <div class="recruitment-layout">
        <div class="aos">
          <div class="eyebrow">The Process</div>
          <h2 class="display-lg" style="margin-bottom:8px">How it works</h2>
          <p class="body-md text-2" style="margin-bottom:40px;max-width:380px">
            A transparent, merit-based 5-stage recruitment process.
          </p>
          <div class="timeline">
            <div class="timeline-line"></div>
            ${TIMELINE_DATA.map(step => `
              <div class="tl-item">
                <div class="tl-dot ${step.active ? 'active' : ''}">${icon(step.iconKey)}</div>
                <div class="tl-content">
                  <strong>${step.title}</strong>
                  <p>${step.desc}</p>
                  ${step.date ? `<div class="tl-date">${step.date}</div>` : ''}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        <div class="aos aos-delay-1">
          <div class="eyebrow">Why Join</div>
          <h2 class="display-lg" style="margin-bottom:32px">What you gain</h2>
          <div class="perks-grid">
            ${PERKS_DATA.map(p => `
              <div class="perk-card">
                <div class="perk-icon">${icon(p.iconKey)}</div>
                <h4>${p.title}</h4>
                <p>${p.desc}</p>
              </div>
            `).join('')}
          </div>
          <div style="margin-top:28px">
            <a href="${CONFIG.applyPage}" class="btn-pangea">Apply Now &nbsp;&rarr;</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ============================================================
// CTA BANNER
// ============================================================
function renderCTABanner() {
  const el = document.getElementById('cta-container');
  if (!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="cta-banner aos">
        <div>
          <h3>Ready to get started?</h3>
          <p class="text-2">Shortlisting closes 12 September. Spots fill quickly.</p>
        </div>
        <a href="${CONFIG.applyPage}" class="btn-pangea">Apply Now &nbsp;&rarr;</a>
      </div>
    </div>
  `;
}

// ============================================================
// FAQ - Redesigned: numbered 2-column accordion, no layout-shift
// ============================================================
function renderFAQ() {
  const el = document.getElementById('faq');
  const half = Math.ceil(FAQ_DATA.length / 2);
  const col1 = FAQ_DATA.slice(0, half);
  const col2 = FAQ_DATA.slice(half);

  function buildItems(arr, offset) {
    return arr.map((item, i) => {
      const idx = i + offset;
      return `
        <div class="faq-item" id="faq-${idx}">
          <button class="faq-q" data-idx="${idx}" aria-expanded="false">
            <span class="faq-num">${String(idx + 1).padStart(2,'0')}</span>
            <span class="faq-q-text">${item.q}</span>
            <div class="faq-toggle" aria-hidden="true"></div>
          </button>
          <div class="faq-ans" id="faq-ans-${idx}" aria-hidden="true">
            <div class="faq-ans-inner">${item.a}</div>
          </div>
        </div>
      `;
    }).join('');
  }

  el.innerHTML = `
    <div class="container">
      <div class="aos" style="text-align:center;margin-bottom:52px">
        <div class="eyebrow" style="display:inline-flex">Frequently Asked</div>
        <h2 class="display-lg" style="margin-bottom:12px">Got questions?</h2>
        <p class="body-md text-2" style="max-width:480px;margin:0 auto">
          Everything you need to know before applying. Still unsure?
          <a href="mailto:${CONFIG.email}" style="color:var(--text-1);text-decoration:underline;text-underline-offset:3px">${CONFIG.email}</a>
        </p>
      </div>
      <div class="faq-two-col aos aos-delay-1">
        <div class="faq-col">${buildItems(col1, 0)}</div>
        <div class="faq-col">${buildItems(col2, half)}</div>
      </div>
    </div>
  `;

  el.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = btn.dataset.idx;
      const item = document.getElementById(`faq-${idx}`);
      const isOpen = item.classList.contains('open');

      // Close all in same column first to avoid layout jump from other column
      el.querySelectorAll('.faq-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          other.querySelector('.faq-ans').setAttribute('aria-hidden', 'true');
        }
      });

      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
      item.querySelector('.faq-ans').setAttribute('aria-hidden', String(isOpen));
    });
  });
}



// ============================================================
// FOOTER
// ============================================================
function renderFooter() {
  const el = document.getElementById('footer');
  el.innerHTML = `
    <div class="container">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="logo.png" alt="Cisco Community VIT Bhopal"/>
            <div>
              <span class="footer-logo-name">Cisco Community</span>
              <span class="footer-logo-sub">VIT Bhopal</span>
            </div>
          </div>
          <p class="footer-tagline">
            Building tomorrow's technology leaders"one connection at a time.
            Official Cisco Networking Academy chapter at VIT Bhopal University.
          </p>
          <div class="footer-socials">
            ${SOCIAL_LINKS.map(s => `
              <a href="${s.url}" class="social-btn" aria-label="${s.name}" target="_blank" rel="noopener noreferrer">${icon(s.iconKey)}</a>
            `).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h5>Navigation</h5>
          <div class="footer-links">
            <a href="#hero">Home</a>
            ${NAV_LINKS.map(l => `<a href="${l.href}">${l.label}</a>`).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h5>Our Teams</h5>
          <div class="footer-links">
            ${TEAMS_DATA.map(t => `<a href="#teams" class="footer-team-link" data-id="${t.id}">${t.name}</a>`).join('')}
          </div>
        </div>
        <div class="footer-col">
          <h5>Contact</h5>
          <div class="footer-contact-row">${icon('mail')}<a href="mailto:${CONFIG.email}">${CONFIG.email}</a></div>
          <div class="footer-contact-row">${icon('phone')}<span>${CONFIG.phone}</span></div>
          <div class="footer-contact-row">${icon('mapPin')}<span>${CONFIG.address}</span></div>
          <div style="margin-top:20px">
            <a href="${CONFIG.applyPage}" class="btn-pangea" style="font-size:0.82rem;padding:10px 18px">Apply Now &nbsp;&rarr;</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy"> ${new Date().getFullYear()} <strong>${CONFIG.clubName}</strong>. All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Code of Conduct</a>
        </div>
      </div>
    </div>
  `;
  el.querySelectorAll('.footer-team-link').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); openTeamModal(a.dataset.id); });
  });
}

// ============================================================
// FLOATING HELPER
// ============================================================
function renderMascot() {
  const wrap = document.createElement('div');
  wrap.className = 'mascot-wrap';
  wrap.id = 'mascot';
  wrap.innerHTML = `
    <div class="mascot-bubble" id="mascot-bubble">Shortlisting closes 12 September — don't miss out.</div>
    <button class="mascot-btn" id="mascot-btn" aria-label="Quick tips">
      ${icon('help')}
    </button>
  `;
  document.body.appendChild(wrap);

  const btn    = document.getElementById('mascot-btn');
  const bubble = document.getElementById('mascot-bubble');
  const msgs   = [
    'Shortlisting closes 12 September — don\'t miss out.',
    'No prior experience needed to apply.',
    'You can apply to up to 2 teams.',
    'Questions? Email cisco.vitbhopal@gmail.com',
    'Join 30+ members shaping the future of tech.',
  ];
  let mi = 0;

  setTimeout(() => {
    bubble.classList.add('show');
    setTimeout(() => bubble.classList.remove('show'), 5000);
  }, 4000);

  btn.addEventListener('click', () => {
    bubble.textContent = msgs[mi % msgs.length];
    bubble.classList.toggle('show');
    mi++;
  });
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollObserver() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    }),
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.aos').forEach(el => obs.observe(el));
}

function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }); }
    });
  });
}

// ============================================================
// HERO ARC - Upper dome (center cards elevated, outer cards drop)
// Cards also get a stagger-in entrance animation
// ============================================================
function initHeroArc() {
  const arcEl = document.getElementById('hero-arc');
  const cards = Array.from(document.querySelectorAll('.hero-team-card'));
  if (!arcEl || cards.length === 0) return;

  const N   = cards.length;        // 7
  const MID = (N - 1) / 2;        // 3.0 (Center card at index 3 is Content Team)

  const MAX_DROP = 60;   // px: how far center cards drop below outer cards
  const SPREAD   = 4;    // px: tiny extra horizontal spread

  function easeOut(t) { return 1 - Math.pow(1 - t, 2.2); }

  function getProgress() {
    const raw = window.scrollY / (window.innerHeight * 0.35);
    return Math.max(0, Math.min(1, raw));
  }

  function updateArc() {
    if (window.innerWidth <= 768) {
      cards.forEach(card => { card.style.transform = 'none'; });
      return;
    }
    const t = easeOut(getProgress());
    cards.forEach((card, i) => {
      const offset = i - MID;
      const norm   = offset / MID;
      const yOff   = MAX_DROP * (1 - norm * norm) * t;
      const xExtra = offset * SPREAD * t;
      card.style.transform = `translateX(${xExtra}px) translateY(${yOff}px)`;
    });
  }

  // Entrance: cards fade in
  cards.forEach((card, i) => {
    card.style.opacity    = '0';
    card.style.transition = `opacity 0.5s ease ${i * 60}ms`;
  });

  requestAnimationFrame(() => requestAnimationFrame(() => {
    cards.forEach(card => { card.style.opacity = '1'; });
    const delay = cards.length * 60 + 500;
    setTimeout(() => {
      cards.forEach(card => { card.style.transition = 'box-shadow 0.3s ease, border-color 0.28s ease'; });
      updateArc();
    }, delay);
  }));

  // Scroll-driven arc
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => { updateArc(); ticking = false; });
      ticking = true;
    }
  }, { passive: true });
  window.addEventListener('resize', updateArc);
}

// ============================================================
// BOOTSTRAP
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  renderNavbar();
  renderHero();
  renderAbout();
  renderTeams();
  renderCTABanner();
  renderRecruitment();
  renderFAQ();
  renderFooter();
  renderMascot();
  initScrollObserver();
  initAnchorScroll();
  initHeroArc();
});
