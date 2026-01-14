import dera from "../../public/dera.png";
import wloo from "@/public/wloo.webp";
import dps from "@/public/dps.png";
import drdo from "@/public/drdo.png";
import birdeye from "@/public/birdeye.png";

const experiences = [
  {
    title: "Software Frontend Engineer",
    company_name: "Birdeye",
    icon: birdeye,
    iconBg: "#000",
    date: "Feb 2025 - Present",
    points: [
      "Led frontend development for Yelp integration across single-account and reseller workflows, enabling scalable review aggregation across thousands of customer locations.",
      "Architected and implemented SEO-enabled SSR widgets using Next.js, improving search rankings by ~40% and converting widgets into a premium revenue product with 10,000+ active adoptions.",
      "Took end-to-end ownership of the widget platform including architecture, implementation, optimization, and feature delivery.",
      "Optimized the reviews module (core product contributing ~90% of revenue), achieving ~10× faster rendering during high-frequency actions such as replying to reviews.",
      "Designed and built client-facing analytics dashboards to monitor API usage, quotas, and metrics in real time.",
      "Collaborated with backend and NLP teams to integrate AI-powered agents for automated customer engagement and analytics.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "DERA",
    icon: dera,
    iconBg: "#000",
    date: "May 2024 - Present",
    points: [
      "Integrated Web3 smart contracts into frontend applications using Next.js, TypeScript, Wagmi, RainbowKit, and Ethers.",
      "Improved Lighthouse performance from 52 → 95, delivering ~82% performance gains through UI optimization.",
      "Designed and managed CI/CD pipelines on AWS Amplify for a scalable production monorepo.",
      "Refactored Next.js codebases to improve performance, maintainability, and scalability, enforcing best practices through code reviews.",
      "Implemented Atomic Design systems and Storybook, accelerating UI development and consistency.",
      "Built Next.js API routes and a relay backend integrating with a VPC-hosted backend via custom Rust services.",
    ],
  },
  {
    title: "Research Scholar",
    company_name: "University of Waterloo, Canada (MITACS-GRI)",
    icon: wloo,
    iconBg: "#383E56",
    date: "June 2023 - August 2023",
    points: [
      "Designed and prototyped a platform to reduce spoiler content on social media, applying user-centered design and survey-driven analysis.",
      "Conducted qualitative and quantitative research, translating insights into interactive frontend prototypes.",
      "Built high-fidelity UI/UX designs using Figma, improving usability and user engagement.",
      "Gained hands-on experience in frontend development, prototyping, and user testing, reinforcing UX-driven design and interaction workflows.",
    ],
  },
  {
    title: "Software Development Engineering Intern",
    company_name: "DigitalSchmeide Bayern, Munich",
    icon: dps,
    iconBg: "#E6DEDD",
    date: "May 2022 - August 2022",
    points: [
      "Contributed to a secure internal communication platform for German Ministry staff, building responsive UI components with React.js, Redux, CSS and integrating REST APIs using Node.js and Express.js.",
      "Developed and tested backend API endpoints and data flows, ensuring reliability, security, and maintainability in a PERN stack environment.",
      "Participated in Agile sprints, collaborating with cross-functional teams to deliver incremental features.",
      "Conducted usability interviews and iterative testing to refine the frontend UX.",
      "Managed version control and CI/CD processes via GitHub Workflows.",
    ],
  },
  {
    title: "Researcher",
    company_name:
      "Defense Research and Development Organization of India (DRDO)",
    icon: drdo,
    iconBg: "#383E56",
    date: "June 2021 - December 2021",
    points: [
      "Conducted applied research on Quantum Computing, Cryptography, Internet of Behavior, and Sentiment Analysis.",
      "Implemented algorithms and data pipelines using Python, prototyping models for research and national security applications, and synthesized insights from academic papers and experiments into weekly technical reports.",
      "Proposed applications of advanced computational and behavioral technologies to support data analysis and decision-making workflows.",
    ],
  },
];

export default experiences;
