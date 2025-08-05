// Web Development Expertise
import VueIcon from "assets/devicon/vuejs.svg?component";
import NuxtIcon from "assets/devicon/nuxt.svg?component";
import BootstrapIcon from "assets/devicon/bootstrap.svg?component";
import JavascriptIcon from "assets/devicon/javascript.svg?component";
import TailwindCssIcon from "assets/devicon/tailwindcss.svg?component";
import NodeIcon from "assets/devicon/node.svg?component";
import LaravelIcon from "assets/devicon/laravel.svg?component";
// Programming Languages
import PythonIcon from "assets/devicon/python-original.svg?component";
import JavaIcon from "assets/devicon/java-original.svg?component";
import CIcon from "assets/devicon/c-plain.svg?component";
// embedded software
import CppIcon from "assets/devicon/c.svg?component";
import STMIcon from "assets/devicon/st-microelectronics-1.svg?component";
import ArduinoIcon from "assets/devicon/arduino-1.svg?component";
// Design Tools
import VsCodeIcon from "assets/devicon/vscode.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";
import Briefcase from "assets/icons/briefcase.svg?component";

const author = {
    author_image: "/Author.jpg",
    name: "Ivan Rojas",
    position: "Software Engineering Student",
    email: "itr5720@g.rit.edu",
    location: "Schenectady, NY",
    github: "ibanrohazz",
    socials: {
        // twitter: "#",
        // stackoverflow: "#",
        // youtube: "#",
        linkedin: "https://www.linkedin.com/in/ivanrojasrit/",
        // facebook: "#",
    },
    expertises: {
        "Web Development": [
            {
                name: "Bootstrap",
                icon: BootstrapIcon,
                description: "",
            },
            {
                name: "Tailwind",
                icon: TailwindCssIcon,
                description: "",
            },
            {
                name: "Javascript",
                icon: JavascriptIcon,
                description: "",
            },
            {
                name: "VueJS",
                icon: VueIcon,
                description: "",
            },
            {
                name: "Nuxt 3",
                icon: NuxtIcon,
                description: "",
            },
            {
                name: "Laravel",
                icon: LaravelIcon,
                description: "",
            },
            {
                name: "NodeJs",
                icon: NodeIcon,
                description: "",
            }
        ],
        "Embedded Development": [
            {
                name: "C++",
                icon: CppIcon,
                description: "",
            },
            {
                name: "STM",
                icon: STMIcon,
                description: "",
            },
            {
                name: "Arduino",
                icon: ArduinoIcon,
                description: "",
            }
        ],
        "Programming Languages": [
            {
                name: "Python",
                icon: PythonIcon,
                description: "",
            },
            {
                name: "Java",
                icon: JavaIcon,
                description: "",
            },
            {
                name: "C",
                icon: CIcon,
                description: "",
            },
        ],
        "Design Software": [
            {
                name: "Vs Code",
                icon: VsCodeIcon,
                description: "",
            }
        ] 
    },
    timeline: [
        {
            icon: Briefcase,
            currently: true,
            title: "Software Engineering Co-Op (SCOOP) Intern",
            subtitle: "May 2025 - Current",
            description: "Inconsistent and slow developer workflows hampered development leading to delays in onboarding, testing, and sandbox-live version discrepancies. Collaborated with a partner to redesign processes which significantly improved test data and feature validation.<br>• Reduced onboarding friction with comprehensive test case documentation<br>• Improved mock data coverage realism for better QA accuracy<br>• Identified and patched critical issues to produce a viable application for release",
        },
        {
            icon: Briefcase,
            // currently: true,
            title: "Rochester Institute of Technology Student Employee",
            subtitle: "September 2023 - May 2025",
            description: "Maintained a productive work environment with other students employees through effective communication and collaboration",
        },
        {
            icon: Briefcase,
            title: "DoorDasher",
            subtitle: "2021 - 2024",
            description: "Maintained a five star rating for over 500 deliveries and received 5 “Above and Beyond” ratings, through effective and efficient customer service and customer communication",
        },
        {
            icon: Academy,
            currently: true,
            title: "Rochester Institute of Technology Student", 
            subtitle: "2021 - Current",
            description: "Pursing a Bachelor's of Science and Master's of Science in Software Engineering",
        },
        {
            icon: Home,
            title: "Born in 2003, October",
            subtitle: "Cavite, Philippines",
            description: "TCOW metric starts here.",
        }
    ],
};

export default author;
