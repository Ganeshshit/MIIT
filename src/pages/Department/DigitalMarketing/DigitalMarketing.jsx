import { Link } from 'react-router-dom';
import {
    Activity,
    ArrowRight,
    Award,
    BarChart3,
    BookOpen,
    Bug,
    CalendarDays,
    Camera,
    Clock,
    Database,
    DollarSign,
    Eye,
    FileText,
    Film,
    Gauge,
    Image as ImageIcon,
    Layers,
    LayoutGrid,
    Lightbulb,
    Link2,
    LogOut,
    Megaphone,
    MessageCircle,
    MessageSquare,
    Monitor,
    MousePointerClick,
    PenLine,
    Percent,
    Play,
    Rocket,
    Search,
    Send,
    Share2,
    ShieldCheck,
    ShoppingBag,
    ShoppingCart,
    Sparkles,
    Tag,
    Target,
    TrendingUp,
    Type,
    Users,
    Video,
    Wrench,
} from 'lucide-react';

/* ── THEME — same as all other pages ── */
const BRAND = '#009688';
const BRAND_DARK = '#00796b';
const INK = '#0f2f2c';
const TINT = '#e6f4f2';
const LINE = '#cfe8e4';

/* ── DATA ── */
const HERO_STATS = [
    { icon: Layers, value: '10', label: 'Modules' },
    { icon: Sparkles, value: '50+', label: 'Topics' },
    { icon: Wrench, value: 'Hands-on', label: 'Projects' },
    { icon: Award, value: 'Certificate', label: 'of Completion' },
];

const OVERVIEW = [
    { icon: BookOpen, title: 'Learn', desc: 'Concepts with real examples' },
    { icon: MousePointerClick, title: 'Practice', desc: 'Hands-on activities & case studies' },
    { icon: Rocket, title: 'Build', desc: 'Real campaigns and projects' },
    { icon: TrendingUp, title: 'Grow', desc: 'Build your portfolio & career' },
];

const ROADMAP = [
    'Digital Marketing Fundamentals',
    'Website & Landing Pages',
    'SEO',
    'Social Media Marketing',
    'Content Marketing',
    'Google Ads',
    'Email & WhatsApp Marketing',
    'Analytics & Data-Driven Marketing',
    'Influencer & Affiliate Marketing',
    'Capstone Project',
];

const SEO_STEPS = [
    { icon: Search, title: 'Discover', desc: 'Search engines find your content' },
    { icon: Bug, title: 'Crawl', desc: 'Bots visit your website' },
    { icon: Database, title: 'Index', desc: 'Content is stored in a database' },
    { icon: BarChart3, title: 'Rank', desc: 'Relevance & quality decide position' },
    { icon: Eye, title: 'Click', desc: 'Users find you in search results' },
    { icon: ShoppingBag, title: 'Convert', desc: 'Visitors become customers' },
];

const SEO_TOOLS = [
    { name: 'Google Search', desc: 'Keyword ideas & search trends' },
    { name: 'Google Search Console', desc: 'Monitor performance & fix issues' },
    { name: 'Google Keyword Planner', desc: 'Find the right keywords' },
    { name: 'Google Trends', desc: 'Analyze trends & interests' },
    { name: 'Ahrefs / SEMrush', desc: 'Competitor analysis & backlinks' },
];

const PLATFORMS = [
    { icon: Camera, label: 'Instagram' },
    { icon: Play, label: 'YouTube' },
    { icon: Share2, label: 'Facebook' },
    { icon: MessageSquare, label: 'X (Twitter)' },
    { icon: Users, label: 'LinkedIn' },
    { icon: MessageCircle, label: 'WhatsApp' },
];

const SOCIAL_TOPICS = [
    'Strategy & Planning',
    'Hashtags & Engagement',
    'Content Calendar',
    'Community Building',
    'Organic vs Paid',
    'Influencer Marketing',
    'Reels & Stories',
    'Analytics',
];

