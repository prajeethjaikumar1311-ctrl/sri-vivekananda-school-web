export interface ContactInfo {
  schoolName: string;
  shortName: string;
  tamilName: string;
  tagline: string;
  subSlogan: string;
  motto: string;
  recognition: string;
  trustName: string;
  trustMotto: string;
  academicYear: string;
  classesOffered: string;
  address: {
    campus: string;
    street: string;
    village: string;
    pincode: string;
    state: string;
    country: string;
    fullFormatted: string;
  };
  phoneNumbers: string[];
  primaryPhone: string;
  whatsappNumber: string;
  emails: {
    official: string;
    ocrSpacedVariation: string;
    note: string;
  };
  trustSeal: string;
  rtePortalUrl: string;
}

export interface LeadershipMember {
  name: string;
  role: string;
  qualifications: string;
  organization: string;
  vision: string;
}

export interface AcademicClass {
  id: string;
  code: string;
  title: string;
  ageGroup: string;
  category: 'Early Childhood' | 'Kindergarten' | 'Primary';
  focus: string;
  highlights: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
  iconName: string;
  bulletPoints: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  iconName: string;
}

export interface WhyChooseItem {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export const schoolData: ContactInfo = {
  schoolName: 'SRI VIVEKANANDA NURSERY AND PRIMARY SCHOOL',
  shortName: 'Sri Vivekananda School',
  tamilName: 'ஸ்ரீ விவேகானந்தா நர்சரி மற்றும் தொடக்கப்பள்ளி',
  tagline: 'Quality Education • Good Discipline • Holistic Development',
  subSlogan: 'Quality Education! | Good Discipline!! | Low Fees!!!',
  motto: 'Arise • Awake • Achieve',
  recognition: 'Recognised by the Government of Tamil Nadu (தமிழக அரசின் அங்கீகாரம் பெற்றது)',
  trustName: 'JSP Educational Trust, Singarapettai',
  trustMotto: 'Nothing is Impossible',
  academicYear: '2026–2027',
  classesOffered: 'Pre-KG to V Standard',
  address: {
    campus: 'Sri Vivekananda School',
    street: 'SKR Nagar',
    village: 'Singarapettai',
    pincode: '635 307',
    state: 'Tamil Nadu',
    country: 'India',
    fullFormatted: 'SKR Nagar, Singarapettai – 635 307, Tamil Nadu, India',
  },
  phoneNumbers: ['99656 36999', '95971 91909', '73733 31600', '95971 91929'],
  primaryPhone: '99656 36999',
  whatsappNumber: '919965636999',
  emails: {
    official: 'vivekanandaspt@gmail.com',
    ocrSpacedVariation: 'vivekanandasp t@gmail.com',
    note: 'Preserved as visible in official school material. Standard verified address: vivekanandaspt@gmail.com',
  },
  trustSeal: '/images/logo/jsp-educational-trust-seal.jpeg',
  rtePortalUrl: 'https://righttoeducation.in/resources/states/tamil-nadu',
};

export const leadershipData: {
  chairman: LeadershipMember;
  correspondent: LeadershipMember;
} = {
  chairman: {
    name: 'Mr. R. Jayakumar',
    role: 'Chairman',
    qualifications: 'M.Sc., M.Phil., B.Ed., DPCS., DIM.',
    organization: 'JSP Educational Trust, Singarapettai',
    vision:
      'Dedicated to providing high quality, disciplined, and value-based education that builds character, confidence, and foundational skills for every child in Singarapettai.',
  },
  correspondent: {
    name: 'Mrs. C. Sathiya Jayakumar',
    role: 'Correspondent',
    qualifications: 'M.Sc. (Psy), M.Sc. (MB), M.Ed., M.Phil.',
    organization: 'Sri Vivekananda School, Singarapettai',
    vision:
      'Committed to child-centered holistic learning, encouraging spoken language proficiency, personal discipline, and creative development in a warm, nurturing environment.',
  },
};

export const academicClasses: AcademicClass[] = [
  {
    id: 'pre-kg',
    code: '01',
    title: 'Pre-KG',
    ageGroup: '2.5 – 3.5 Years',
    category: 'Early Childhood',
    focus: 'Joyful first steps into social interaction, motor development, and sensory play.',
    highlights: [
      'Activity-based play learning',
      'Gentle socialization and care',
      'Early phonics, rhymes & storytelling',
      'Motor and sensory coordination',
    ],
  },
  {
    id: 'lkg',
    code: '02',
    title: 'LKG (Lower Kindergarten)',
    ageGroup: '3.5 – 4.5 Years',
    category: 'Kindergarten',
    focus: 'Building early language curiosity, letter recognition, and number concepts.',
    highlights: [
      'Tamil and English letter exploration',
      'Counting, shapes and patterns',
      'Drawing, coloring and motor drills',
      'Rhymes, moral stories and manners',
    ],
  },
  {
    id: 'ukg',
    code: '03',
    title: 'UKG (Upper Kindergarten)',
    ageGroup: '4.5 – 5.5 Years',
    category: 'Kindergarten',
    focus: 'Cultivating kindergarten readiness, trilingual familiarity, and disciplined routines.',
    highlights: [
      'Early reading & handwriting foundations',
      'Introductory conversational Hindi',
      'Foundational math and reasoning',
      'Values of politeness and hygiene',
    ],
  },
  {
    id: 'std-1',
    code: '04',
    title: 'Standard I',
    ageGroup: '5.5 – 6.5 Years',
    category: 'Primary',
    focus: 'Formal primary schooling initiation with strong reading and handwriting emphasis.',
    highlights: [
      'Trilingual curriculum (Tamil, English, Hindi)',
      'Spoken English daily practice',
      'Handwriting training drills',
      'Basic arithmetic operations',
    ],
  },
  {
    id: 'std-2',
    code: '05',
    title: 'Standard II',
    ageGroup: '6.5 – 7.5 Years',
    category: 'Primary',
    focus: 'Expanding linguistic expression, mathematical confidence, and creative thinking.',
    highlights: [
      'Guided reading and vocabulary expansion',
      'Applied mathematics & mental arithmetic',
      'Introduction to computer familiarity',
      'Art, craft and discipline habits',
    ],
  },
  {
    id: 'std-3',
    code: '06',
    title: 'Standard III',
    ageGroup: '7.5 – 8.5 Years',
    category: 'Primary',
    focus: 'Interactive science discovery, environmental awareness, and extracurricular skills.',
    highlights: [
      'Environmental studies and science concepts',
      'Computer training and keyboard practice',
      'Karate practice & Yoga sessions',
      'Neat handwriting coaching',
    ],
  },
  {
    id: 'std-4',
    code: '07',
    title: 'Standard IV',
    ageGroup: '8.5 – 9.5 Years',
    category: 'Primary',
    focus: 'Strengthening problem-solving, analytical comprehension, and fluent communication.',
    highlights: [
      'Spoken English fluency development',
      'Mathematics problem-solving skills',
      'Hands-on classroom activity learning',
      'Karate & Dance practice participation',
    ],
  },
  {
    id: 'std-5',
    code: '08',
    title: 'Standard V',
    ageGroup: '9.5 – 10.5 Years',
    category: 'Primary',
    focus: 'Senior primary mastery, moral leadership, self-discipline, and middle school transition.',
    highlights: [
      'Complete primary syllabus mastery',
      'Trilingual proficiency across reading and writing',
      'Computer proficiency & practical skills',
      'Holistic physical fitness, Yoga & discipline',
    ],
  },
];

export const curriculumPillars = [
  {
    title: 'Trilingual Curriculum',
    tamil: 'மும்மொழிப் பாடத்திட்டம்',
    description:
      'Equal emphasis on mother tongue Tamil, global English fluency, and national language Hindi to prepare students with broad linguistic horizons.',
    languages: [
      { name: 'Tamil', script: 'தமிழ்', desc: 'Mother tongue, rich cultural heritage, literature & grammar' },
      { name: 'English', script: 'English', desc: 'Spoken English fluency, phonics, reading comprehension' },
      { name: 'Hindi', script: 'हिन्दी', desc: 'National language basics, conversational practice & script' },
    ],
  },
  {
    title: 'Spoken English Training',
    description:
      'Specialized daily conversational training designed to instill poise and confidence, empowering every young learner to speak fluent English effortlessly.',
  },
  {
    title: 'Handwriting Training',
    description:
      'Structured handwriting coaching that cultivates clear, legible, and elegant penmanship from the earliest grades.',
  },
  {
    title: 'Computer Training',
    description:
      'Early age exposure to computer literacy and digital learning tools, nurturing foundational technology comfort and keyboard skills.',
  },
  {
    title: 'Character & Discipline',
    description:
      'Rooted in Swami Vivekananda’s noble ideals of strength, truth, and service—fostering respect, integrity, and good manners.',
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: 'Quality Education',
    subtitle: 'High academic standards',
    description:
      'Rigorous foundational teaching crafted for nursery and primary years, ensuring solid literacy and numeracy.',
    iconName: 'GraduationCap',
  },
  {
    title: 'Good Discipline',
    subtitle: 'Character & core values',
    description:
      'Thoughtful daily routines that cultivate punctuality, respect, self-control, and responsible behavior.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Trilingual Learning',
    subtitle: 'Tamil, English & Hindi',
    description:
      'Balanced language instruction giving children a strong cultural root and wide communicative capability.',
    iconName: 'Languages',
  },
  {
    title: 'Spoken English Training',
    subtitle: 'Fluent spoken expression',
    description:
      'Focused spoken English practice so students build communicative confidence from early childhood.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Computer Training',
    subtitle: 'Digital familiarity',
    description:
      'Interactive computer sessions acquainting young students with foundational computer skills.',
    iconName: 'Laptop',
  },
  {
    title: 'Extracurricular Activities',
    subtitle: 'Well-rounded growth',
    description:
      'Dance practice, creative arts, and cultural celebrations woven naturally into school life.',
    iconName: 'Sparkles',
  },
  {
    title: 'Yoga & Karate',
    subtitle: 'Physical & mental poise',
    description:
      'Regular practice of Yoga for calmness and focus, alongside Karate for fitness and self-discipline.',
    iconName: 'HeartPulse',
  },
  {
    title: 'School Bus Facility',
    subtitle: 'Safe transit on school routes',
    description:
      'Dedicated yellow school buses serving Singarapettai and designated routes with safety supervision.',
    iconName: 'Bus',
  },
  {
    title: 'Purified Drinking Water',
    subtitle: 'Health & hygiene first',
    description:
      'On-campus water purification system providing clean, safe, and hygienic drinking water for every child.',
    iconName: 'Droplets',
  },
  {
    title: 'Spacious Learning Environment',
    subtitle: 'Airy building & playground',
    description:
      'Multi-storey ventilated building with colourful pillared corridors and an open playground for sports and games.',
    iconName: 'Building2',
  },
];

export const facilitiesList: FacilityItem[] = [
  {
    id: 'classrooms',
    title: 'Airy & Bright Classrooms',
    subtitle: 'Optimal learning spaces',
    description:
      'Spacious, well-ventilated classrooms designed to let in ample natural light and fresh air, featuring child-friendly seating arrangements and cheerful surroundings.',
    image: '/images/campus/campus-building-wide.jpeg',
    iconName: 'School',
    bulletPoints: [
      'Multi-storey learning complex with colourful columns',
      'Wide covered verandas ensuring safe movement',
      'Optimal ventilation suitable for Singarapettai climate',
      'Clean, organized and disciplined classroom setup',
    ],
  },
  {
    id: 'campus',
    title: 'Spacious School Campus',
    subtitle: 'Peaceful, scenic surroundings',
    description:
      'Located in SKR Nagar, Singarapettai, the campus is surrounded by lush greenery and coconut palms, providing a calm and distraction-free educational sanctuary.',
    image: '/images/campus/aerial-campus-view.jpeg',
    iconName: 'MapPin',
    bulletPoints: [
      'Serene setting amidst natural palm groves',
      'Enclosed campus grounds with boundary protection',
      'Fountain courtyard with goddess Saraswati statue',
      'Convenient roadside approach with easy access',
    ],
  },
  {
    id: 'playground',
    title: 'Open Playground & Assembly Yard',
    subtitle: 'Room for play and fitness',
    description:
      'Large open courtyard and playground area where students gather for morning prayers, physical training, sports activities, and joyful playtime.',
    image: '/images/campus/campus-courtyard.jpeg',
    iconName: 'Trophy',
    bulletPoints: [
      'Spacious ground for daily school assemblies',
      'Dedicated area for Karate and Yoga practice',
      'Room for traditional games and group activities',
      'Safe, open surface for healthy child development',
    ],
  },
  {
    id: 'transport',
    title: 'School Bus Transport',
    subtitle: 'Punctual & secure transit',
    description:
      'Official Sri Vivekananda School yellow bus fleet operating across Singarapettai and surrounding village routes for convenient daily travel.',
    image: '/images/transport/school-buses-fleet.jpeg',
    iconName: 'Bus',
    bulletPoints: [
      'Dedicated yellow school buses with official signage',
      'Convenient pickup and drop points along designated routes',
      'Responsible driving staff prioritizing child safety',
      'Contact the school office for specific route details',
    ],
  },
  {
    id: 'purified-water',
    title: 'Purified Drinking Water',
    subtitle: 'Safe and healthy hydration',
    description:
      'Dedicated campus water purification facility guaranteeing clean, potable water throughout the day for students and teachers.',
    image: '/images/campus/school-building-roadside.jpeg',
    iconName: 'Droplets',
    bulletPoints: [
      'Hygienic water filtration system',
      'Accessible drinking water stations for young children',
      'Promotes healthy hydration habits during school hours',
      'Maintained with strict sanitation care',
    ],
  },
  {
    id: 'activity-areas',
    title: 'Activity & Cultural Spaces',
    subtitle: 'Spaces for creative practice',
    description:
      'Versatile campus courtyard and multi-purpose spaces used for festivals, dance rehearsals, computer training, handwriting clinics, and Annual Day functions.',
    image: '/images/events/school-celebration.jpeg',
    iconName: 'Sparkles',
    bulletPoints: [
      'Courtyard stage for assemblies and celebrations',
      'Space for Rangoli and Kolam cultural festivals',
      'Computer training corners for digital literacy',
      'Celebration venue decorated during special events',
    ],
  },
];

export const activitiesList: ActivityItem[] = [
  {
    id: 'cultural-celebrations',
    title: 'Cultural Celebrations & Pongal',
    category: 'CULTURAL',
    description:
      'Students and teachers assemble in festive traditional dress around grand, intricate Kolam designs to honor Tamil traditions, community spirit, and shared happiness.',
    image: '/images/events/cultural-celebration-kolam.jpeg',
    iconName: 'Palette',
  },
  {
    id: 'educational-trips',
    title: 'Educational Tours & Excursions',
    category: 'OUTDOOR LEARNING',
    description:
      'Memorable group learning visits, such as the experiential tour to Paravasa Ulagam and historical site excursions to Mahabalipuram, expanding horizons outside textbooks.',
    image: '/images/students/educational-trip-paravasa-uganam.jpeg',
    iconName: 'Compass',
  },
  {
    id: 'historic-trips',
    title: 'Heritage & Monument Visits',
    category: 'HISTORY & EXPLORATION',
    description:
      'Hands-on discovery tours where children observe historic landmarks like Krishna’s Butterball firsthand alongside their dedicated teachers and school leadership.',
    image: '/images/students/educational-trip-outdoor.jpeg',
    iconName: 'Landmark',
  },
  {
    id: 'annual-day',
    title: '18th Annual Day Celebrations',
    category: 'SCHOOL EVENTS',
    description:
      'Flagship annual school celebration with student stage presentations, prize distribution, guest felicitations, and an inspiring showcase of young talents.',
    image: '/images/events/18th-annual-day-invitation.jpeg',
    iconName: 'CalendarDays',
  },
  {
    id: 'campus-festivals',
    title: 'School Celebrations & Functions',
    category: 'COMMUNITY',
    description:
      'Joyous events celebrated in the school courtyard with floral fountains, colourful balloon arches, children dressed in creative costumes, and festive sharing.',
    image: '/images/events/school-celebration.jpeg',
    iconName: 'Smile',
  },
  {
    id: 'yoga-karate',
    title: 'Yoga & Karate Practice',
    category: 'FITNESS & DEFENSE',
    description:
      'Integrated physical training program featuring Yoga for breath control and focus, and Karate for agility, alertness, and self-protection.',
    iconName: 'Dumbbell',
  },
  {
    id: 'dance-practice',
    title: 'Dance & Stage Practice',
    category: 'PERFORMING ARTS',
    description:
      'Guided dance training helping young children develop rhythm, graceful posture, musical awareness, and stage confidence.',
    iconName: 'Music',
  },
  {
    id: 'computer-training',
    title: 'Computer Training Sessions',
    category: 'SKILLS',
    description:
      'Guided sessions introducing nursery and primary students to computer parts, basic typing, educational software, and interactive games.',
    iconName: 'Laptop',
  },
  {
    id: 'spoken-english-handwriting',
    title: 'Spoken English & Handwriting Training',
    category: 'ACADEMIC EXCELLENCE',
    description:
      'Special coaching specifically taught to develop clear spoken English fluency and neat, confident cursive penmanship.',
    iconName: 'Pencil',
  },
];

export const admissionChecklist = [
  {
    id: 'doc-birth',
    title: 'Birth Certificate',
    tamil: 'பிறப்புச் சான்றிதழ்',
    description: 'Original and photocopy issued by the competent municipal or panchayat authority.',
  },
  {
    id: 'doc-community',
    title: 'Community Certificate',
    tamil: 'சாதிச் சான்றிதழ்',
    description: 'Certificate issued by the Revenue Department / Tahsildar.',
  },
  {
    id: 'doc-income',
    title: 'Income Certificate',
    tamil: 'வருமானச் சான்றிதழ்',
    description: 'Recent income certificate of parent/guardian for relevant schemes.',
  },
  {
    id: 'doc-aadhaar',
    title: 'Aadhaar Card',
    tamil: 'ஆதார் அட்டை',
    description: 'Photocopy of student Aadhaar card and parent Aadhaar cards.',
  },
  {
    id: 'doc-photos',
    title: 'Passport Size Photographs',
    tamil: 'புகைப்படங்கள்',
    description: 'Recent colour passport-size photographs of the student.',
  },
  {
    id: 'doc-address',
    title: 'Address Proof',
    tamil: 'முகவரிச் சான்று',
    description: 'Family Ration Card, Voter ID, EB Card, or registered residential proof.',
  },
];

export const rteAdmissionInfo = {
  title: 'RTE ADMISSION INFORMATION',
  subtitle: 'Right of Children to Free and Compulsory Education Act (2026–2027)',
  eligibilityBirthPeriod: '01-08-2022 to 31-07-2023',
  residentialCriteria: 'Residential address should be within 1-Kilometer from the school',
  portalUrl: 'https://righttoeducation.in/resources/states/tamil-nadu',
  portalLabel: 'righttoeducation.in',
  scheduleNote:
    'Application dates shown in the official poster: 20-04-2026 to 18-05-2026. Please check the Tamil Nadu RTE portal or visit the school office for current official schedule.',
};

export const schoolEventsTimeline = [
  {
    title: '18th Annual Day Celebration',
    category: 'ANNUAL EVENT',
    highlight: 'Flagship Event',
    description:
      'Grand evening of cultural dances, drama, student speeches, prize distribution by distinguished guests, and annual report presentation.',
    image: '/images/events/18th-annual-day-invitation.jpeg',
  },
  {
    title: 'Pongal & Cultural Celebrations',
    category: 'FESTIVAL',
    highlight: 'Tradition & Heritage',
    description:
      'Students and teachers celebrate harvest traditions with vibrant floral Kolam creations, sweet Pongal preparation, and cultural programs.',
    image: '/images/events/cultural-celebration-kolam.jpeg',
  },
  {
    title: 'Annual Educational Tours',
    category: 'OUTDOOR LEARNING',
    highlight: 'Experiential Journey',
    description:
      'Outdoor learning tours to theme attractions like Paravasa Ulagam and UNESCO heritage monuments like Mahabalipuram, fostering camaraderie.',
    image: '/images/students/educational-trip-paravasa-uganam.jpeg',
  },
  {
    title: 'Admissions for Academic Year 2026–2027',
    category: 'ADMISSIONS',
    highlight: 'Enrolling Now',
    description:
      'Admissions are open for Pre-KG, LKG, UKG and Standards I through V. Visit the school office or submit an enquiry online.',
    image: '/images/admissions/admissions-2026-2027-poster.jpeg',
  },
];
