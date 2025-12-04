import { Content, Project } from './types';

export const CONTENT: Record<'en' | 'ar', Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      tools: "Tools",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Mohamed",
      role: "Product-Focused Frontend Engineer",
      description: "I build accessible, pixel-perfect, and performant web experiences with a focus on user delight and business impact.",
      ctaPrimary: "Contact Me",
      ctaSecondary: "View Work"
    },
    about: {
      title: "About Me",
      p1: "I'm not just a coder; I'm a product-minded engineer. I bridge the gap between design, engineering, and user experience. With a strong foundation in React and the modern web ecosystem, I turn complex problems into simple, beautiful interfaces.",
      p2: "Whether it's optimizing core web vitals or architecting scalable design systems, I bring passion and precision to every line of code.",
      stats: {
        experience: "Years Experience",
        projects: "Projects Completed",
        clients: "Happy Clients"
      }
    },
    skills: {
      title: "Technical Skills",
      categories: {
        frontend: "Frontend Core",
        backend: "Backend & API",
        tools: "DevOps & Tools"
      }
    },
    tools: {
      title: "My Toolkit",
      subtitle: "The software and devices I use to create magic."
    },
    projects: {
      title: "Featured Projects",
      viewCode: "Code",
      viewDemo: "Live Demo"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind or just want to say hi?",
      email: "Email Me",
      github: "Follow on GitHub",
      linkedin: "Connect on LinkedIn"
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      skills: "المهارات",
      tools: "الأدوات",
      projects: "المشاريع",
      contact: "تواصل معي"
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "محمد",
      role: "مهندس واجهات أمامية",
      description: "أقوم ببناء تجارب ويب سهلة الوصول، ومثالية، وسريعة الأداء مع التركيز على سعادة المستخدم وتأثير الأعمال.",
      ctaPrimary: "تواصل معي",
      ctaSecondary: "أعمالي"
    },
    about: {
      title: "نبذة عني",
      p1: "أنا لست مجرد مبرمج؛ أنا مهندس يركز على المنتج. أقوم بسد الفجوة بين التصميم والهندسة وتجربة المستخدم. مع أساس قوي في React ونظام الويب الحديث، أحول المشاكل المعقدة إلى واجهات بسيطة وجميلة.",
      p2: "سواء كان الأمر يتعلق بتحسين أداء الويب أو بناء أنظمة تصميم قابلة للتوسع، فأنا أجلب الشغف والدقة لكل سطر من الكود.",
      stats: {
        experience: "سنوات الخبرة",
        projects: "مشاريع منجزة",
        clients: "عملاء سعداء"
      }
    },
    skills: {
      title: "المهارات التقنية",
      categories: {
        frontend: "الواجهة الأمامية",
        backend: "الخلفية و API",
        tools: "الأدوات والعمليات"
      }
    },
    tools: {
      title: "أدواتي",
      subtitle: "البرامج والأجهزة التي أستخدمها لصنع السحر."
    },
    projects: {
      title: "مشاريع مميزة",
      viewCode: "الكود",
      viewDemo: "مشاهدة"
    },
    contact: {
      title: "تواصل معي",
      subtitle: "لديك مشروع في ذهنك أو تريد فقط إلقاء التحية؟",
      email: "راسلني",
      github: "تابعني على GitHub",
      linkedin: "تواصل على LinkedIn"
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Chalet Matthé",
    descEn: "A premium hospitality website featuring immersive galleries, smooth booking flows, and bilingual support.",
    descAr: "موقع ضيافة متميز يتميز بمعارض غامرة، وتدفقات حجز سلسة، ودعم ثنائي اللغة.",
    tags: ["React", "Next.js", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/600/400?random=1",
    link: "https://www.chaletmatthe.sk/",
    github: "#"
  },
  {
    id: 2,
    title: "Oakley x Axiom Space",
    descEn: "A high-performance immersive experience showcasing the collaboration between Oakley and Axiom Space.",
    descAr: "تجربة غامرة عالية الأداء تعرض التعاون بين Oakley و Axiom Space مع تقنيات ويب متقدمة.",
    tags: ["WebGL", "GSAP", "React", "Interactive"],
    image: "https://picsum.photos/600/400?random=2",
    link: "https://www.oakley.com/en-us/l/axiom-space",
    github: "#"
  },
  {
    id: 3,
    title: "Galaxy vs iPhone 3D",
    descEn: "Interactive 3D experience showcasing product comparison in real-time (S3 Hosted).",
    descAr: "تجربة ثلاثية الأبعاد تفاعلية تعرض مقارنة المنتجات في الوقت الفعلي.",
    tags: ["R3F", "Three.js", "Zustand", "WebGL"],
    image: "https://picsum.photos/600/400?random=3",
    link: "http://galaxy-versus-iphone.s3-website.eu-west-2.amazonaws.com/",
    github: "#"
  }
];

export const SKILL_LIST = [
  { name: "HTML", level: 100 },
  { name: "CSS", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Three.js / R3F", level: 80 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Node.js", level: 75 },
  { name: "GraphQL", level: 70 },
];

export const TOOL_ICONS = [
  { name: "VS Code", icon: "Code" },
  { name: "Figma", icon: "Figma" },
  { name: "Git", icon: "GitBranch" },
  { name: "GitHub", icon: "Github" },
  { name: "Notion", icon: "FileText" },
  { name: "Terminal", icon: "Terminal" },
];