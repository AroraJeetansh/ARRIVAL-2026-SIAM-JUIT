export const FESTIVAL_METADATA = {
  name: 'ARRIVAL ’26',
  tagline: 'The Next Chapter Begins.',
  subtitle: 'The Flagship Cultural & Technical Fest',
  organizer: 'SIAM JUIT',
  organizerFull: 'Society for Industrial and Applied Mathematics — JUIT Student Chapter',
  venue: 'JUIT Waknaghat, Solan, Himachal Pradesh',
  coordinates: {
    lat: '31.009° N',
    long: '77.068° E',
    formatted: 'LAT 31.009° N // LONG 77.068° E',
    elevation: '1,500m MSL'
  },
  // Arrival is on 23 October 2026 at 2 PM IST
  eventDate: '2026-10-23T14:00:00+05:30',
  formattedDate: 'October 23, 2026 • 14:00 IST',
  registrationUrl: 'https://forms.gle/arrival2026',
  contactEmail: 'siam@juit.ac.in'
};

export const FESTIVAL_NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About Arrival', href: '#about' },
  { label: 'Previous Year', href: '#previous-year' },
  { label: 'Events', href: '#events' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Team', href: '#team' }
];

export const FESTIVAL_STATS = [
  { value: '24H', label: 'Continuous Hackathon', desc: 'Non-stop innovation sprint' },
  { value: '₹18,000', label: 'Hackathon Prize Pool', desc: 'Cash bounty & hardware perks' },
  { value: '7', label: 'Flagship Expeditions', desc: 'Tech, creative, gaming & music' },
  { value: '500+', label: 'Stargazer Attendees', desc: 'Students across universities' }
];

