import { TranslationType } from "@/i18n";

export const en: TranslationType = {
  nav: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    testimonials: "Testimonials",
    contact: "Contact",
    menuToggle: "Toggle menu",
  },

  hero: {
    greeting: "Hi, I'm",
    role: "Front-End Developer",
    description: "I build high-performing, visually appealing websites and web apps using modern technologies, with a strong focus on user experience.",
    viewWork: "View My Work",
    contactMe: "Contact Me",
  },

  about: {
    title: "About Me",
    subtitle: "Front-End Developer Focused on UI/UX",
    description: "I'm a passionate front-end developer who specializes in crafting clean, accessible, and production-ready interfaces. With expertise in React and TypeScript, I develop scalable, high-performance UIs that are easy to maintain. My approach combines technical skill with a strong understanding of user needs and modern design principles. I'm committed to delivering intuitive, inclusive digital experiences while staying current with the latest tech and design trends.",
    services: {
      frontend: {
        title: "Frontend Development",
        description: "I build modern, responsive web applications using React and TypeScript, focusing on performance, scalability, and great user experience.",
      },
      design: {
        title: "UI/UX Design",
        description: "I design intuitive, visually appealing interfaces that follow modern design standards and accessibility best practices, ensuring a seamless experience.",
      },
      performance: {
        title: "Web Performance",
        description: "I optimize web applications for speed and efficiency using techniques like lazy loading and code splitting, improving load times and user interactions.",
      },
    },
  },

  skills: {
    title: "My Skills",
    description: "Here are the technologies and tools I specialize in.",
    categories: {
      all: "All",
      frontend: "Frontend",
      backend: "Backend",

      design: "Design",
      tools: "Tools",
    },
    proficiency: "Proficiency",
  },

  projects: {
    title: "My Projects",
    description: "Here are some of my recent projects. Each showcases unique challenges and solutions using various technologies.",
    comingSoon: "Coming Soon",
    viewMore: "View More on GitHub",
    projectCounter: "Project {{current}} of {{total}}",

    tags: {
      live: "Live Demo",
      code: "Code",
    },
items: {
  cinescope: {
    title: "CineScope",
    description:
      "A modern, responsive movie discovery application. Users can search for movies, browse by genres, manage favorites, and discover trending content.",
  },
  strikeGear: {
    title: "Strike Gear",
    description:
      "A modern e-commerce platform for outdoor enthusiasts. Features responsive design, component-based architecture, dark/light mode, and optimized performance.",
  },
  megatech: {
    title: "MegaTech",
    description:
    "A digital platform for technical training, offering a smooth and engaging learning experience with dark/light mode, multilingual support, and a responsive design.",
},
  panoViewer: {
    title: "Advanced Panorama Viewer",
    description:
      "An interactive panorama viewer designed for immersive 360° experiences with seamless navigation between connected scenes. (Coming soon)",
  },
}


  },

  testimonials: {
    title: "Testimonials",
    subtitle: "What People Say About My Work",
    items: {
      yassine: {
        name: "Yassine Benjelloun",
        role: "Product Manager",
        company: "Softech Solutions",
        content: "Working with this developer was an outstanding experience. Their skill in building intuitive, high-performance web apps is exceptional. They're attentive to detail and responsive to feedback, always delivering top-quality work.",
      },
      clara: {
        name: "Clara Dupont",
        role: "Lead Developer",
        company: "TechWave",
        content: "This developer blends technical expertise with a passion for design. Their contributions significantly improved both our workflow and user experience. Always dependable and forward-thinking!",
      },
      marco: {
        name: "Marco Rossi",
        role: "UX/UI Designer",
        company: "Pixelate Studios",
        content: "I've worked with many developers, but this one stands out. They turn complex design ideas into flawless code, resulting in responsive, consistent designs across all devices.",
      },
    },
  },

  contact: {
    title: "Get in Touch",
    description: "Have a project in mind or just want to connect? Feel free to reach out using the form below.",
    info: {
      title: "Contact Info",
      email: { label: "Email" },
      phone: { label: "Phone" },
      social: { label: "Social" },
    },
    availability: {
      title: "Current Availability",
      description: "I'm currently available for freelance work and open to new opportunities. I typically respond within 24 hours.",
    },
    form: {
      name: "Name",
      namePlaceholder: "Full name",
      email: "Email",
      emailPlaceholder: "email@example.com",
      message: "Message",
      messagePlaceholder: "Tell me about your project...",
      send: "Send Message",
      sending: "Sending...",
    },
    toast: {
      success: {
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you shortly.",
      },
      error: {
        title: "Error",
        description: "Something went wrong while sending your message. Please try again later.",
        autoReply: "There was an issue sending the auto-reply. Please try again later.",
      },
    },
  },

  footer: {
    tagline: "Creating digital experiences that inspire.",
    copyright: "© {{year}} Mohamed B. — MIT Licensed",
  },
};