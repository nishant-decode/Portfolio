import { acm, tnp, he } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    summiz,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer Intern",
        company_name: "HappilyEver Startup",
        icon: he,
        iconBg: "#fbc3bc",
        date: "Sep 2022 - Jan 2023",
        points: [
            "Worked with the Founder to deliver product requirements.",
            "Joined our Engineering team and be involved in Front End Development - React with a Go Backend.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Designer",
        company_name: "TNP",
        icon: tnp,
        iconBg: "#b7e4c7",
        date: "Feb 2022 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Content Creator",
        company_name: "ACM",
        icon: acm,
        iconBg: "#a2d2ff",
        date: "Feb 2022 - Present",
        points: [
            "Created standardised templates for content on various platforms using Canva.",
            "Worked on rebranding various social media pages, such as Facebook, LinkedIn, YouTube, Instagram, and Twitter.",
            "Content writing on various trending technical topics(Bitcoin, NFT...).",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/nishant-decode',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nishant-srinet-6977a1221/',
    }
];

export const projects = [
    {
        iconUrl: css,
        theme: 'btn-back-black',
        name: 'UI/UX | Figma - Anubhav-Bharat',
        description: 'I crafted a intuitive UI/UX design on Figma, seamlessly blending aesthetics with user functionality. Translated the design into a seamless and responsive web application.',
        link: 'https://shorturl.at/sH058',
    },
    {
        iconUrl: mui,
        theme: 'btn-back-black',
        name: 'Travel Website - Frontend',
        description: 'Developed a web application using React.js and MUI for travelers to book guides and learn about different tourism spots in Delhi.',
        link: 'https://github.com/nishant-decode/AnubhavBharat',
    },
    {
        iconUrl: nextjs,
        theme: 'btn-back-black',
        name: 'Airbnb Clone - Trazler',
        description: 'Created a full-stack replica of the popular home rental platform "Airbnb," enabling users to book and rent out properties.',
        link: 'https://github.com/nishant-decode/Trazler',
    },
    {
        iconUrl: express,
        theme: 'btn-back-black',
        name: 'Rest-API | Node.js',
        description: 'Developed a robust REST API for user authentication utilising Node.js, Express, TypeScript, and MongoDB. Implemented secure and seamless authentication processes.',
        link: 'https://github.com/nishant-decode/rest-api-node',
    }
];