const CONTENT_ITEMS = [
    { icon: PenLine, label: 'Blog Writing' },
    { icon: LayoutGrid, label: 'Types of Content' },
    { icon: Video, label: 'Video Content' },
    { icon: BookOpen, label: 'Storytelling' },
    { icon: BarChart3, label: 'Infographics' },
    { icon: CalendarDays, label: 'Content Calendar' },
    { icon: Share2, label: 'Social Media Content' },
    { icon: Send, label: 'Distribution' },
    { icon: Type, label: 'Copywriting' },
    { icon: Gauge, label: 'Measurement' },
];

const AI_ITEMS = [
    { icon: Sparkles, label: 'AI-assisted content creation' },
    { icon: ImageIcon, label: 'AI image generation' },
    { icon: MessageSquare, label: 'Prompt engineering basics' },
    { icon: Film, label: 'AI video tools' },
    { icon: Lightbulb, label: 'AI for social media ideas' },
    { icon: PenLine, label: 'Content editing with AI' },
    { icon: FileText, label: 'AI for blogs & articles' },
    { icon: ShieldCheck, label: 'Ethical use of AI' },
    { icon: Megaphone, label: 'AI for advertisements' },
];

const ADS_TYPES = [
    { icon: Search, label: 'Search' },
    { icon: Monitor, label: 'Display' },
    { icon: Video, label: 'Video' },
    { icon: ShoppingCart, label: 'Shopping' },
];

const ADS_METRICS = [
    { icon: MousePointerClick, label: 'CTR' },
    { icon: DollarSign, label: 'CPC' },
    { icon: Percent, label: 'Conversion Rate' },
    { icon: TrendingUp, label: 'ROAS' },
];

const ANALYTICS_METRICS = [
    { icon: Activity, label: 'Traffic' },
    { icon: Users, label: 'Users' },
    { icon: Clock, label: 'Sessions' },
    { icon: MessageCircle, label: 'Engagement' },
    { icon: Target, label: 'Conversion' },
    { icon: LogOut, label: 'Bounce Rate' },
    { icon: Tag, label: 'UTM Parameters' },
    { icon: Link2, label: 'Campaign Tracking' },
];

const CAPSTONE_STEPS = [
    'Research & Target Audience',
    'Strategy & Planning',
    'Content Creation',
    'Website / Landing Page',
    'SEO & Paid Campaigns',
    'Social Media & Email',
    'Analytics & Reporting',
];

/* ── SIMPLE BUILDING BLOCKS (no boxes, no shadows) ── */
const Section = ({ tint = false, children }) => (
    <section style={{ background: tint ? TINT : '#fff' }}>
        <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20">{children}</div>
    </section>
);

const ModuleHeader = ({ tag, title, subtitle }) => (
    <div className="mb-10">
        <p className="text-[12px] font-bold tracking-[0.18em] uppercase" style={{ color: BRAND }}>
            {tag}
        </p>
        <h2 className="mt-2 text-3xl md:text-[40px] font-bold leading-tight" style={{ color: INK }}>
            {title}
        </h2>
        {subtitle && <p className="mt-2 text-[16px] text-neutral-600">{subtitle}</p>}
    </div>
);

const SubHeading = ({ children }) => (
    <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] mb-4" style={{ color: BRAND_DARK }}>
        {children}
    </h3>
);

const IconList = ({ items, cols = 2 }) => (
    <ul className={`grid gap-x-10 gap-y-3 ${cols === 2 ? 'sm:grid-cols-2' : ''}`}>
        {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-[15px]" style={{ color: INK }}>
                <Icon size={18} strokeWidth={1.8} style={{ color: BRAND }} className="shrink-0" />
                {label}
            </li>
        ))}
    </ul>
);

const PracticalActivity = ({ children }) => (
    <p className="mt-10 pl-4 border-l-4 text-[15px] leading-7 text-neutral-700" style={{ borderColor: BRAND }}>
        <b style={{ color: INK }}>Practical activity: </b>
        {children}
    </p>
);

