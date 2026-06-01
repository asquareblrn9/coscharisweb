import { useEffect, useMemo, useState } from 'react';
import {
  BadgeDollarSign,
  Boxes,
  BriefcaseBusiness,
  Building2,
  BusFront,
  Car,
  Clock,
  Cpu,
  Cross,
  Droplets,
  Globe2,
  Handshake,
  HeartPulse,
  Landmark,
  Layers,
  Leaf,
  Mail,
  MapPin,
  MapPinned,
  PaintRoller,
  Paintbrush,
  Package,
  Phone,
  Search,
  ShieldCheck,
  Sprout,
  Stethoscope,
  Target,
  Tractor,
  Users,
  Wrench,
} from 'lucide-react';

const iconMap = {
  automotive: Car,
  globe: Globe2,
  technology: Cpu,
  farms: Sprout,
  medicals: Cross,
  beverages: Droplets,
  mobility: BusFront,
  refinishes: Paintbrush,
  repair: Wrench,
  building: Building2,
  target: Target,
  companies: Landmark,
  users: Users,
  layers: Layers,
  map: MapPin,
  value: BadgeDollarSign,
  briefcase: BriefcaseBusiness,
  tractor: Tractor,
  health: HeartPulse,
  shield: ShieldCheck,
  clock: Clock,
  partnership: Handshake,
  leaf: Leaf,
  package: Package,
  boxes: Boxes,
  stethoscope: Stethoscope,
  paintRoller: PaintRoller,
  phone: Phone,
  mail: Mail,
  mapPinned: MapPinned,
};

const navItems = [
  { label: 'Home', slug: 'home' },
  { label: 'About Us', slug: 'about' },
  { label: 'Our Companies', slug: 'home', hash: 'companies' },
  { label: 'Sustainability', slug: 'sustainability' },
  { label: 'Investors', slug: 'investors' },
  { label: 'News & Insights', slug: 'home', hash: 'news' },
];

