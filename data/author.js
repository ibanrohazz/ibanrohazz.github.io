// Backend Expertise
import NodeIcon from "assets/devicon/node.svg?component";
import LaravelIcon from "assets/devicon/laravel.svg?component";
// Frontend Expertise
import VueIcon from "assets/devicon/vuejs.svg?component";
import NuxtIcon from "assets/devicon/nuxt.svg?component";
import BootstrapIcon from "assets/devicon/bootstrap.svg?component";
import JavascriptIcon from "assets/devicon/javascript.svg?component";
import TailwindCssIcon from "assets/devicon/tailwindcss.svg?component";
//Design Tools
import VsCodeIcon from "assets/devicon/vscode.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";

const author = {
    author_image: "/author.png",
    name: "Ivan Rojas",
    position: "Software Engineering Student",
    email: "itr5720@g.rit.edu",
    location: "Rochester, NY",
    github: "ibanrohazz",
    socials: {
        // twitter: "#",
        // stackoverflow: "#",
        // youtube: "#",
        linkedin: "https://www.linkedin.com/in/ivanrojasrit/",
        // facebook: "#",
    },
    expertises: {
        "Frontend": [
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
            }
        ],
        "Backend": [
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
        "Design Tools": [
            {
                name: "Vs Code",
                icon: VsCodeIcon,
                description: "",
            },
            {
                name: "",
                // icon: AdobeXdIcon,
                description: "",
            }
        ] 
    },
    timeline: [
        {
            icon: Academy,
            currently: true,
            title: "Rochester Institute of Technology Student Employee",
            subtitle: "2023 - Current",
            description: "Maintained a productive work environment with other students employees through effective communication and collaboration",
        },
        {
            icon: Academy,
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
            description: "I couldn't remember any productive work in that time.",
        }
    ],
};

export default author;