export const FESTIVAL_EVENTS = [
  {
    id: 'hackathon',
    title: 'Hackathon',
    subtitle: '24-Hour Innovation Marathon',
    category: 'TECHNICAL // FLAGSHIP',
    preset: 'cosmos',
    foilColor: '#af50ff',
    prizePool: '₹18,000',
    schedule: 'Day 1 — 12:00 PM Launch',
    venue: 'Main Computing Labs',
    poster: '/images/events/hackathon.jpg',
    summary: 'Arrival’s biggest event! A thrilling 24-hour hackathon where innovation meets endurance. Starting at 12 PM, participants turn bold ideas into real-world solutions through creativity, collaboration, and cutting-edge technology.',
    description: 'Over 24 hours, developers, designers, and innovators brainstorm, build, and present impactful projects addressing modern-day challenges.\n\nFrom developing intelligent applications and crafting hardware prototypes to integrating AI, IoT, and sustainability-focused technology, every challenge is designed to push problem-solving, coding, and design-thinking skills to the limit.',
    badges: ['24-Hour Sprint', 'AI / Web3 / IoT', 'Mentorship & Swag', 'Cash Prizes']
  },
  {
    id: 'arcana',
    title: 'Arcana — Mystery Quest',
    subtitle: 'Cryptic Multi-Day Treasure Hunt',
    category: 'EXPLORATION // LOGIC',
    preset: 'stars',
    foilColor: '#53c2c6',
    prizePool: 'Exciting Rewards',
    schedule: 'Day 1 (Discord) → Day 2 (IRL Campus)',
    venue: 'Discord Server & JUIT Campus',
    poster: '/images/events/arcana.jpg',
    summary: 'An immersive adventure that puts observation, logic, teamwork, and problem-solving skills to the ultimate test across two intense days.',
    description: 'Designed for curious minds and thrill-seekers, the hunt unfolds across two days, challenging participants to decipher clues, uncover hidden connections, and navigate their way closer to the ultimate prize.\n\nThe journey begins on Day 1 through Discord, where participants tackle cryptic clues and puzzles. As the hunt progresses into Day 2, the challenge intensifies across the physical campus, racing toward the final secret coordinates.',
    badges: ['2-Day Campaign', 'Discord Cipher Phase', 'IRL Campus Chase', 'Clue Decryption']
  },
  {
    id: 'resume',
    title: 'Resume Building Session',
    subtitle: 'Industry Career Masterclass',
    category: 'WORKSHOP // CAREER',
    preset: 'bursts',
    foilColor: '#e1bdff',
    prizePool: 'Career Resources',
    schedule: 'Day 1 — 03:30 PM',
    venue: 'LT-1 Auditorium',
    poster: '/images/events/resume.jpg',
    summary: 'A hands-on masterclass focused on helping students create an ATS-friendly, professional, and high-impact tech resume.',
    description: 'Participants will learn how to effectively present academic achievements, skills, projects, and internships while learning modern recruiter expectations.\n\nThe session covers essential aspects of resume architecture, from crafting compelling impact statements and showcasing GitHub repositories to avoiding common pitfalls.',
    badges: ['ATS Formatting', 'Project Framing', 'Portfolio Review', 'Recruiter Tips']
  },
  {
    id: 'speaker',
    title: 'Speaker Session',
    subtitle: 'Voices from the Frontiers of Tech',
    category: 'KEYNOTE // INSIGHTS',
    preset: 'gold',
    foilColor: '#ffd700',
    prizePool: 'Exclusive Networking',
    schedule: 'Day 2 — 11:00 AM',
    venue: 'Main Auditorium',
    poster: '/images/events/speaker.jpg',
    summary: 'A thought-provoking session featuring accomplished industry professionals and inspiring innovators bringing real-world lessons to the Arrival stage.',
    description: 'Offering students valuable perspectives on tech careers, artificial intelligence, entrepreneurship, and personal trajectory.\n\nThrough candid conversations and shared experiences, speakers unpack how they navigated challenges, offering actionable advice for students forging their own paths.',
    badges: ['Industry Leaders', 'Live Q&A', 'Career Blueprint', 'Fireside Chat']
  },
  {
    id: 'jamming',
    title: 'Jamming Night',
    subtitle: 'Acoustic Melody Under the Celestial Canopy',
    category: 'CULTURAL // MUSIC',
    preset: 'swirl',
    foilColor: '#d856bf',
    prizePool: 'Pure Euphoria',
    schedule: 'Day 1 — 09:00 PM Late Night',
    venue: 'Open Cafeteria Amphitheater',
    poster: '/images/events/jamming.jpg',
    summary: 'A lively musical evening designed to bring students together for a night of acoustic rhythms, vocal harmonies, and spontaneous jamming.',
    description: 'Held at the Open Cafeteria under the Himalayan night sky, the event transforms the courtyard into a vibrant late-night gathering.\n\nWhether performing on stage or unwinding with friends, Jamming Night is about music, connection, and creating unforgettable fest memories.',
    badges: ['Acoustic Sets', 'Open Mic', 'Night Sky Vibe', 'Unplugged Rhythm']
  },
  {
    id: 'minecraft',
    title: 'Minecraft: The Road to the End',
    subtitle: 'Interdimensional Strategy & PvP Tournament',
    category: 'GAMING // ESPORTS',
    preset: 'shards',
    foilColor: '#7a22ff',
    prizePool: 'Bounties & Titles',
    schedule: 'Day 2 — 02:00 PM',
    venue: 'Gaming Arena / Lab 3',
    poster: '/images/events/minecraft.jpg',
    summary: 'An intense team-based competition inspired by Minecraft’s iconic journey from the Overworld through the Nether to The End.',
    description: 'Teams of two battle through three intense rounds combining knowledge, speed, strategy, and combat.\n\nBuild your HP through quiz stages, outsmart opponents in strategic head-to-head battles, and survive the final challenge of 20 rapid-fire questions to conquer the dimension and claim victory.',
    badges: ['Duo Teams (2v2)', 'Overworld → Nether → End', 'PvP & Quizzes', 'Custom Arena']
  },
  {
    id: 'neon-protocol',
    title: 'Neon Protocol: The Web Design Challenge',
    subtitle: 'Retro-Futuristic Frontend Showdown',
    category: 'DESIGN // CODING',
    preset: 'rainbow',
    foilColor: '#00e5ff',
    prizePool: 'Designer Accolades & Prizes',
    schedule: 'Day 2 — 04:00 PM',
    venue: 'UI/UX Design Studio',
    poster: '/images/events/neon_protocol.jpg',
    summary: 'A fast-paced web design battle organized by SIAM JUIT testing UI/UX mastery, aesthetics, and adaptability under strict time constraints.',
    description: 'Participants are assigned a random topic and theme generated at the start of the event, and must design a functional, visually cohesive web interface before the countdown ends.\n\nSubmissions are evaluated on creativity, aesthetic coherence, UI/UX polish, responsiveness, and clean code execution.',
    badges: ['Random Theme Prompt', 'Speed UI/UX', 'Figma & Code', 'Live Showcase']
  }
];