const companies = [
  {
    slug: 'motors',
    name: 'Coscharis Motors Ltd',
    image: '/assets/generated-motors.png',
    hero: '/assets/generated-motors.png',
    color: '#e32636',
    icon: 'automotive',
    description: 'Distributors of premium automotive brands and provider of world-class automotive services.',
    summary: 'Nigeria\'s premier automotive dealership representing world-class brands. Luxury. Performance. Reliability. All under one roof.',
    aboutTitle: 'More than cars. A commitment to excellence.',
    about: [
      'Since 1977, Coscharis Motors PLC has been Nigeria\'s trusted partner in mobility. We represent five luxury and two value brands, delivering vehicles and mobility solutions across Nigeria.',
      'Our business is built around ultra-modern showrooms, state-of-the-art aftersales facilities, specialized technicians, genuine parts, accessories and lifestyle solutions.',
    ],
    metrics: ['7+ Dealerships', 'Nationwide Presence', 'State-of-the-Art Showrooms', 'Premium Aftersales', 'Genuine Parts', 'Dedicated Service'],
    services: ['New Car Sales', 'Test Drive', 'Aftersales & Service', 'Genuine Parts', 'Finance Solutions', 'Trade-in'],
  },
  {
    slug: 'ghana',
    name: 'Coscharis Ghana Ltd',
    image: '/assets/generated-ghana.png',
    hero: '/assets/generated-ghana.png',
    color: '#0b285a',
    icon: 'globe',
    description: 'Delivering quality automotive solutions and services across Ghana.',
    summary: 'Coscharis Ghana Ltd is the leading distributor of genuine automotive spare parts, lubricants and premium car care products in Ghana and across West Africa.',
    aboutTitle: 'Powering Ghana\'s Automotive Industry Since 1992',
    about: [
      'Coscharis Ghana Ltd, a member of Coscharis Group, Lagos Nigeria, was established in 1992 to build a strong distribution network across West Africa for genuine automotive spare parts, accessories and related products.',
      'From our humble beginnings at Abossey Okai market, we have grown to become the leading distributor of ABRO products in Ghana.',
    ],
    metrics: ['30+ Years of Experience', 'Official Distributors', 'Quality Products You Can Trust', 'Extensive Nationwide Network'],
    services: ['Appearance Products', 'Car Air Fresheners', 'Cleaners and Degreasers', 'Engine and Fuel Additives', 'Gasket Makers and Sealants', 'Spray Paints and Removers'],
  },
  {
    slug: 'technologies',
    name: 'Coscharis Technologies Ltd',
    image: '/assets/generated-technologies.png',
    hero: '/assets/generated-technologies.png',
    color: '#4bbbc2',
    icon: 'technology',
    description: 'Innovative technology solutions driving digital transformation and efficiency.',
    summary: 'Delivering innovative technology solutions and distribution excellence across Nigeria and the West African market.',
    aboutTitle: 'We are a lifestyle brand.',
    about: [
      'Through our distribution of reliable hardware and services, Coscharis Technologies caters to information, communication and technology markets within Nigeria\'s public and private sectors.',
      'Our aim is to ensure we are constantly rewarding all stakeholders with value every step of the way.',
    ],
    metrics: ['Trusted Distribution', 'Expert Support', 'Solutions for Every Need', 'Pan-West African Presence'],
    services: ['Computers', 'Accessories', 'Enterprise Solutions', 'Technical Support', 'Distribution', 'Brand Partnerships'],
  },
  {
    slug: 'farms',
    name: 'Coscharis Farms Ltd',
    image: '/assets/generated-farms.png',
    hero: '/assets/generated-farms.png',
    color: '#4f7d36',
    icon: 'farms',
    description: 'Sustainable farming and agribusiness practices for food security and economic growth.',
    summary: 'Driving food security and economic growth through large-scale rice production, modern innovation and sustainable farming practices.',
    aboutTitle: 'Growing today for a sustainable tomorrow.',
    about: [
      'Coscharis Farms, strategically located within Anambra State, is home to hygienically fertilized and cultured rice grains processed by in-house experts into 100% sortexed long grain parboiled rice.',
      'The farm is currently growing on 2,500 hectares of land with anticipated expansion through out-growers schemes.',
    ],
    metrics: ['2,500+ Hectares Under Cultivation', 'Modern Mechanisation', '20,000 MT Target Production', 'Empowering Communities'],
    services: ['COSRICE', 'Long Grain Parboiled Rice', 'Hygienically Processed', 'Available Nationwide'],
  },
  {
    slug: 'medicals',
    name: 'Coscharis Medicals Ltd',
    image: '/assets/generated-medicals.png',
    hero: '/assets/generated-medicals.png',
    color: '#f08224',
    icon: 'medicals',
    description: 'Providing quality healthcare products and services for better lives.',
    summary: 'Delivering advanced healthcare solutions and exceptional service for better lives.',
    aboutTitle: 'Committed to healthcare. Dedicated to life.',
    about: [
      'Coscharis Medical & Foods Limited operates as a professional service to healthcare, providing medical consultancy, pharmaceutical and diagnostic solutions to hospitals and homes.',
      'With offices in Lagos, Abuja, Port Harcourt and Enugu, Coscharis Medical leverages strong international relationships and vibrant local networks to deliver on our value promise.',
    ],
    metrics: ['25+ Years of Experience', '500+ Hospitals & Healthcare Facilities Served', '100+ Global Brands Partnered', '24/7 Technical Support'],
    services: ['Healthcare Solutions', 'Biomedical Support', 'Training & Development', 'Quality Assurance', 'Strong Partnerships', 'Nationwide Presence'],
  },
  {
    slug: 'beverages',
    name: 'Eden Beverages Ltd',
    image: '/assets/generated-beverages.png',
    hero: '/assets/generated-beverages.png',
    color: '#7657b9',
    icon: 'beverages',
    description: 'Producer of high-quality beverages focused on refreshment and customer satisfaction.',
    summary: 'Delivering clean, safe and refreshing beverages with quality you can trust.',
    aboutTitle: 'Quality beverages. Trusted by millions.',
    about: [
      'Eden Beverages was founded with a vision to deliver clean and safe to consume water and other beverages at the most competitive prices with the ultimate goal of satisfying consumers.',
      'Our manufacturing outfits are located in Lagos and Anambra, from which our products are distributed nationwide.',
    ],
    metrics: ['22+ Years of Excellence', 'World-Class Production Standards', 'Manufacturing in Lagos & Anambra', 'Nationwide Distribution Network'],
    services: ['Sachet Water', 'Water Dispenser 18.9L', 'Table Water 0.5L', 'Table Water 0.75L', 'Table Water 1.5L', 'Creamy Yogurt'],
  },
  {
    slug: 'mobility',
    name: 'Coscharis Mobility Ltd',
    image: '/assets/generated-mobility.png',
    hero: '/assets/generated-mobility.png',
    color: '#e32636',
    icon: 'mobility',
    description: 'Smart mobility solutions that connect people and move businesses forward.',
    summary: 'Smart mobility solutions. Every journey. Every time.',
    aboutTitle: 'Driving mobility. Delivering value.',
    about: [
      'Coscharis Mobility was incorporated in 2013 as a vessel for providing solutions to consumer specific needs.',
      'Our services include car rentals, leasing, logistics, haulage services, drivers and staff outsourcing, fleet management and corporate mobility solutions.',
    ],
    metrics: ['Car Rentals', 'Leasing Solutions', 'Logistics & Haulage', 'Drivers & Staff', 'Fleet Management', 'Corporate Solutions'],
    services: ['Sedan', 'SUV', 'Luxury', 'Vans', 'Pickup', 'Fleet Management'],
  },
  {
    slug: 'refinishes',
    name: 'First System Refinishes Ltd',
    image: '/assets/generated-refinishes.png',
    hero: '/assets/generated-refinishes.png',
    color: '#0b285a',
    icon: 'refinishes',
    description: 'Premium refinishing products and solutions for the automotive industry.',
    summary: 'Premium automotive refinish products and solutions for a flawless finish.',
    aboutTitle: 'First System Refinishes Ltd.',
    about: [
      'First System Refinishes Ltd was incorporated in the year 2005 as a Limited Liability Company in Nigeria.',
      'We provide high quality automotive refinish products, equipment and technical support that meet international standards.',
    ],
    metrics: ['Our Mission', 'Our Core Value', 'Our Dealers'],
    services: ['Polishing Compound', 'Spray-Booth', '3M Products', 'EMM', 'SIKKENS Products', 'CARTEC'],
  },
  {
    slug: 'alpha-auto',
    name: 'Alpha Auto Refinishes Ltd',
    image: '/assets/generated-alpha-auto.png',
    hero: '/assets/generated-alpha-auto.png',
    color: '#4bbbc2',
    icon: 'repair',
    description: 'Expert auto body repair and refinishing services with precision and quality.',
    summary: 'Expert refinishing. Flawless results. Restoring vehicles to their original glory.',
    aboutTitle: 'Excellence in automotive refinishing and body repair.',
    about: [
      'Alpha Auto Refinishes Ltd provides superior auto body repair and refinishing services for all types of vehicles.',
      'With state-of-the-art equipment, high quality materials and a team of skilled professionals, we restore your vehicle to its pre-accident condition with precision and care.',
    ],
    metrics: ['Expert Body Repair', 'Premium Paint Finish', 'Advanced Equipment', 'Quality Assurance', 'Timely Delivery', 'Customer Satisfaction'],
    services: ['Collision Repair', 'Bumper Repair', 'Dent Removal', 'Full Body Refinish', 'Scratch Repair', 'Paint Protection'],
  },
];