/* ── PAGE ── */
export default function DigitalMarketing() {
    return (
        <div className="bg-white text-neutral-900 w-full overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {/* HERO */}
            <section style={{ background: `linear-gradient(120deg, ${TINT} 0%, #ffffff 70%)` }}>
                <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="text-[12px] font-bold tracking-[0.18em] uppercase" style={{ color: BRAND }}>
                            Digital Marketing Course
                        </p>
                        <h1 className="mt-3 text-[40px] md:text-[54px] font-extrabold leading-[1.05]" style={{ color: INK }}>
                            Digital Marketing, from <span style={{ color: BRAND }}>strategy</span> to success
                        </h1>
                        <p className="mt-5 text-[16px] leading-8 text-neutral-600 max-w-md">
                            Build in-demand skills, create real campaigns and become a digital marketing pro.
                        </p>
                        <Link
                            to="/admissions"
                            className="mt-7 inline-flex items-center gap-2 rounded-full px-7 py-3 text-white text-[14px] font-semibold"
                            style={{ background: BRAND }}
                        >
                            Start Learning <ArrowRight size={16} />
                        </Link>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                        alt="Digital marketing strategy on a laptop"
                        className="w-full h-[320px] md:h-[400px] object-cover rounded-2xl"
                    />
                </div>

                <div className="w-full px-6 md:px-12 lg:px-20 pb-12">
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t pt-8" style={{ borderColor: LINE }}>
                        {HERO_STATS.map(({ icon: Icon, value, label }) => (
                            <li key={label} className="flex items-center gap-3">
                                <Icon size={22} strokeWidth={1.7} style={{ color: BRAND }} />
                                <div className="leading-tight">
                                    <p className="text-[15px] font-bold" style={{ color: INK }}>{value}</p>
                                    <p className="text-[12px] text-neutral-500">{label}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* OVERVIEW */}
            <Section>
                <ModuleHeader
                    tag="Overview"
                    title="What will you learn?"
                    subtitle="A complete understanding of digital marketing, from basics to advanced strategy, with hands-on practice and real projects."
                />
                <ul className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {OVERVIEW.map(({ icon: Icon, title, desc }) => (
                        <li key={title}>
                            <Icon size={26} strokeWidth={1.6} style={{ color: BRAND }} />
                            <p className="mt-3 text-[17px] font-bold" style={{ color: INK }}>{title}</p>
                            <p className="mt-1 text-[14px] leading-6 text-neutral-600">{desc}</p>
                        </li>
                    ))}
                </ul>
            </Section>

            {/* ROADMAP */}
            <Section tint>
                <ModuleHeader tag="Roadmap" title="Your learning journey" subtitle="Ten modules, one step at a time." />
                <ol className="grid md:grid-cols-2 gap-x-12">
                    {ROADMAP.map((title, i) => (
                        <li key={title} className="flex items-baseline gap-4 py-3 border-b" style={{ borderColor: LINE }}>
                            <span className="w-8 text-[14px] font-bold" style={{ color: BRAND }}>
                                {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="text-[15.5px] font-medium" style={{ color: INK }}>{title}</span>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* MODULE 03: SEO */}
            <Section>
                <ModuleHeader tag="Module 03" title="Search Engine Optimization (SEO)" subtitle="Get found. Get clicks. Get results." />

                <SubHeading>How SEO works</SubHeading>
                <ol className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-6">
                    {SEO_STEPS.map(({ icon: Icon, title, desc }, i) => (
                        <li key={title} className="flex gap-3">
                            <Icon size={20} strokeWidth={1.8} style={{ color: BRAND }} className="mt-0.5 shrink-0" />
                            <div>
                                <p className="text-[15px] font-bold" style={{ color: INK }}>{i + 1}. {title}</p>
                                <p className="text-[13.5px] leading-6 text-neutral-600">{desc}</p>
                            </div>
                        </li>
                    ))}
                </ol>
                <p className="mt-6 text-[14px] italic text-neutral-600">
                    Good SEO isn't just about ranking. It's about creating value for your audience.
                </p>

                <div className="mt-12">
                    <SubHeading>Tools you'll use</SubHeading>
                    <ul>
                        {SEO_TOOLS.map(({ name, desc }) => (
                            <li
                                key={name}
                                className="py-3 flex flex-wrap items-baseline justify-between gap-2 border-t last:border-b"
                                style={{ borderColor: LINE }}
                            >
                                <span className="text-[15px] font-semibold" style={{ color: INK }}>{name}</span>
                                <span className="text-[14px] text-neutral-600">{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <PracticalActivity>Perform an SEO audit of an existing website and suggest improvements.</PracticalActivity>
            </Section>

            {/* MODULE 04: SOCIAL */}
            <Section tint>
                <ModuleHeader tag="Module 04" title="Social Media Marketing" subtitle="Build your brand. Build your community." />
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <SubHeading>Platforms</SubHeading>
                        <IconList items={PLATFORMS} />
                    </div>
                    <div>
                        <SubHeading>Key topics</SubHeading>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                            {SOCIAL_TOPICS.map((t) => (
                                <li key={t} className="flex items-center gap-2 text-[15px]" style={{ color: INK }}>
                                    <ArrowRight size={14} strokeWidth={2.4} style={{ color: BRAND }} className="shrink-0" />
                                    {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            {/* MODULE 05: CONTENT */}
            <Section>
                <ModuleHeader tag="Module 05" title="Content Marketing" subtitle="Great content informs, builds trust and drives action." />
                <IconList items={CONTENT_ITEMS} />
                <p className="mt-8 text-[14px] italic text-neutral-600">
                    Content isn't about selling, it's about solving problems.
                </p>
            </Section>

            {/* MODULE 06: AI */}
            <Section tint>
                <ModuleHeader tag="Module 06" title="Generative AI for Marketing" subtitle="Work smarter with the power of AI." />
                <IconList items={AI_ITEMS} />
                <PracticalActivity>Create a complete AI-assisted marketing campaign for a real brand.</PracticalActivity>
            </Section>

            {/* MODULE 07: ADS */}
            <Section>
                <ModuleHeader tag="Module 07" title="Google Ads & Paid Marketing" subtitle="Right audience. Right message. Right time." />
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <SubHeading>Campaign types</SubHeading>
                        <IconList items={ADS_TYPES} cols={1} />
                    </div>
                    <div>
                        <SubHeading>Key metrics</SubHeading>
                        <IconList items={ADS_METRICS} cols={1} />
                    </div>
                </div>
                <PracticalActivity>Design a Google Ads campaign for a hypothetical business.</PracticalActivity>
            </Section>

            {/* MODULE 08: ANALYTICS */}
            <Section tint>
                <ModuleHeader tag="Module 08" title="Analytics & Data-Driven Marketing" subtitle="Measure. Learn. Improve." />
                <SubHeading>Key metrics</SubHeading>
                <IconList items={ANALYTICS_METRICS} />
                <PracticalActivity>Analyze a real campaign and create a performance report.</PracticalActivity>
            </Section>

            {/* CAPSTONE */}
            <Section>
                <ModuleHeader tag="Module 10" title="Capstone Project" subtitle="Plan. Create. Execute. Analyze." />
                <ol className="grid md:grid-cols-2 gap-x-12">
                    {CAPSTONE_STEPS.map((step, i) => (
                        <li key={step} className="flex items-baseline gap-4 py-3 border-b" style={{ borderColor: LINE }}>
                            <span className="w-6 text-[14px] font-bold" style={{ color: BRAND }}>{i + 1}</span>
                            <span className="text-[15.5px]" style={{ color: INK }}>{step}</span>
                        </li>
                    ))}
                </ol>
            </Section>

            {/* CTA */}
            <section style={{ background: `linear-gradient(120deg, ${BRAND_DARK}, ${BRAND})` }}>
                <div className="max-w-3xl mx-auto px-6 py-16 text-center">
                    <p className="text-[18px] md:text-[22px] leading-8 text-white font-medium">
                        “Marketing is no longer about the stuff that you make, but the stories you tell.”
                    </p>
                    <p className="mt-2 text-[13px] text-white/70">Seth Godin</p>
                    <Link
                        to="/admissions"
                        className="mt-8 inline-flex items-center gap-2 bg-white rounded-full px-7 py-3 text-[14px] font-bold"
                        style={{ color: BRAND_DARK }}
                    >
                        Let's build your campaign <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