export const CORE_TEAM_MEMBERS = [
  {
    id: 'shomya-vishwakarma',
    num: '01',
    name: 'Shomya Vishwakarma',
    role: 'President',
    tagline: 'Vision. Leadership. Steering the legacy.',
    initials: 'SV',
    accent: '#af50ff',
    secondary: '#e1bdff',
    motif: 'orbit',
    code: 'LEAD-CMD',
    station: 'Executive Directorate // SIAM JUIT',
    image: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1769074452/Shomya_Vishwakarma_mjhovq.jpg',
    biography: 'Serving as the President of ARRIVAL 2026, Shomya steers the overarching legacy and strategic vision of the festival. Driven by leadership and forward-looking direction, she aligns teams across creative, technical, and operational domains to turn ambitious ideas into an unforgettable reality.',
    whatTheyBring: 'Visionary leadership, high-level decision making, and legacy stewardship. Ensuring seamless synergy across all council departments while setting a gold standard for ARRIVAL 2026.',
    about: 'Serving at the helm of ARRIVAL 2026, Shomya coordinates the grand strategic vision of the festival. Under her leadership, the SIAM JUIT Student Chapter unites technical prowess with cultural dynamism, spearheading 7 flagship expeditions, 24-hour hackathon operations, and cross-university engagement.',
    focusAreas: ['Strategic Festival Roadmapping', 'Executive Mission Command', 'Inter-Department Synergy', 'Chapter Legacy & Culture'],
    keyDeliverables: [
      'Unified vision connecting technical innovation and cultural expeditions',
      'High-level institutional alignment with university leadership and faculty advisors',
      'Executive oversight across budget allocations, technical portals, and operations',
      'Setting historical benchmarks for SIAM JUIT festival participation and impact'
    ],
    quote: "ARRIVAL '26 is more than a festival; it's a launchpad for future engineers, innovators, and leaders to test their limits under one cosmic roof."
  },
  {
    id: 'nishit-aggarwal',
    num: '02',
    name: 'Nishit Aggarwal',
    role: 'Vice President',
    tagline: 'Strategy, problem-solving, and execution master.',
    initials: 'NA',
    accent: '#53c2c6',
    secondary: '#b2f5ff',
    motif: 'matrix',
    code: 'STRAT-EXE',
    station: 'Strategic Command // Operations Matrix',
    image: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1769074448/Nishit_Aggarwal_i6phgc.jpg',
    biography: 'As Vice President of ARRIVAL 2026, Nishit drives tactical strategy, rapid problem-solving, and end-to-end execution. He works closely with every department to overcome challenges and translate the festival vision into high-impact reality.',
    whatTheyBring: 'Mastery of strategy, agile problem-solving, and execution velocity. Providing actionable operational frameworks, resolving critical bottlenecks, and keeping festival milestones on schedule.',
    about: 'Nishit acts as the operational nerve center and tactical strategist for ARRIVAL 2026. From resolving friction points across logistical chains to executing high-priority missions, he bridges vision with flawless on-the-ground performance.',
    focusAreas: ['Tactical Execution & Action Plans', 'Complex Problem Solving & Crisis Resolution', 'Cross-Team Velocity & Deadlines', 'Sponsorship & Ecosystem Partnerships'],
    keyDeliverables: [
      'Operational blueprint for the 24-Hour continuous Hackathon sprint',
      'Rapid-response troubleshooting framework during live festival hours',
      'Optimizing event timelines and resource sharing across all seven departments',
      'Strategic liaising with external partners, sponsors, and student communities'
    ],
    quote: "Execution turns ambitious dreams into legendary reality. We don't just plan for success — we engineer every single detail until it works."
  },
  {
    id: 'harshit-choudhary',
    num: '03',
    name: 'Harshit Choudhary',
    role: 'Secretary',
    tagline: 'Permissions, administration, and organizational anchor.',
    initials: 'HC',
    accent: '#ffd700',
    secondary: '#fff0a8',
    motif: 'anchor',
    code: 'ADMIN-OPS',
    station: 'Administrative Secretariat // Campus Governance',
    image: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1769088784/Harshit_Choudhary_10000_omkrpb.jpg',
    biography: 'Serving as Secretary, Harshit acts as the organizational anchor for ARRIVAL 2026. He oversees administrative governance, university permissions, institutional clearances, and official coordination to ensure flawless foundational backing.',
    whatTheyBring: 'Administrative excellence, university compliance, protocol management, and organizational stability. Securing authorizations and maintaining structured communication throughout the event lifecycle.',
    about: 'The administrative anchor of ARRIVAL 2026, Harshit oversees institutional protocol, official university sanctions, legal compliance, and formal communication. His governance guarantees that every initiative runs smoothly within the university ecosystem.',
    focusAreas: ['Official University Clearances', 'Administrative Governance & Compliance', 'Formal Institutional Correspondence', 'Guest & Dignitary Protocol'],
    keyDeliverables: [
      'Secured campus-wide venue, lab, and auditorium permits across both fest days',
      'Formal university documentation, circulars, and departmental clearances',
      'Coordination with campus security, administration, and IT networking staff',
      'Archiving official records, minutes, and mission reports for SIAM JUIT'
    ],
    quote: "A steadfast foundation makes towering achievements possible. Strong governance ensures our creatives and coders can build without limits."
  },
  {
    id: 'jeetansh-arora',
    num: '04',
    name: 'Jeetansh Arora',
    role: 'Treasurer',
    tagline: 'Calm, composed, and steady financial stewardship.',
    initials: 'JA',
    accent: '#00e5ff',
    secondary: '#8ff4ff',
    motif: 'prism',
    code: 'FISCAL-STEWARD',
    station: 'Financial Treasury // Resource Allocation',
    image: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1769091099/873a90ff-22da-4929-923a-673675a917d7_rrfouu.jpg',
    biography: 'As Treasurer, Jeetansh provides calm, composed, and steady financial stewardship for ARRIVAL 2026. He manages budget allocation, fiscal discipline, and economic resources to power every aspect of the festival.',
    whatTheyBring: 'Steady financial stewardship, budget architecture, transparent resource management, and fiscal reliability. Ensuring all seven expeditions, prize pools, and production needs are soundly financed.',
    about: 'Calm under pressure and meticulous in execution, Jeetansh manages the financial lifeblood of ARRIVAL 2026. He directs budget modeling, expense auditing, and sponsor fund allocation to ensure fiscal resilience and prize pool guarantees.',
    focusAreas: ['Festival Budget Architecture & Modeling', 'Prize Pool Disbursement & Integrity', 'Procurement & Logistics Accounting', 'Sponsor Fund Auditing & Transparency'],
    keyDeliverables: [
      'Strategic allocation of the flagship ₹18,000 Hackathon Prize Pool',
      'Procurement management for hardware, staging, sound, and participant kits',
      'Live expense reconciliation and transparent account auditing throughout the fest',
      'Sponsor ROI reporting and economic resource optimization across all tracks'
    ],
    quote: "Precision in numbers creates confidence in action. Steady financial stewardship turns visionary ideas into a well-funded, world-class experience."
  },
  {
    id: 'shivani-vishvkarma',
    num: '05',
    name: 'Shivani Vishvkarma',
    role: 'Technical Head',
    tagline: 'Architecting platforms, code, and digital experiences.',
    initials: 'SV',
    accent: '#d856bf',
    secondary: '#ff8de2',
    motif: 'circuit',
    code: 'SYS-ARCH',
    station: 'Digital Architecture // Technical Operations',
    image: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1769074453/Shivani_weondn.jpg',
    biography: 'Heading the technical wing of ARRIVAL 2026, Shivani architects the digital platforms, software infrastructure, and web experiences that bring the fest to life. She unites robust engineering with modern frontend design.',
    whatTheyBring: 'Digital platform architecture, web systems development, and immersive tech execution. Delivering the responsive festival web presence, 24-hour hackathon systems, and technical workflows.',
    about: 'Leading the digital frontier, Shivani architects the software infrastructure that powers ARRIVAL 2026. From the 3D WebGL web portal to real-time hackathon judging engines and Discord cryptographic quest systems, her work defines the digital presence.',
    focusAreas: ['Interactive WebGL & Frontend Engineering', 'Hackathon Server Infrastructure & Automated Evaluation', 'Discord Cipher Bot & Arcana Tech Stack', 'Data Pipelines, Scalability & Platform Security'],
    keyDeliverables: [
      'Arrival 2026 responsive portal with dynamic 3D visualizers and holo-effects',
      'High-availability submission portal for 24-hour hackathon teams and judges',
      'Custom puzzle encryption bot for Arcana Mystery Quest across Discord & IRL',
      'Real-time telemetry and schedule synchronization dashboard for attendees'
    ],
    quote: "Code is our canvas. Through robust architecture and interactive design, we build experiences that feel like stepping into the future."
  },
  {
    id: 'abhinandan-sharma',
    num: '06',
    name: 'Abhinandan Sharma',
    role: 'Public Relations Head',
    tagline: 'Outreach, media strategy, and brand voice.',
    initials: 'AS',
    accent: '#ff5e7e',
    secondary: '#ffb3c1',
    motif: 'signal',
    code: 'PR-OUTREACH',
    station: 'Communications Command // Brand & Media',
    image: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1786359842/IMG-20260222-WA000267.jpg_puz6is.jpg',
    biography: 'As Public Relations Head, Abhinandan shapes the brand voice, media strategy, and external outreach of ARRIVAL 2026. He connects the festival with student communities, media outlets, and participants across institutions.',
    whatTheyBring: 'Omnichannel outreach, strategic media communications, and authentic brand voice. Expanding participant engagement, crafting compelling announcements, and building festival buzz.',
    about: 'The communicative spark of ARRIVAL 2026, Abhinandan drives the narrative, brand identity, and audience reach across universities and digital communities. He orchestrates multi-platform PR campaigns, influencer outreach, and press relations.',
    focusAreas: ['Omnichannel Public Relations Strategy', 'Brand Voice & Social Campaign Storytelling', 'Inter-College Ambassador Network', 'Media Relations, Press Releases & Event Hype'],
    keyDeliverables: [
      'Campus outreach driving 500+ participants from universities across North India',
      'Engaging promotional teaser releases and storytelling campaigns across socials',
      'Official event coverage, livestream coordination, and photography teams',
      'Press releases and public announcements across tech communities and platforms'
    ],
    quote: "A great idea only shines when the world hears its story. We craft the voice that turns an event into an unforgettable cultural movement."
  },
  {
    id: 'kartik-malik',
    num: '07',
    name: 'Kartik Malik',
    role: 'Operations Head',
    tagline: 'Logistics, venue control, and event execution.',
    initials: 'KM',
    accent: '#38ef7d',
    secondary: '#a8ff78',
    motif: 'vector',
    code: 'VENUE-LOG',
    station: 'Tactical Venue Operations // Ground Command',
    image: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1769074447/Kartik_dpuzsk.jpg',
    biography: 'Leading festival operations, Kartik commands on-ground logistics, venue control, and event execution for ARRIVAL 2026. He ensures facilities, timing, stage environments, and live operations run like clockwork.',
    whatTheyBring: 'On-ground logistics, venue control, real-time schedule management, and event flow execution. Coordinating physical infrastructure and live event operations across the campus.',
    about: 'The ground commander of ARRIVAL 2026, Kartik oversees physical infrastructure, stage operations, security protocols, and crowd logistics across all JUIT venues. He ensures every competition, talk, and concert begins with pinpoint punctuality.',
    focusAreas: ['Campus-Wide Venue Management & Layouts', 'Audio/Visual Engineering & Stage Lighting', 'Real-Time Schedule Execution & Flow Control', 'Crowd Safety, Participant Hospitality & Kits'],
    keyDeliverables: [
      'Hardware preparation and high-bandwidth networking of Main Computing Labs',
      'Open Cafeteria amphitheater transformation for Jamming Night under night sky',
      'Esports gaming arena configuration with low-latency rigs for Minecraft 2v2',
      '24/7 on-ground dispatch and crisis control during the entire festival lifecycle'
    ],
    quote: "The best logistics are the ones that work so seamlessly that everyone simply experiences the magic. Flawless operations make brilliance possible."
  }
];