const companyBySlug = new Map(companies.map((company) => [company.slug, company]));

const pages = ['home', 'home-dark', 'about', 'leadership', 'investors', 'sustainability', 'contact', ...companies.map((company) => company.slug)];

const stats = [
  ['48+', 'Years of Excellence', 'target'],
  ['10+', 'Companies', 'companies'],
  ['5000+', 'Employees', 'users'],
  ['Multiple', 'Sectors', 'layers'],
  ['Nationwide', 'Presence', 'map'],
  ['Value', 'for Money', 'value'],
];

const news = [
  ['May 20, 2025', 'Coscharis Group Reports Strong Performance for Q1 2025', '/assets/generated-group-hero.png'],
  ['May 15, 2025', 'Expanding Mobility Solutions Across Nigeria', '/assets/generated-mobility.png'],
  ['May 10, 2025', 'Driving Innovation Through Strategic Partnerships', '/assets/generated-technologies.png'],
  ['May 05, 2025', 'Coscharis Farms Expands Operations for Food Security', '/assets/generated-farms.png'],
];

function pageFromLocation() {
  const slug = window.location.pathname.replace(/^\/+/, '').replace(/\/+$/, '') || 'home';
  return pages.includes(slug) ? slug : 'home';
}

function App() {
  const [page, setPage] = useState(pageFromLocation);

  useEffect(() => {
    const onPopState = () => setPage(pageFromLocation());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    const title = companyBySlug.get(page)?.name || pageTitle(page);
    document.title = `${title} | Coscharis Group`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [page]);

  function navigate(slug, hash) {
    const next = pages.includes(slug) ? slug : 'home';
    window.history.pushState({}, '', next === 'home' ? '/' : `/${next}`);
    setPage(next);
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' }));
    }
  }

  const activeSection = useMemo(() => {
    if (page === 'home-dark') return <HomePage dark navigate={navigate} />;
    if (page === 'home') return <HomePage navigate={navigate} />;
    if (page === 'about') return <AboutPage navigate={navigate} />;
    if (page === 'leadership') return <LeadershipPage navigate={navigate} />;
    if (page === 'investors') return <InvestorsPage navigate={navigate} />;
    if (page === 'sustainability') return <SustainabilityPage navigate={navigate} />;
    if (page === 'contact') return <ContactPage />;
    return <CompanyPage company={companyBySlug.get(page)} navigate={navigate} />;
  }, [page]);

  return (
    <div className={page === 'home-dark' ? 'app app-dark' : 'app'}>
      <Header page={page} navigate={navigate} />
      {activeSection}
      <Footer navigate={navigate} />
    </div>
  );
}

