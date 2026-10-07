import { useEffect, useMemo, useState, type FormEvent } from 'react';
import {
  ArrowDown, ArrowLeft, ArrowRight, Bus, Check, ChevronRight, Computer,
  Droplets, Heart, Mail, MapPin, Menu, Phone, School, ShieldCheck, Sparkles,
  X, BookOpen, Languages, Pencil, HandHeart, CalendarDays, Dumbbell,
} from 'lucide-react';

const image = (path: string) => `/images/${path}`;
const schoolName = 'SRI VIVEKANANDA SCHOOL';
const emailAddress = 'vivekanandaspt@gmail.com';
const phoneNumbers = ['99656 36999', '95971 91909', '73733 31600', '95971 91929'];
const navItems = [
  ['HOME', '#home'], ['ABOUT', '#about'], ['ACADEMICS', '#academics'], ['CAMPUS', '#campus'],
  ['FACILITIES', '#facilities'], ['ACTIVITIES', '#activities'], ['ADMISSIONS', '#admissions'],
  ['GALLERY', '#gallery'], ['CONTACT', '#contact'],
];

type GalleryImage = { src: string; alt: string; title: string; category: string };
const galleryImages: GalleryImage[] = [
  { src: 'campus/school-building-roadside.jpeg', alt: 'School building viewed from the roadside with coconut palms', title: 'A school that feels like home', category: 'CAMPUS' },
  { src: 'campus/aerial-village-view.jpeg', alt: 'Aerial view of the green village landscape around Singarapettai', title: 'Our neighbourhood', category: 'CAMPUS' },
  { src: 'campus/aerial-campus-view.jpeg', alt: 'Aerial view of the school campus among palm trees', title: 'Campus from above', category: 'CAMPUS' },
  { src: 'campus/campus-courtyard.jpeg', alt: 'Open courtyard and airy school building', title: 'Open spaces to learn', category: 'CAMPUS' },
  { src: 'campus/campus-building-evening.jpeg', alt: 'School building in warm late-afternoon light', title: 'School in the evening light', category: 'CAMPUS' },
  { src: 'students/educational-trip-paravasa-uganam.jpeg', alt: 'Students and teachers together on an educational trip to Paravasa Uganam', title: 'Learning beyond the classroom', category: 'STUDENTS' },
  { src: 'students/educational-trip-outdoor.jpeg', alt: 'Students and teachers on an outdoor educational visit', title: 'A day of discovery', category: 'EDUCATIONAL TOURS' },
  { src: 'events/cultural-celebration-kolam.jpeg', alt: 'Students gathered around a colourful kolam during a school celebration', title: 'Culture, colour and community', category: 'ACTIVITIES' },
  { src: 'events/school-celebration.jpeg', alt: 'Children gathered in the school courtyard for a celebration', title: 'Celebrating together', category: 'EVENTS' },
];
const galleryCategories = ['ALL', 'CAMPUS', 'STUDENTS', 'EVENTS', 'ACTIVITIES', 'EDUCATIONAL TOURS', 'ADMISSIONS'];
const notices = [
  { label: 'Admissions information', detail: 'For current availability and application guidance, please contact the school directly.' },
  { label: 'RTE information', detail: 'For official application details, use the Tamil Nadu RTE portal or contact the school.' },
];

