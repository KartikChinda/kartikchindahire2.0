import dera from "../../public/dera.png"
import wloo from "@/public/wloo.webp";
import dps from "@/public/dps.png";
import drdo from "@/public/drdo.png";

const experiences = [
    {
        title: "Software Engineer",
        company_name: "DERA",
        icon: dera,
        iconBg: "#000",
        date: "May 2024 - Present",
        points: [
            "Integrated smart contracts with the frontend using Wagmi, RainbowKit, Next.js, and TypeScript to enhance seamless Web3 interactions.",
            "Improved Lighthouse performance metrics from 52 to 95, achieving an impressive 82% increase in overall site performance.",
            "Managed and deployed the CI/CD pipelines on Amplify for the project monorepo for a scalable and robust cloud infrastructure.",
            "Led MVP repository management, conducting extensive code reviews and refactoring to boost code quality, while implementing atomic design principles and utilizing Storybook."
        ],
    },
    {
        title: "Research Scholar",
        company_name: "University of Waterloo, Canada (MITACS-GRI)",
        icon: wloo,
        iconBg: "#383E56",
        date: "June 2023 - August 2023",
        points: [
            "Led a project aimed at mitigating spoilers on social media platforms, strengthening my expertise in user-centered design, survey creation, and data-driven analysis to improve user engagement and experience.",
            "Gained expertise in Figma for UI/UX design and interaction design. This fueled my growth in frontend development, optimizing user experience with strong skills in qualitative and quantitative research, prototyping, and user testing.",
        ],
    },
    {
        title: "Software Development Engineering Intern",
        company_name: "DigitalSchmeide Bayern, Munich",
        icon: dps,
        iconBg: "#E6DEDD",
        date: "May 2022 - August 2022",
        points: [
            "Built a communication and networking platform for German Ministry employees, improving internal collaboration.",
            "Worked in a cross-functional Agile team with Product Managers, Designers, and AI Engineers, utilizing technologies like React.js, CSS, Postman, Redux, Node.js, Express.js, PERN stack, and GitHub Workflows.",
            "Managed tasks through Jira to ensure efficient sprint planning and deployment and conducted user interviews and extensive user research.",
        ],
    },
    {
        title: "Researcher",
        company_name: "Defense Research and Development Organization of India (DRDO)",
        icon: drdo,
        iconBg: "#383E56",
        date: "June 2021 - December 2021",
        points: [
            "Conducted in-depthresearch on advanced topics like Quantum Computing, Internet of Behavior, Cryptography, and Sentiment Analysis.",
            "Delivered weekly reports on algorithms implemented, primarily in Python, and synthesized insights from research articles.",
            "Proposed innovative applications for these technologies to enhance national security."
        ],
    },

];

export default experiences;