function pageTitle(slug) {
  const titles = {
    home: 'Home',
    'home-dark': 'Home Dark',
    about: 'About Coscharis Group',
    leadership: 'Group Executive Management',
    investors: 'Investors',
    sustainability: 'Sustainability',
    contact: 'Contact Us',
  };
  return titles[slug] || 'Home';
}

function IconCircle({ name, accent, className = 'mini-icon', size = 22 }) {
  const Icon = iconMap[name] || Target;
  return (
    <span className={className} style={accent ? { '--accent': accent } : undefined}>
      <Icon size={size} strokeWidth={2.2} />
    </span>
  );
}

function SocialIcons() {
  return (
    <div className="socials" aria-label="Social media links">
      <span aria-label="LinkedIn"><LinkedinMark /></span>
      <span aria-label="YouTube"><YoutubeMark /></span>
      <span aria-label="Facebook"><FacebookMark /></span>
    </div>
  );
}

function LinkedinMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.9 20.5H3.2V8.7h3.7v11.8ZM5.1 7.1A2.1 2.1 0 1 1 5.1 2.9a2.1 2.1 0 0 1 0 4.2Zm15.7 13.4h-3.7v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.8H9.3V8.7h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.4 2.5 4.4 5.7v6.4Z" />
    </svg>
  );
}

function YoutubeMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21.4 7.1a3 3 0 0 0-2.1-2.1C17.4 4.5 12 4.5 12 4.5s-5.4 0-7.3.5a3 3 0 0 0-2.1 2.1A31.5 31.5 0 0 0 2.1 12a31.5 31.5 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.9.5 7.3.5 7.3.5s5.4 0 7.3-.5a3 3 0 0 0 2.1-2.1 31.5 31.5 0 0 0 .5-4.9 31.5 31.5 0 0 0-.5-4.9ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.2 8.2V6.6c0-.8.5-1 1-1h2.4V2.2L14.3 2c-3.3 0-4.1 2-4.1 4.1v2.1H7.5V12h2.7v10h4V12h3.1l.5-3.8h-3.6Z" />
    </svg>
  );
}

function serviceIcon(service) {
  if (/car|vehicle|sedan|suv|luxury|van|pickup|drive|rental|fleet|trade/i.test(service)) return 'automotive';
  if (/health|medical|hospital|biomedical|diagnostic|training/i.test(service)) return 'stethoscope';
  if (/water|yogurt|beverage/i.test(service)) return 'beverages';
  if (/rice|farm|grain|hectare|cultivation|mechanisation|community/i.test(service)) return 'farms';
  if (/paint|spray|refinish|collision|bumper|dent|scratch/i.test(service)) return 'paintRoller';
  if (/parts|product|package|distribution|brand/i.test(service)) return 'package';
  if (/support|technical/i.test(service)) return 'wrench';
  return 'briefcase';
}

function Header({ page, navigate }) {
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <button type="button" onClick={() => navigate('home-dark')}>...Value for Money</button>
          <div className="topbar-links">
            <button type="button">Media Centre</button>
            <button type="button" onClick={() => navigate('investors')}>Investor Relations</button>
            <button type="button">Careers</button>
            <button type="button" onClick={() => navigate('contact')}>Contact Us</button>
            <SocialIcons />
          </div>
        </div>
      </div>
      <header className="header">
        <div className="container header-inner">
          <a href="/" className="brand">
            <img
              src="/assets/logonew1.svg"
              width="120"
              height="40"
              alt="Coscharis Group"
            />
          </a>
          <nav className="main-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className={page === item.slug ? 'active' : ''}
                onClick={() => navigate(item.slug, item.hash)}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="header-actions">
            <button className="search-button" type="button" aria-label="Search"><Search size={22} /></button>
            <button className="btn primary" type="button" onClick={() => navigate('contact')}>Contact Us -&gt;</button>
          </div>
        </div>
      </header>
    </>
  );
}

