import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

// ----- Personal Info -----
const person: Person = {
  firstName: "Shiv",
  lastName: "Kumar",
  name: `Shiv Kumar`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "shiva90154@gmail.com", // replace with your actual email
  location: "Asia/Kolkata", // IANA time zone identifier
  languages: ["English", "Hindi","Punjabi"], // optional
};

// ----- Newsletter -----
// const newsletter: Newsletter = {
//   display: true,
//   title: <>Subscribe to {person.firstName}'s Newsletter</>,
//   description: (
//     <>My weekly newsletter about web development, coding tips, and projects.</>
//   ),
// };

const newsletter: Newsletter = {
  display: true,
  title: <>Contact Me</>,
  description: (
    <>
    
      If you want to contact me, just send a WhatsApp message at{" "}
      <a
        href="https://wa.me/919015484696"
        target="_blank"
        rel="noopener noreferrer"
      >
        <b>9015484696</b>
      </a>.

      <br />
     <b> Newsletter coming soon!</b>
    </>
  ),
};


// ----- Social Links -----
const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/shiv90154",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/shiv-kumar-627b24247/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

// ----- Home Page -----
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into modern web applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Projects</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I'm Shiv, a Full Stack Developer from Chandigarh, India.
      <br /> I build web apps with React, Next.js,Php and modern technologies.
    </>
  ),
};

// ----- About Page -----
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Chandigarh`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
 calendar: { display: true, link: "https://wa.me/919015484696" },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shiv Kumar is a Full Stack Developer passionate about creating efficient
        and elegant web applications. His work spans frontend and backend
        development, combining modern frameworks and tools to build robust
        solutions.
      </>
    ),
  },
work: {
  display: true,
  title: "Work Experience",
  experiences: [
    {
      company: "Freelance Projects",
      timeframe: "2023 - Present",
      role: "Full Stack Developer",
      achievements: [
        <>
          Developed multiple web applications using React, Next.js, Tailwind CSS, and Supabase, 
          delivering responsive and high-performance user interfaces.
        </>,
        <>
          Built full-stack features including authentication, CRUD operations, and real-time updates, 
          improving project delivery speed and user experience.
        </>,
        <>
          Collaborated with clients to understand requirements and deliver scalable solutions on time.
        </>,
      ],
      // images: [
      //   {
      //     src: "/images/projects/freelance-01.jpg",
      //     alt: "Freelance Project 1",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      company: "Cyberous.in",
      timeframe: "June 2023 - August 2023",
      role: "Web Development Intern",
      achievements: [
        <>
          Developed and maintained web pages using HTML, CSS, JavaScript, and React.
        </>,
        <>
          Assisted in backend integration using Node.js and contributed to small-scale projects.
        </>,
        <>
          Learned and implemented best practices for responsive design and cross-browser compatibility.
        </>,
      ],
      // images: [
      //   {
      //     src: "/images/projects/cyberous-01.jpg",
      //     alt: "Cyberous Project",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      company: "Hoping Minds",
      timeframe: "June 2023 - August 2023",
      role: "Web Development Intern",
      achievements: [
        <>
          Built interactive UI components using React and Tailwind CSS.
        </>,
        <>
          Assisted in creating dynamic forms and integrating APIs for internal tools.
        </>,
        <>
          Collaborated with senior developers to improve workflow and optimize code quality.
        </>,
      ],
      // images: [
      //   {
      //     src: "/images/projects/hopingminds-01.jpg",
      //     alt: "Hoping Minds Project",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
    {
      company: "Career Info Wisit Solution",
      timeframe: "June 2023 - Present",
      role: "Web Development Intern",
      achievements: [
        <>
          Assisted in HR recruitment processes while simultaneously contributing to web development projects.
        </>,
        <>
          Developed internal dashboards and automated workflows using React and Node.js.
        </>,
      ],
      // images: [
      //   {
      //     src: "/images/projects/careerinfo-01.jpg",
      //     alt: "Career Info Project",
      //     width: 16,
      //     height: 9,
      //   },
      // ],
    },
  ],
},
 studies: {
  display: true,
  title: "Education",
  institutions: [
    {
      name: "Baddi University of Emerging Sciences and Technology",
      description: <>B.Tech in Computer Science (2022 - 2026)</>,
    },
    {
      name: "GSSS Giara Gran, HPBoard",
      description: <>Completed 12th in 2022</>,
    },
    {
      name: "GSSS Giara Gran, HPBoard",
      description: <>Completed 10th in 2020</>,
    },
  ],
},

 technical: {
  display: true,
  title: "Technical Skills",
  skills: [
    {
      title: "Frontend Development",
      description: <></>,
      tags: [
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "JavaScript", icon: "javascript" },
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextjs" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Material UI", icon: "mui" },
      ],
      images: [],
    },
    {
      title: "Backend & Database",
      description: <></>,
      tags: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Express", icon: "express" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "Prisma", icon: "prisma" },
        { name: "Supabase", icon: "supabase" },
        { name: "Firebase", icon: "firebase" },
        { name: "TypeScript", icon: "typescript" },
      ],
      images: [],
    },
  ],
},

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};




const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


// ----- Gallery Page -----
const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Project image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Project image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Project image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Project image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
