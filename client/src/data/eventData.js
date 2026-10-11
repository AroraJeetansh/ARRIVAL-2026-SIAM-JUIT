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
  { label: 'Organizing Team', href: '#team' }
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

export const ORGANIZING_TEAM = [
  {
    name: 'Aryan Sharma',
    role: 'Lead Organizer & President',
    dept: 'SIAM JUIT Student Chapter',
    photo: '/images/team/lead.jpg',
    preset: 'cosmos',
    foilColor: '#af50ff',
    handle: '@aryansharma',
    tags: ['Mission Control', 'Leadership']
  },
  {
    name: 'Ananya Verma',
    role: 'Technical Lead & Hackathon Director',
    dept: 'Systems & Architecture',
    photo: '/images/team/tech.jpg',
    preset: 'shards',
    foilColor: '#00e5ff',
    handle: '@ananya_tech',
    tags: ['Hackathon Track', 'Infrastructure']
  },
  {
    name: 'Rohan Kapoor',
    role: 'Creative & Design Director',
    dept: 'Brand, Media & Aesthetics',
    photo: '/images/team/design.jpg',
    preset: 'swirl',
    foilColor: '#d856bf',
    handle: '@rohan_creative',
    tags: ['UI/UX', 'Cosmic Visuals']
  },
  {
    name: 'Ishaan Mehta',
    role: 'Head of Operations & Logistics',
    dept: 'Flight Operations & Outreach',
    photo: '/images/team/ops.jpg',
    preset: 'gold',
    foilColor: '#ffd700',
    handle: '@ishaan_ops',
    tags: ['Campus Logistics', 'Sponsorship']
  }
];

export const SPONSORS_DATA = [
  {
    tier: 'ALPHA PARTNERS',
    subtitle: 'Cosmic Title Collaborators',
    items: [
      {
        name: 'GitHub',
        tagline: 'Developer Ecosystem & Student Pack',
        cardImage: '/images/sponsors/github.svg',
        foilColor: '#ffffff',
        preset: 'gold',
        category: 'Code Ecosystem',
        symbol: '🐙'
      },
      {
        name: 'Devfolio',
        tagline: 'India’s Flagship Hackathon Platform',
        cardImage: '/images/sponsors/devfolio.svg',
        foilColor: '#3770ff',
        preset: 'cosmos',
        category: 'Hackathon Partner',
        symbol: '⚡'
      }
    ]
  },
  {
    tier: 'NEBULA PARTNERS',
    subtitle: 'Cloud, API & Web3 Infrastructure',
    items: [
      {
        name: 'Polygon',
        tagline: 'Scalable Ethereum Web3 Network',
        cardImage: '/images/sponsors/polygon.svg',
        foilColor: '#8247e5',
        preset: 'shards',
        category: 'Web3 Protocol',
        symbol: '⬡'
      },
      {
        name: 'JetBrains',
        tagline: 'Professional Developer IDEs',
        cardImage: '/images/sponsors/jetbrains.svg',
        foilColor: '#f7f9fa',
        preset: 'bursts',
        category: 'Tooling Partner',
        symbol: '❖'
      },
      {
        name: 'Postman',
        tagline: 'Leading Global API Platform',
        cardImage: '/images/sponsors/postman.svg',
        foilColor: '#ff6c37',
        preset: 'stars',
        category: 'API Infrastructure',
        symbol: '🚀'
      }
    ]
  },
  {
    tier: 'ORBIT COMMUNITY',
    subtitle: 'Deployment & Energy Fuel',
    items: [
      {
        name: 'Vercel',
        tagline: 'Edge Network & Frontend Cloud',
        cardImage: '/images/sponsors/vercel.svg',
        foilColor: '#ffffff',
        preset: 'cosmos',
        category: 'Edge Compute',
        symbol: '▲'
      },
      {
        name: 'Red Bull',
        tagline: 'Energy Fuel for 24-Hour Hackers',
        cardImage: '/images/sponsors/redbull.svg',
        foilColor: '#ffd700',
        preset: 'rainbow',
        category: 'Vitality Partner',
        symbol: '🐂'
      }
    ]
  }
];

export const PREVIOUS_YEAR_PHOTOS = [
  {
    title: 'The 24-Hour Midnight Sprint',
    desc: 'Over 120 developers relentlessly building and innovating through the night in the computing halls.',
    src: '/images/gallery/hackathon.jpg',
    tag: 'ARRIVAL ’24 // HACKATHON ARENA'
  },
  {
    title: 'The Amphitheater Symphony',
    desc: 'Over 600 students gathered at the Open Cafeteria under the night sky for acoustic harmonies.',
    src: '/images/gallery/stage.jpg',
    tag: 'ARRIVAL ’24 // CONCERT NIGHT'
  }
];