function HomePage({ dark = false, navigate }) {
  return (
    <main>
      <Hero
        className={dark ? 'dark-hero' : ''}
        image="/assets/generated-group-hero.png"
        title="Building Legacies. Creating Value."
        text="A diversified group committed to excellence, innovation and sustainable value across multiple sectors."
        actions={[['Discover More', 'about']]}
        navigate={navigate}
      />
      <section className="section" id="companies">
        <SectionTitle title="Our Companies" center />
        <div className="container company-grid">
          {companies.map((company) => (
            <button className="company-card" key={company.slug} type="button" onClick={() => navigate(company.slug)}>
              <img src={company.image} alt="" />
              <div className="company-card-body">
                <IconCircle name={company.icon} accent={company.color} className="company-icon" />
                <div>
                  <h3>{company.name}</h3>
                  <p>{company.description}</p>
                  <span className="learn">Learn More -&gt;</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
      <AboutStrip navigate={navigate} />
      <NewsStrip />
      <Cta navigate={navigate} />
    </main>
  );
}

function AboutPage({ navigate }) {
  return (
    <main>
      <Hero
        image="/assets/generated-group-hero.png"
        eyebrow="About Coscharis Group"
        title="A legacy of excellence. A future of impact."
        text="Coscharis Group is a wholly owned Nigerian conglomerate with businesses and interests that span across key sectors of the economy."
        actions={[['Our Story', 'about'], ['Leadership', 'leadership']]}
        navigate={navigate}
      />
      <section className="section two-column">
        <div className="container split">
          <div>
            <SectionTitle title="From humble beginnings to a diversified Pan-African conglomerate." />
            <p>Founded in 1977 as a modest spare parts importation and distribution business, Coscharis Group has grown into one of Africa's most respected conglomerates.</p>
            <p>What began as a commitment to quality and reliability has evolved into a diversified portfolio of businesses that serve millions of customers, create thousands of jobs and contribute meaningfully to national development.</p>
            <button className="btn outline-dark" type="button" onClick={() => navigate('leadership')}>Meet Our Leaders -&gt;</button>
          </div>
          <StatsGrid />
        </div>
      </section>
      <section className="section dark-band">
        <div className="container split">
          <div className="quote-card">
            <span>Our Vision</span>
            <h2>To build an institution that will be timeless in its relevance.</h2>
          </div>
          <div>
            <SectionTitle title="Visionary leadership. Enduring values." />
            <p>Under the leadership of our Founder and President/CEO, Dr. Cosmas Maduka, CON, Coscharis Group has grown into a respected Pan-African brand, renowned for integrity, innovation and operational excellence.</p>
          </div>
        </div>
      </section>
      <Values />
    </main>
  );
}

function LeadershipPage({ navigate }) {
  const leaders = ['Dr. Cosmas Maduka', 'Mr. Josiah Samuel', 'Mr. Fred Amobi', 'Mr. Cosmas Jr. Maduka', 'Mr. Jonathan Maduka', 'Mr. Peter K. Maduka', 'Mr. Daniel Pinkrah', 'Mr. Sunday Mukoro', 'Mr. C.C. Chigbundu', 'Mr. R.O. Agbasionwe', 'Mr. Abiona Babarinde', 'Mr. Ndubuisi Chito'];
  return (
    <main>
      <Hero
        image="/assets/generated-group-hero.png"
        eyebrow="Leadership"
        title="Group Executive Management"
        text="A team of seasoned leaders driving Coscharis Group's vision of building a timeless institution and delivering exceptional value across Africa and beyond."
        actions={[['View Corporate Governance', 'investors'], ['Explore Our Companies', 'home']]}
        navigate={navigate}
      />
      <section className="section">
        <div className="container founder-card">
          <div className="portrait">CM</div>
          <div>
            <span className="eyebrow">Founder of Coscharis Group in 1977</span>
            <h2>Dr. Cosmas Maduka, CON</h2>
            <p>Founder and President/CEO of Coscharis Group, Dr. Cosmas Maduka, CON, is the visionary leader whose entrepreneurial spirit, business acumen and unwavering commitment to excellence laid the foundation for one of Africa's most respected conglomerates.</p>
          </div>
          <ul>
            <li>Built strategic partnerships with leading global brands.</li>
            <li>Harvard Business School Executive Education Alumnus.</li>
            <li>Commander of the Order of the Niger (CON), National Honour.</li>
          </ul>
        </div>
      </section>
      <section className="section soft">
        <SectionTitle title="The Minds Driving Our Success" center />
        <div className="container leader-grid">
          {leaders.map((leader) => (
            <article className="leader-card" key={leader}>
              <div className="leader-photo">{leader.split(' ').slice(-1)[0][0]}</div>
              <h3>{leader}</h3>
              <p>{leader === 'Dr. Cosmas Maduka' ? 'President / CEO' : 'Executive Management'}</p>
            </article>
          ))}
        </div>
      </section>
      <Values />
    </main>
  );
}

function CompanyPage({ company, navigate }) {
  if (!company) return <HomePage navigate={navigate} />;
  return (
    <main>
      <Hero
        image={company.hero}
        eyebrow={`Home > Our Companies > ${company.name}`}
        title={company.name}
        text={company.summary}
        actions={[['Learn More', 'contact']]}
        navigate={navigate}
      />
      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">About {company.name}</span>
            <SectionTitle title={company.aboutTitle} />
            {company.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <button className="btn outline-dark" type="button" onClick={() => navigate('contact')}>Contact Us -&gt;</button>
          </div>
          <div className="feature-grid">
            {company.metrics.map((metric) => (
              <article className="feature-card" key={metric}>
                <IconCircle name={company.icon} accent={company.color} />
                <h3>{metric}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <SectionTitle title={company.slug === 'motors' ? 'Everything you need. All in one place' : company.slug === 'beverages' ? 'Our Products' : 'Our Services'} center />
        <div className="container service-grid">
          {company.services.map((service) => (
            <article className="service-card" key={service}>
              <IconCircle name={serviceIcon(service)} accent={company.color} />
              <h3>{service}</h3>
              <p>{serviceDescriptions[service] || 'Built around quality, reliability and responsive customer support.'}</p>
            </article>
          ))}
        </div>
      </section>
      <Cta navigate={navigate} />
    </main>
  );
}

const serviceDescriptions = {
  'New Car Sales': 'Premium brands. Exceptional choices.',
  'Test Drive': 'Experience performance firsthand.',
  'Aftersales & Service': 'Expert care for your vehicle.',
  'Genuine Parts': 'Original parts for maximum reliability.',
  'Finance Solutions': 'Flexible plans to make your dream car yours.',
  'Trade-in': 'Exchange easily. Upgrade confidently.',
};

function InvestorsPage({ navigate }) {
  return (
    <main>
      <Hero
        image="/assets/generated-group-hero.png"
        eyebrow="Home > Investors"
        title="Investing in Sustainable Growth and Lasting Value"
        text="At Coscharis Group, we are committed to creating long-term value for our shareholders through strong governance, operational excellence and strategic investments across key sectors."
        actions={[['Contact Investor Relations', 'contact']]}
        navigate={navigate}
      />
      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle title="About Coscharis Group" />
            <p>Coscharis Group is a diversified business group with a legacy of excellence since 1976. We operate in multiple sectors including automotive, mobility, beverages, technology and manufacturing.</p>
            <StatsGrid compact />
          </div>
          <article className="invest-card">
            <h3>Investment Highlights</h3>
            <ul>
              <li>Diversified portfolio with strong market positions.</li>
              <li>Proven track record of growth and resilience.</li>
              <li>Experienced leadership and strong governance.</li>
              <li>Commitment to innovation and sustainability.</li>
              <li>Creating long-term value for stakeholders.</li>
            </ul>
          </article>
        </div>
      </section>
      <section className="section soft">
        <div className="container report-grid">
          {['Annual Report 2024', 'Q1 2025 Financial Results', 'Corporate Governance Report 2024', 'Sustainability Report 2024'].map((report) => (
            <article className="report-card" key={report}>
              <h3>{report}</h3>
              <p>PDF report and presentations for investors and shareholders.</p>
              <button type="button">Download -&gt;</button>
            </article>
          ))}
        </div>
      </section>
      <Cta navigate={navigate} />
    </main>
  );
}

function SustainabilityPage({ navigate }) {
  return (
    <main>
      <Hero
        image="/assets/generated-sustainability.png"
        eyebrow="Sustainability"
        title="Driving a Better Tomorrow. Today."
        text="At Coscharis Group, sustainability is at the heart of everything we do. We are committed to creating lasting value by balancing economic growth with environmental stewardship and social responsibility."
        actions={[['Our Sustainability Framework', 'contact']]}
        navigate={navigate}
      />
      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle title="Sustainability at the Core of Our Business." />
            <p>Our approach is guided by global best practices and aligned with the United Nations Sustainable Development Goals.</p>
            <button className="btn outline-dark" type="button" onClick={() => navigate('investors')}>See Our Impact Report -&gt;</button>
          </div>
          <div className="feature-grid">
            {['Environmental Stewardship', 'Social Responsibility', 'Ethical Governance & Integrity', 'Sustainable Growth'].map((item) => (
              <article className="feature-card" key={item}>
                <IconCircle name={item.includes('Environmental') ? 'leaf' : item.includes('Social') ? 'users' : item.includes('Governance') ? 'shield' : 'target'} />
                <h3>{item}</h3>
                <p>Building long-term value through responsible action.</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section dark-band">
        <div className="container sustain-steps">
          {['Reduce our carbon footprint', 'Conserve natural resources', 'Invest in our people', 'Support our communities', 'Uphold ethical standards'].map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>
      <section className="section soft">
        <SectionTitle title="Making a Difference Every Day." center />
        <div className="container stat-row">
          {['25% Reduction in Carbon', '10,000+ Lives Impacted', '80% Waste Recycled', '100% Employee Training'].map((impact) => <article key={impact}>{impact}</article>)}
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <Hero
        image="/assets/generated-contact.png"
        title="Get in Touch, We are Here to Help."
        text="We value relationships and are committed to providing you with the support and information you need."
      />
      <section className="section">
        <div className="container contact-grid">
          <form className="contact-form">
            <h2>Send Us a Message</h2>
            <p>Fill out the form and our team will get back to you as soon as possible.</p>
            <div className="form-row">
              <label>First Name<input placeholder="Enter your first name" /></label>
              <label>Last Name<input placeholder="Enter your last name" /></label>
            </div>
            <div className="form-row">
              <label>Email Address<input placeholder="Enter your email address" /></label>
              <label>Phone Number<input placeholder="Enter your phone number" /></label>
            </div>
            <div className="form-row">
              <label>Subject<select><option>Select a subject</option></select></label>
              <label>Company (Optional)<input placeholder="Enter your company name" /></label>
            </div>
            <label>Your Message<textarea placeholder="Type your message here" rows="5" /></label>
            <button className="btn primary" type="button">Send Message -&gt;</button>
          </form>
          <aside className="contact-info">
            <h2>Contact Information</h2>
            <ContactLine icon="mapPinned" title="Head Office">Km 32, Lekki - Epe Expressway, Awoyaya, Lagos, Nigeria.</ContactLine>
            <ContactLine icon="phone" title="Phone">+234 1 4601700<br />+234 700 COSCHARIS (26724274)</ContactLine>
            <ContactLine icon="mail" title="Email">info@coscharisgroup.com</ContactLine>
            <ContactLine icon="clock" title="Business Hours">Monday - Friday: 8:30 AM - 5:30 PM<br />Saturday: 9:00 AM - 1:00 PM</ContactLine>
          </aside>
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <SectionTitle title="Find Us" />
          <img className="map-image" src="/assets/map.jpg" alt="Coscharis head office map" />
        </div>
      </section>
    </main>
  );
}

function ContactLine({ icon, title, children }) {
  return (
    <div className="contact-line">
      <IconCircle name={icon} />
      <p><strong>{title}</strong><br />{children}</p>
    </div>
  );
}

function Hero({ image, eyebrow, title, text, actions = [], navigate = () => {}, className = '' }) {
  return (
    <section className={`hero ${className}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(7,18,38,.84), rgba(7,18,38,.22)), url(${image})` }}>
      <div className="container hero-content">
        {eyebrow && <span className="hero-eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        <div className="hero-actions">
          {actions.map(([label, slug], index) => (
            <button key={label} className={index === 0 ? 'btn primary' : 'btn secondary'} type="button" onClick={() => navigate(slug)}>
              {label} -&gt;
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title, center = false }) {
  return (
    <div className={center ? 'section-title center' : 'section-title'}>
      <h2>{title}</h2>
      <span />
    </div>
  );
}

function AboutStrip({ navigate }) {
  return (
    <section className="section">
      <div className="container about-strip">
        <div>
          <SectionTitle title="About Coscharis Group" />
          <p>Since 1976, Coscharis Group has grown from a vision to become one of Nigeria's most respected business conglomerates with interests in key sectors of the economy.</p>
          <p>Our commitment to excellence, innovation and integrity continues to shape the way we do business and create value for all our stakeholders.</p>
          <button className="btn primary" type="button" onClick={() => navigate('about')}>More About Us -&gt;</button>
        </div>
        <StatsGrid />
      </div>
    </section>
  );
}

function StatsGrid({ compact = false }) {
  return (
    <div className={compact ? 'stats-grid compact' : 'stats-grid'}>
      {stats.map(([number, label, icon]) => (
        <article key={`${number}-${label}`} className="stat-card">
          <IconCircle name={icon} className="line-icon" size={24} />
          <strong>{number}</strong>
          <span>{label}</span>
        </article>
      ))}
    </div>
  );
}

function NewsStrip() {
  return (
    <section className="section soft" id="news">
      <div className="container news-head">
        <SectionTitle title="Latest News & Insights" />
        <button type="button" className="text-link">View All News -&gt;</button>
      </div>
      <div className="container news-grid">
        {news.map(([date, title, image]) => (
          <article className="news-card" key={title}>
            <img src={image} alt="" />
            <span>{date}</span>
            <h3>{title}</h3>
            <button type="button">Read More -&gt;</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="section">
      <SectionTitle title="Guided by Values. Focused on the Future." center />
      <div className="container value-grid">
        {['Integrity', 'Innovation', 'People', 'Partnership', 'Excellence', 'Sustainability'].map((value) => (
          <article key={value}>
            <IconCircle name={value === 'Integrity' ? 'shield' : value === 'Innovation' ? 'technology' : value === 'People' ? 'users' : value === 'Partnership' ? 'partnership' : value === 'Sustainability' ? 'leaf' : 'target'} />
            <h3>{value}</h3>
            <p>We are committed to delivering quality, responsibility and superior value.</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Cta({ navigate }) {
  return (
    <section className="section cta-wrap">
      <div className="container cta">
        <div>
          <IconCircle name="partnership" />
          <h2>Partner with us for a future of sustainable growth and value creation.</h2>
        </div>
        <button className="btn primary" type="button" onClick={() => navigate('contact')}>Get in Touch -&gt;</button>
      </div>
    </section>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <button className="brand footer-brand" type="button" onClick={() => navigate('home')}>
            <img src="/assets/logonew1.svg" alt="Coscharis Group" />
          </button>
          <p>Km 32, Lekki - Epe Expressway, Awoyaya, Lagos, Nigeria.</p>
          <p><strong>Opening Hours:</strong><br />Mon - Fri: 8:30 AM - 5:30 PM<br />Sat: 9:00 AM - 1:00 PM</p>
        </div>
        <FooterLinks title="Quick Links" links={['About Us', 'Our Companies', 'Sustainability', 'News & Insights', 'Careers', 'Contact Us']} navigate={navigate} />
        <FooterLinks title="Investor Relations" links={['Investor Overview', 'Financial Information', 'Reports & Presentations', 'Corporate Governance', 'Shareholder Information']} navigate={navigate} />
        <div>
          <h3>Stay Connected</h3>
          <p>Follow us for the latest updates and announcements.</p>
          <SocialIcons />
        </div>
      </div>
      <div className="container footer-bottom">
        <span>Coscharis Group</span>
        <span>2026</span>
        <span>Corporate Information</span>
        <span>Privacy Statement</span>
        <span>Terms & Conditions</span>
        <span>Legal/Disclaimer</span>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links, navigate }) {
  const routeFor = (label) => {
    if (label === 'About Us') return 'about';
    if (label === 'Our Companies') return 'home';
    if (label === 'Sustainability') return 'sustainability';
    if (label === 'Contact Us') return 'contact';
    if (label.includes('Investor') || label.includes('Financial') || label.includes('Reports') || label.includes('Corporate') || label.includes('Shareholder')) return 'investors';
    return 'home';
  };
  return (
    <div>
      <h3>{title}</h3>
      {links.map((link) => (
        <button key={link} type="button" onClick={() => navigate(routeFor(link))}>{link} <span>›</span></button>
      ))}
    </div>
  );
}

export default App;
