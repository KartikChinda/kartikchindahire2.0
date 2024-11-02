import dera from "@/public/dera.png";
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
            "Working with Wagmi,RainbowKit, Next,js and Typescript to integrate smart contracts with the frontend, along with also managing the MVP repository and it's deployments on AWS. Also integrating CMS's like Ghost with the frontend.",
        ],
    },
    {
        title: "Research Scholar",
        company_name: "University of Waterloo, Canada (MITACS-GRI)",
        icon: wloo,
        iconBg: "#383E56",
        date: "June 2023 - August 2023",
        points: [
            "Worked on a project focused on mitigating spoilers in social media platforms. This experience enhanced my understanding of user-centered research methodologies, survey design and data analysis.",
            "Developed proficiency with Figma for UI and IxD, and advanced my interaction design skills. This experience fueled my growth in frontend development and user experience optimization, including expertise in qualitative and quantitative research, prototyping, and user feedback analysis.",
        ],
    },
    {
        title: "Software Development Engineering Intern",
        company_name: "DigitalSchmeide Bayern, Munich",
        icon: dps,
        iconBg: "#E6DEDD",
        date: "May 2022 - August 2022",
        points: [
            "Created a platform for the employees of German Ministries to ease their communication processes and ease their networking.",
            'Worked in a team full of Product Managers, Designers and AI engineers with a lot of interesting technologies in an Agile Methodology like ReactJs, Redux, NodeJs, Material-UI, ExpressJS, PostgressSQL, Github Workflow.',
            "Also conducted user interviews and did a plethora of user research.",
        ],
    },
    {
        title: "Researcher",
        company_name: "Defense Research and Development Organization of India (DRDO)",
        icon: drdo,
        iconBg: "#383E56",
        date: "June 2021 - December 2021",
        points: [
            "Worked on a lot of interesting domains like Quantum Computing, Internet of Behavior, Cryptography, Sentiment Analysis etc.",
            "Sent weekly reports on the different algorithms implemented (mostly in Python) and findings from different research articles read from the technological areas allocated and formed ideas on how they could be used for strengthening the nation's security.",
        ],
    },

];

export default experiences;