export const SPONSORS_DATA = [
  {
    tier: 'TECH SPONSOR',
    subtitle: 'Powering innovation',
    items: [
      {
        name: 'Studojo',
        tagline: 'Official Technology Partner',
        cardImage: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1792526985/ChatGPT_Image_Oct_21_2026_01_39_28_AM_idddv7.png',
        category: 'Technology Partner'
      }
    ],
  },
  {
    tier: 'FOOD SPONSORS',
    subtitle: 'Fuel for the ARRIVAL experience',
    items: [
      {
        name: 'Food Sponsor 1',
        tagline: 'Official Food Partner',
        cardImage: '/images/sponsors/food1.png',
        category: 'Food Partner'
      },
      {
        name: 'Food Sponsor 2',
        tagline: 'Official Food Partner',
        cardImage: '/images/sponsors/food2.png',
        category: 'Food Partner'
      }
    ]
  },
];

export const PREVIOUS_YEAR_PHOTOS = [
  {
    title: 'The 24-Hour Midnight Sprint',
    desc: 'Over 120 developers relentlessly building and innovating through the night in the computing halls.',
    src: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1776596222/hackathon_dg93b8.jpg',
    tag: 'ARRIVAL ’24 // HACKATHON ARENA'
  },
  {
    title: 'The Amphitheater Symphony',
    desc: 'Over 600 students gathered at the Open Cafeteria under the night sky for acoustic harmonies.',
    src: 'https://res.cloudinary.com/dgvfmxzg0/image/upload/v1792520518/IMG_0573_k67wxc.jpg',
    tag: 'ARRIVAL ’24 // CONCERT NIGHT'
  }
];