function SectionHeading({ label, title, copy }: { label: string; title: string; copy?: string }) {
  return <><span className="eyebrow">{label}</span><h2 className="section-title">{title}</h2>{copy && <p className="section-copy">{copy}</p>}</>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState('ALL');
  const [activeImage, setActiveImage] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState('');
  const visibleGallery = useMemo(() => {
    return galleryImages
      .map((item, index) => ({ ...item, originalIndex: index }))
      .filter(item => category === 'ALL' || item.category === category);
  }, [category]);

  useEffect(() => {
    if (activeImage === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveImage(null);
      if (event.key === 'ArrowRight') setActiveImage(current => current === null ? null : (current + 1) % galleryImages.length);
      if (event.key === 'ArrowLeft') setActiveImage(current => current === null ? null : (current - 1 + galleryImages.length) % galleryImages.length);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [activeImage]);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parent = String(data.get('parent') || '').trim();
    const student = String(data.get('student') || '').trim();
    const applying = String(data.get('class') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!parent || !student || !applying || !phone || !email || !message) {
      setFormStatus('Please complete every required field before continuing.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormStatus('Please enter a valid email address.');
      return;
    }
    if (!/^[+()\d\s-]{7,18}$/.test(phone)) {
      setFormStatus('Please enter a valid phone number.');
      return;
    }
    const subject = encodeURIComponent(`Enquiry for ${applying} — ${student}`);
    const body = encodeURIComponent(
      `Parent Name: ${parent}\nStudent Name: ${student}\nClass Applying For: ${applying}\nPhone Number: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    );
    setFormStatus('Your email app will open with this enquiry addressed to the school. Please review and send it there.');
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="site-shell">
      <div className="topline"><div className="container topline-inner">
        <span>Welcome to a school built on learning, character & care</span>
        <div className="topline-contact"><a href={`mailto:${emailAddress}`}>{emailAddress}</a><a href="https://rte.tnschools.gov.in" target="_blank" rel="noreferrer">RTE information ↗</a></div>
      </div></div>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand" onClick={() => setMenuOpen(false)} aria-label="Sri Vivekananda School home">
            <span className="brand-mark" aria-hidden="true">SV</span>
            <span className="brand-name">SRI VIVEKANANDA<small>SCHOOL</small></span>
          </a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, href]) => <a className={label === 'ADMISSIONS' ? 'nav-admissions-link' : undefined} key={label} href={href} onClick={() => setMenuOpen(false)}>{label}{label === 'ADMISSIONS' && <span className="mobile-admissions-open"> OPEN</span>}</a>)}
          </nav>
          <a className="nav-cta" href="#admissions">ADMISSIONS OPEN <ChevronRight size={15} /></a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-inner">
            <div className="reveal">
              <div className="hero-kicker">A thoughtful start for every child</div>
              <h1>SRI VIVEKANANDA <span>SCHOOL</span></h1>
              <p className="hero-location">SKR NAGAR, SINGARAPETTAI</p>
              <p className="hero-tagline">LEARNING&nbsp; • &nbsp;CHARACTER&nbsp; • &nbsp;EXCELLENCE</p>
              <p className="hero-copy">Providing a strong foundation for young minds through quality education, discipline, creativity and holistic development.</p>
              <div className="hero-actions">
                <a className="btn" href="#about">Explore Our School <ChevronRight size={16} /></a>
                <a className="btn-light" href="#admissions">Admissions <ArrowDown size={15} /></a>
              </div>
            </div>
            <div className="hero-visual reveal">
              <img className="hero-photo" src={image('campus/campus-building-evening.jpeg')} alt="Sri Vivekananda school building in warm evening light" />
              <img className="hero-seal" src={image('logo/jsp-educational-trust-seal.jpeg')} alt="JSP Educational Trust seal" />
              <div className="hero-note"><small>At the heart of it all</small>Little steps.<br />Bright futures.</div>
            </div>
          </div>
        </section>
        <div className="welcome-strip"><div className="container welcome-strip-inner"><Sparkles size={17} /><span>From a child’s first classroom to confident early learning — <b>we grow together.</b></span></div></div>

        <section className="section" id="about">
          <div className="container about-grid">
            <div className="about-photos">
              <img className="about-photo" src={image('campus/campus-courtyard.jpeg')} alt="Open courtyard framed by the school’s airy classrooms" />
              <img className="about-inset" src={image('campus/school-building-roadside.jpeg')} alt="The school building along the tree-lined road" />
              <img className="about-seal" src={image('logo/jsp-educational-trust-seal.jpeg')} alt="JSP Educational Trust seal" />
            </div>
            <div className="about-content">
              <SectionHeading label="WELCOME TO" title={schoolName} copy="At Sri Vivekananda School, foundational learning is about more than lessons. It is where children begin to trust their own ideas, find their voice and learn to care for the people around them." />
              <p className="section-copy">We nurture confidence, discipline, communication and creativity alongside good values. With patient guidance and a welcoming school community, each child is encouraged to take the next step — curious, capable and ready to learn.</p>
              <div className="values-row">
                <div className="value-item"><strong>Confidence</strong><span>Try, explore, express</span></div>
                <div className="value-item"><strong>Discipline</strong><span>Build thoughtful habits</span></div>
                <div className="value-item"><strong>Good values</strong><span>Grow with consideration</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section why">
          <div className="container">
            <div className="why-header">
              <div><SectionHeading label="WHY CHOOSE US" title="A place to belong. A place to become." /></div>
              <p className="section-copy">A dependable foundation for families, with a childhood that makes room for learning, friendship and joyful discovery.</p>
            </div>
            <div className="why-grid">
              <div className="why-lead"><span className="eyebrow">More than the classroom</span><h3>Every day brings a chance to grow.</h3><p>Children learn best when they feel safe to ask, make, practise and try again. We bring foundational learning and character-building into the everyday life of school.</p></div>
              <div className="why-points">
                <article className="why-point"><div className="point-mark"><BookOpen size={17} /></div><h3>Strong educational foundation</h3><p>Foundational learning for young students from Pre KG through the early years.</p></article>
                <article className="why-point"><div className="point-mark"><Languages size={17} /></div><h3>Trilingual learning</h3><p>Tamil, English and Hindi are part of the school’s curriculum.</p></article>
                <article className="why-point"><div className="point-mark"><Heart size={17} /></div><h3>Spoken English development</h3><p>Spoken English training supports communication and confidence.</p></article>
                <article className="why-point"><div className="point-mark"><Pencil size={17} /></div><h3>Handwriting training</h3><p>Dedicated handwriting practice is part of the learning experience.</p></article>
                <article className="why-point"><div className="point-mark"><Sparkles size={17} /></div><h3>Extracurricular activities</h3><p>Computer training, karate, dance and yoga complement classroom learning.</p></article>
                <article className="why-point"><div className="point-mark"><ShieldCheck size={17} /></div><h3>Safe, supportive environment</h3><p>Children are encouraged to learn, participate and grow with good values.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="section academics" id="academics">
          <div className="container">
            <div className="academics-heading"><SectionHeading label="Learning journey" title="A thoughtful path through the early years." copy="From the first routines of Pre KG to confident foundations for learning, children are supported at each stage." /></div>
            <div className="grade-row">
              {[['01','Pre KG','A gentle first step'],['02','LKG','Learning through discovery'],['03','UKG','Growing independence'],['04','Classes I–V','Foundations for what’s next']].map(([no,name,desc]) =>
                <article className="grade-card" key={no}><span className="grade-no">{no}</span><h3>{name}</h3><small>{desc}</small></article>)}
            </div>
            <div className="language-band"><div><h3>Three languages. A wider world.</h3><p className="section-copy" style={{fontSize:'.84rem',margin:'6px 0 0'}}>Trilingual learning supports communication and connection.</p></div><div className="language-pills"><span>Tamil</span><span>English</span><span>Hindi</span></div></div>
            <div className="skills-row"><span>Spoken English training</span><span>Handwriting training</span><span>Computer training</span><span>Foundational learning</span></div>
          </div>
        </section>

        <section className="section campus" id="campus">
          <div className="container">
            <div className="campus-head"><div><SectionHeading label="Our campus" title="A bright space to learn and play." copy="Airy classrooms, open surroundings and a spacious playground make room for active minds and growing friendships." /></div><a className="btn" href="#gallery">Explore the gallery <ChevronRight size={16} /></a></div>
            <div className="campus-mosaic">
              <figure><img src={image('campus/aerial-campus-view.jpeg')} alt="Aerial view of the school’s campus and surrounding palms" /><figcaption>Our campus, surrounded by the Singarapettai landscape</figcaption></figure>
              <figure><img src={image('campus/campus-building-wide.jpeg')} alt="Wide view of the school building and landscaped courtyard" /><figcaption>Open, airy school spaces</figcaption></figure>
              <figure><img src={image('campus/aerial-village-view.jpeg')} alt="Green fields and village homes around the school" /><figcaption>Rooted in our local community</figcaption></figure>
            </div>
            <div className="campus-foot"><span>SKR Nagar, Singarapettai — a familiar place to learn and grow.</span><span>Visit us to learn more about the school.</span></div>
          </div>
        </section>

        <section className="section facilities" id="facilities">
          <div className="container facility-wrap">
            <div className="facility-intro"><SectionHeading label="Everyday essentials" title="Facilities that support a full school day." copy="The practical foundations children and families need — provided with care and a focus on learning." /><a className="btn" style={{marginTop:25}} href="#contact">Ask us about facilities <ChevronRight size={16} /></a></div>
            <div className="facility-list">
              <article className="facility-item"><div className="facility-icon"><School size={18}/></div><div><h3>Airy classrooms</h3><p>Open classroom spaces for daily learning.</p></div></article>
              <article className="facility-item"><div className="facility-icon"><Dumbbell size={18}/></div><div><h3>Spacious playground</h3><p>Room for movement, games and play.</p></div></article>
              <article className="facility-item"><div className="facility-icon"><Droplets size={18}/></div><div><h3>Purified drinking water</h3><p>Purified water available at school.</p></div></article>
              <article className="facility-item"><div className="facility-icon"><Bus size={18}/></div><div><h3>Transportation</h3><p>Bus facility available; contact school for details.</p></div></article>
              <article className="facility-item"><div className="facility-icon"><Computer size={18}/></div><div><h3>Computer training</h3><p>Early familiarity with computers and learning.</p></div></article>
              <article className="facility-item"><div className="facility-icon"><Languages size={18}/></div><div><h3>Language learning</h3><p>Spoken English practice alongside trilingual learning.</p></div></article>
              <article className="facility-item"><div className="facility-icon"><Pencil size={18}/></div><div><h3>Handwriting training</h3><p>Guided practice to build confident writing.</p></div></article>
              <article className="facility-item"><div className="facility-icon"><HandHeart size={18}/></div><div><h3>Activities beyond lessons</h3><p>Extracurricular activities for wider growth.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section activities" id="activities">
          <div className="container activities-grid">
            <img className="activity-photo" src={image('students/educational-trip-paravasa-uganam.jpeg')} alt="School children and teachers sharing a group moment on an educational trip" />
            <div className="activities-content">
              <SectionHeading label="Student life" title="Learning has many lovely shapes." copy="A school day can be a new idea, a shared celebration, a first performance or a game played together. Student life makes space for all of it." />
              <div className="activity-chips">
                <span className="activity-chip">Educational trips</span><span className="activity-chip">Cultural activities</span><span className="activity-chip">Celebrations</span><span className="activity-chip">Student activities</span><span className="activity-chip">Sports</span><span className="activity-chip">Yoga</span><span className="activity-chip">Dance</span><span className="activity-chip">Karate</span><span className="activity-chip">Computer training</span>
              </div>
              <div className="annual-card"><div className="annual-icon"><CalendarDays size={22}/></div><div><strong>School celebrations</strong><span>Students take part in shared school activities and celebrations.</span></div></div>
            </div>
          </div>
        </section>

        <section className="section admissions" id="admissions">
          <div className="container admission-grid">
            <div className="admission-panel">
              <span className="admission-label">Admissions · 2026–2027</span>
              <h2 className="section-title">ADMISSIONS OPEN</h2>
              <p>Admissions for the 2026–2027 academic year are for Pre KG to V Std. Contact the school to ask about availability, the application process and next steps.</p>
              <div className="grade-tags"><span>Pre KG</span><span>LKG</span><span>UKG</span><span>Classes I–V</span></div>
              <a className="btn" href="#contact">Enquire about admission <ChevronRight size={16} /></a>
            </div>
            <div className="admission-detail">
              <h3>Documents listed for RTE applications</h3>
              <p className="section-copy" style={{fontSize:'.87rem',margin:'0 0 18px'}}>The poster lists these documents. Please confirm current requirements and application details with the official portal or school.</p>
              <ul className="document-list">
                {['Birth Certificate','Community Certificate','Income Certificate','Aadhaar Card','Passport Size Photo','Address Proof'].map(doc => <li key={doc}><Check size={15}/>{doc}</li>)}
              </ul>
              <p className="admission-note">Official RTE portal: <a className="admission-link" href="https://rte.tnschools.gov.in" target="_blank" rel="noreferrer">rte.tnschools.gov.in</a>. Any poster dates are archived references and are not shown as current application deadlines.</p>
              <div className="notice-box"><strong>School information</strong>
                {notices.map((notice) => <p key={notice.label}><b>{notice.label}:</b> {notice.detail}</p>)}
                <p>Contact the school directly for current information. No unconfirmed dates, fees or availability are published here.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section leadership">
          <div className="container">
            <div className="leadership-head"><SectionHeading label="School leadership" title="Guided by care and commitment." copy="A leadership team dedicated to the school community and children’s learning journey." /></div>
            <div className="leaders">
              <article className="leader-card"><div className="leader-initials" aria-hidden="true">RJ</div><div><span className="leader-role">Chairman</span><h3>R. Jayakumar</h3><p className="leader-qualifications">M.Sc., M.Phil., B.Ed., DPCS., DIM.</p></div></article>
              <article className="leader-card"><div className="leader-initials" aria-hidden="true">CJ</div><div><span className="leader-role">Correspondent</span><h3>Mrs. C. Sathiya Jayakumar</h3><p className="leader-qualifications">M.Sc. (Psy), M.Sc. (MB), M.Ed., M.Phil.</p></div></article>
            </div>
          </div>
        </section>

        <section className="section gallery" id="gallery">
          <div className="container">
            <div className="gallery-head"><div><SectionHeading label="Moments at school" title="A closer look at our school life." copy="Campus views, learning journeys and celebrations from the school community." /></div><span className="eyebrow" style={{color:'var(--navy)'}}>{galleryImages.length} images</span></div>
            <div className="filters" role="group" aria-label="Filter gallery by category">
              {galleryCategories.map(item => <button type="button" key={item} className={`filter-btn ${category === item ? 'active' : ''}`} onClick={() => setCategory(item)}>{item}</button>)}
            </div>
            {visibleGallery.length > 0 ? <div className="gallery-grid">
              {visibleGallery.map((item) => <button type="button" key={item.src} className="gallery-card" onClick={() => setActiveImage(item.originalIndex)} aria-label={`Open image: ${item.title}`}>
                <img src={image(item.src)} alt={item.alt} loading="lazy" /><span className="gallery-caption"><span className="gallery-category">{item.category}</span>{item.title}</span>
              </button>)}
            </div> : <p className="gallery-empty">No admissions photos are included in this gallery.</p>}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-grid">
            <div>
              <SectionHeading label="Get in touch" title="Let’s talk about your child’s next step." copy="For admission questions, current school information or to arrange a visit, please reach out to the school." />
              <div className="contact-details">
                <div className="contact-line"><MapPin className="contact-line-icon" size={20}/><div><strong>Official address</strong><span>SRI VIVEKANANDA SCHOOL<br/>SKR NAGAR, SINGARAPETTAI - 635 307,<br/>TAMIL NADU, INDIA</span></div></div>
                <div className="contact-line"><Phone className="contact-line-icon" size={20}/><div><strong>Call the school</strong><span className="phone-list">{phoneNumbers.map((phone) => <a key={phone} href={`tel:${phone.replaceAll(' ','')}`}>{phone}</a>)}</span></div></div>
                <div className="contact-line"><Mail className="contact-line-icon" size={20}/><div><strong>Email</strong><a href={`mailto:${emailAddress}`}>{emailAddress}</a></div></div>
              </div>
              <div className="contact-actions">
                <a className="btn" href="tel:9965636999" data-testid="link-call-us">Call Us <Phone size={15}/></a>
                <a className="contact-action" href={`mailto:${emailAddress}`} data-testid="link-email-us">Email Us <Mail size={15}/></a>
                <a className="contact-action" href="#enquiry-form" data-testid="link-admission-enquiry">Enquiry <ChevronRight size={15}/></a>
              </div>
              <div className="map-placeholder" aria-label="Map placeholder; exact school coordinates have not been confirmed">
                <MapPin size={22} aria-hidden="true"/>
                <div><strong>Find our school</strong><span>SKR Nagar, Singarapettai — 635 307</span><small>Map location will be added when the exact school coordinates are confirmed.</small></div>
              </div>
            </div>
            <form className="contact-form" id="enquiry-form" onSubmit={submitEnquiry} noValidate>
              <h3>Send an enquiry</h3><p>Complete the form and your email app will open with the message ready to send.</p>
              <div className="form-grid">
                <div className="field"><label htmlFor="parent">Parent Name *</label><input id="parent" name="parent" autoComplete="name" required /></div>
                <div className="field"><label htmlFor="student">Student Name *</label><input id="student" name="student" required /></div>
                <div className="field"><label htmlFor="class">Class Applying For *</label><select id="class" name="class" required defaultValue=""><option value="" disabled>Select a class</option><option>Pre KG</option><option>LKG</option><option>UKG</option><option>Class I</option><option>Class II</option><option>Class III</option><option>Class IV</option><option>Class V</option></select></div>
                <div className="field"><label htmlFor="phone">Phone Number *</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
                <div className="field full"><label htmlFor="email">Email *</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
                <div className="field full"><label htmlFor="message">Message *</label><textarea id="message" name="message" required placeholder="How can we help?"></textarea></div>
              </div>
              <button className="btn" type="submit">Continue to email <Mail size={15}/></button>
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div><div className="footer-brand"><span className="footer-brand-mark" aria-hidden="true">SV</span><strong>{schoolName}</strong></div><p className="footer-about">Learning • Character • Excellence<br/>A welcoming foundation for children at SKR Nagar, Singarapettai.</p></div>
            <div className="footer-col"><h3>Explore</h3><div className="footer-links">{navItems.map(([label,href])=><a key={label} href={href}>{label}</a>)}</div></div>
            <div className="footer-col"><h3>Contact the school</h3><div className="footer-contact"><span>SKR NAGAR, SINGARAPETTAI - 635 307,<br/>TAMIL NADU, INDIA</span>{phoneNumbers.map(phone=><a key={phone} href={`tel:${phone.replaceAll(' ','')}`}>{phone}</a>)}<a href={`mailto:${emailAddress}`}>{emailAddress}</a><a href="https://rte.tnschools.gov.in" target="_blank" rel="noreferrer">Official RTE portal ↗</a></div></div>
          </div>
          <div className="footer-bottom"><span>© 2026 Sri Vivekananda School. All Rights Reserved.</span><span>SKR Nagar · Singarapettai · Tamil Nadu</span></div>
        </div>
      </footer>

      {activeImage !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={(event) => { if (event.target === event.currentTarget) setActiveImage(null); }}>
        <div className="lightbox-inner">
          <button className="lightbox-close" type="button" aria-label="Close gallery" onClick={() => setActiveImage(null)}><X size={21}/></button>
          <figure><img src={image(galleryImages[activeImage].src)} alt={galleryImages[activeImage].alt}/><figcaption>{galleryImages[activeImage].title} · {galleryImages[activeImage].category}</figcaption></figure>
          <div className="lightbox-controls"><button type="button" aria-label="Previous image" onClick={() => setActiveImage((activeImage - 1 + galleryImages.length) % galleryImages.length)}><ArrowLeft size={19}/></button><span className="lightbox-count">{activeImage + 1} / {galleryImages.length}</span><button type="button" aria-label="Next image" onClick={() => setActiveImage((activeImage + 1) % galleryImages.length)}><ArrowRight size={19}/></button></div>
        </div>
      </div>}
    </div>
  );
}

export default App;
