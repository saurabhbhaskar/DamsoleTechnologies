import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saurabh Bhaskar",
  initials: "SB",
  url: "https://sbhaskar.io",
  location: "Pune, India",
  locationLink: "https://www.google.com/maps/place/Pune",
  description:
    "Namaste 🙏, I'm Saurabh Bhaskar a passionate tech enthusiast who loves finding creative ways to solve real-world problems with the technology!",
  summary:
    "I am a third-year [B.Tech student in Computer Science and Design](/#education), specializing as a [Software Developer](/#). I have expertise in full-stack development, application development, and building scalable systems. [My skills](/#skills) include designing and implementing efficient APIs, managing and optimizing databases, and developing data pipelines to handle real-time and batch processing. I am passionate about leveraging technology to solve real-world problems and continuously strive to enhance my skills and contribute to impactful projects in a collaborative environment.",
  avatarUrl: "/myprofile.png",
  skills: [
    "ReactJs",
    "Next.js",
    "AngularJS",
    "TypeScript",
    "React Native",
    "expoCLI",
    "Node.js",
    "Redux",
    "Axios",
    "Python",
    "Java",
    "C",
    "C++",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Express.js",
    "Bootstrap",
    "Git",
    "GitHub",
    "MongoDB",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "DBMS",
    "DSA",
    "RESTful API",
    "LLM",
    "TensorFlow",
    "PySpark",
    "Apache Kafka",
    "JavaScript",
    "Postman"
  ],  
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saurabhbhaskar011@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saurabhbhaskar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "http://www.linkedin.com/in/saurabh-bhaskar-31135b2a7",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "/#",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "/#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:saurabhbhaskar011@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: "Artiset",
      href: "/#work",
      badges: [],
      location: "Pune",
      title: "MERN Stack Developer",
      logoUrl: "/atomic.png",
      start: "1 Month",
      end: "",
      description:
        "Developed a full-stack hackathon management website capable of handling user registrations and authentication using Next.js, React.js, Redux, Node.js, and MongoDB. Built a real-time data pipeline for an e-commerce platform leveraging Apache Kafka and PySpark to process and stream data efficiently. Integrated advanced AI features, including vector search, to enhance the platform's capabilities.",
    },
    {
      company: "PW Ambassador",
      badges: [],
      href: "/#work",
      location: "Remote",
      title: "Campus Ambassador",
      logoUrl: "/pwlogo.png",
      start: "",
      end: "",
      description:
        "As a PW Campus Ambassador, I honed my communication, marketing, and management skills. I effectively utilized social media engagement, networking, and a proactive mindset to promote courses, organize events, and secure sponsorships, gaining hands-on experience in branding and outreach.",
    },
  ],
  education: [
    {
      school: "Dr. D. Y. Patil Vidyapeeth, Pune",
      href: "https://dpu.edu.in",
      degree: "B.Tech in Computer Science and Design",
      logoUrl: "/dpulogo.png",
      start: "2026",
      end: "",
    },
    {
      school: "Janata Vidya Mandir, Ghodegaon",
      href: "#education",
      degree: "High School",
      logoUrl: "/jvmschool.jpg",
      start: "",
      end: "",
    },
  ],  
  hackathons: [
    {
      title: "Desto",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Desto is an integrated digital dining platform that uses QR codes, AI-driven recommendations, and real-time analytics to enhance the dining experience. Customers scan a QR code to access the menu, place orders, and make payments directly from their smartphones. For restaurants, Desto provides a dashboard with customer insights, table management, and operational analytics, optimizing service efficiency and personalization",
      image:
        "/desto.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
      technologies: [
        "React Native",
        "ReactJs",
        "expoCLI",
        "Redux",
        "nativewind",
        "TypeScript",
        "MySQL",
        "Node.js",
        "TailwindCSS",
        "Figma",
        "AI/ML",
        "Geofencing",
        "Vector Search AI",
        "REST APIs",
      ],      
    },
    {
      title: "Estha",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Estha revolutionizes pilgrimage tourism by offering immersive experiences, live streams, and historical insights, enriching users' spiritual journeys. The project employs a cutting-edge tech stack, melding React with Tailwind CSS for frontend development, while Node.js with Express.js powers backend functionalities. Leveraging Appwrite for server-side operations like user authentication and MongoDB as the primary database, seamless communication between frontend and backend is facilitated through Axios",
      image:
        "/esthalogo1.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/Estha",
        },
      ],
      technologies: [
        "Typescript",
        "JavaScript",
        "HTML",
        "CSS",
        "ReactJs",
        "vite",
        "Appwrite",
        "TailwindCSS",
        "Shadcn UI",
        "Redux"
      ],
    },
    {
      title: "TweetTube Backend",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "backend of TweetTube Hub: A seamless fusion of video publishing like YouTube and microblogging like Twitter, built with Node.js, MongoDB Atlas, JWT, and Express for a robust and secure backend.",
      icon: "public",
      image:
        "/tweettube.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/backend",
        },
      ],
      technologies: [
        "Node.js",
        "Typescript",
        "JavaScript",
        "mongoose",
        "cloudinary",
        "bcrypt",
        "Postman",
        "REST APIs",
        "JWT",
        "MongoDB Atlas"
      ],
    },
    {
      title: "Intelligent E-Commerce Platform",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed a full-stack platform to handle user registrations and authentication while processing real-time data for an e-commerce application. Integrated advanced AI-powered vector search for efficient data retrieval and Apache Kafka with PySpark for scalable stream data processing.",
      image:
        "/kafka.png",
      links: [],
      technologies: [
        "Python",
        "Databricks",
        "ReactJs",
        "MongoDB Atlas",
        "Typescript",
        "flask",
        "pymongo",
        "Axios",
        "TailwindCSS",
        "pyspark",
        "Apache Kafka"
      ],
    },
    {
      title: "Artiset Hackathon Website",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "The Artiset Hackathon Platform is a secure and user-friendly web application designed to streamline participant registration and access for the Artiset Tech Hackathon, ensuring a seamless experience with robust authentication and authorization features.",
      image:
        "/hackathonlogo.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/hackathon_website",
        },
      ],
      technologies: [
        "Next.js",
        "ReactJs",
        "js-cookie",
        "Typescript",
        "JavaScript",
        "TailwindCSS",
        "Shadcn UI",
        "bcryptjs",
        "JWT",
        "mongoose",
        "MongoDB"
      ],
    },
    {
      title: "react-native-heatmap-calendar-sb",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "A React Native package for calendar heatmap component to visualize daily data patterns. This customizable calendar uses color gradients to represent the intensity of each day’s activity, making it ideal for tracking usage patterns, activity levels, or data trends over a month.",
      image:
        "/heatmap.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "npmjs",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.npmjs.com/package/react-native-heatmap-calendar-sb",
        },
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/react-native-heatmap-calendar-sb",
        },
      ],
      technologies: [
        "React Native",
        "ReactJs",
        "JavaScript",
        "Typescript",
        "TailwindCSS",
        "expoCLI"
      ],
    },
    {
      title: "Musico",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "NextJS project to build simple webpage for Musico",
      image:
        "/musicologo.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/musico_nextjs",
        },
      ],
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "ReactJs"
      ],
    },
    {
      title: "Angular Image Generator",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "An image generator application developed in Angular. It allows users to create and customize images using text input, with the help of an API for image generation. This project emphasizes Angular's form handling and API integration for dynamic content creation.",
      image:
        "/aiglogo.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/Angular_Image_generator",
        },
      ],
      technologies: [
        "Typescript",
        "TailwindCSS",
        "JavaScript",
        "AngularJs",
        "expressJs",
        "ClipDrop API"
      ],
    },
    {
      title: "Angular WebChat",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "A chat application built using Angular. Users can send and receive messages in real-time. This project highlights Angular's real-time data handling for live updates.",
      image:
        "/awclogo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/angular_chat",
        },
      ],
      technologies: [
        "Typescript",
        "TailwindCSS",
        "JavaScript",
        "AngularJs",
        "expressJs",
        "Supabase",
        "Zone.js",
        "Bootstrap"
      ],
    },
    {
      title: "Angular Gallery",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "An image gallery application built with Angular. Users can view a collection of images and delete them. This project showcases Angular directives and pipes for handling data display and transformation.",
      image:
        "/aglogo.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/angular_gallery",
        },
      ],
      technologies: [
        "Typescript",
        "TailwindCSS",
        "JavaScript",
        "AngularJs",
        "Supabase",
        "GitHub API"
      ],
    },
    {
      title: "CareerSphere",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "CareerSphere facilitates virtual interaction between students and counselors nationwide, empowering students to select the most suitable counselor for their needs. We advocate for equal recognition of all professions to foster holistic national development. By promoting awareness about career counseling and organizing the fragmented market, we aim to positively impact the economy",
      image:
        "/careersphere.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/careersphere",
        },
      ],
      technologies: [
        "ReactJs",
        "Vite",
        "HTML",
        "CSS",
        "JavaScript",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Redux"
      ],
    },
    {
      title: "Social Distancing Monitoring",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "real-time social distancing enforcement. This system utilizes the power of YOLOv5, a state-of- the-art deep learning object detection model, and OpenCV, a robust computer vision library, to detect individuals in crowded environments and automatically assess their compliance with social distancing guidelines.",
      image:
        "/sdmlogo.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/Social-Distancing-Monitoring",
        },
      ],
      technologies: [
        "Python",
        "Flask",
        "heatmappy",
        "Matplotlib",
        "OpenCV",
        "Pandas",
        "Plotly",
        "Scipy",
        "YOLO",
        "numpy"
      ],
    },
    {
      title: "EMarketplace",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "building straightforward EMarketplace built with Django, enabling users to buy and sell goods online.",
      image:
        "/emarketlogo.png",
      win: "1st Place Winner",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saurabhbhaskar/EMarketplace",
        },
      ],
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "TalilwindCSS"
      ],
    },
  ],
} as const;
