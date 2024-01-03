import { AdvanceLevel } from "@/enums/advance-level.enum";
import { Skill } from "@/interfaces/skill.interface";

interface SkillInField {
    name: string;
    skills: Skill[];
}


export const todoSkills = [
    {
        name: "frontend",
        skills: [
            {
                name: "React",
                startedLearningDate: "2021-08",
                advancementLevel: AdvanceLevel.ADVANCED,
                description: "Favorite tech to work with."
            },
            {
                name: "Angular",
                startedLearningDate: "2023-10",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "One project done using PrimeNG and RxJS",
            },
            {
                name: "NextJS",
                startedLearningDate: "2023-06",
                advancementLevel: AdvanceLevel.INTERMEDIATE,
                description: "Currently main framework. Learning completely on my own."
            },
            {
                name: "TailwindCSS",
                startedLearningDate: "2022-04",
                advancementLevel: AdvanceLevel.ADVANCED,
                description: "Using it in every project. I love it."
            },
            {
                name: "SCSS",
                startedLearningDate: "2021-09",
                advancementLevel: AdvanceLevel.INTERMEDIATE,
                description: "Started with HTML, came back to it with Angular"
            },
            {
                name: "Responsive Web Design",
                startedLearningDate: "2021-09",
                advancementLevel: AdvanceLevel.ADVANCED,
                description: "I think I'm pretty good at it."
            },
            {
                name: "Redux",
                startedLearningDate: "2022-09",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "State management with Redux in pure React."
            }
        ]
    },
    {
        name: "backend",
        skills: [
            {
                name: "NodeJS",
                startedLearningDate: "2022-01",
                advancementLevel: AdvanceLevel.ADVANCED,
                description: "I learned NodeJS from the basics at university. I feel quite knowlegeable despite not using pure Node much."
            },
            {
                name: "ExpressJS",
                startedLearningDate: "2022-01",
                advancementLevel: AdvanceLevel.ADVANCED,
                description: "Most of my API's are built with ExpressJS, using RCS architecture."
            },
            {
                name: "MongoDB",
                startedLearningDate: "2022-08",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "Used it in some projects but I definitely prefer SQL/Graph databases"
            },
            {
                name: "Java",
                startedLearningDate: "2022-03",
                advancementLevel: AdvanceLevel.INTERMEDIATE,
                description: "Got good foundation of concepts such as: OOP, SOLID, Inheritance, Encapsulation, Clean code etc."
            },
            {
                name: "PostgreSQL",
                startedLearningDate: "2022-01",
                advancementLevel: AdvanceLevel.INTERMEDIATE,
                description: "Feeling confident in SQL."
            },
            {
                name: "SpringBoot",
                startedLearningDate: "2023-09",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "Creating REST API's with SpringBoot."
            }
        ]
    },
    {
        name: "python",
        skills: [
            {
                name: "Flask",
                startedLearningDate: "2022-09",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "I know the basics, can create simple API's. I have knowledge of REST API's from different frameworks."
            },
            {
                name: "Algorithms and Data Structures",
                startedLearningDate: "2021-09",
                advancementLevel: AdvanceLevel.INTERMEDIATE,
                description: "I've implemented various sorting, optimizing and searching algorithms. I have a good foundation of data structures."
            },
            {
                name: "BeautifulSoup",
                startedLearningDate: "2023-07",
                advancementLevel: AdvanceLevel.INTERMEDIATE,
                description: "Quite like data scraping. Used it for scraping F1 statistics data and enjoyed it."
            },
            {
                name: "Selenium",
                startedLearningDate: "2023-07",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "Used it for scraping data from websites that load data dynamically."
            },
            {
                name: 'Unittest',
                startedLearningDate: "2022-09",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "Basics of unit testing."
            }
        ]
    },
    {
        name: "other",
        skills: [
            {
                name: "Docker",
                startedLearningDate: "2022-09",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "I know the basics. I can create images, run containers and use docker-compose."
            },
            {
                name: "Bash",
                startedLearningDate: "2021-09",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "Freely navigating through the system. Used to create simple scripts, but not anymore."
            },
            {
                name: "Linux",
                startedLearningDate: "2021-09",
                advancementLevel: AdvanceLevel.INTERMEDIATE,
                description: "I use Linux as my main OS."
            },
            {
                name: "Git",
                startedLearningDate: "2021-09",
                advancementLevel: AdvanceLevel.ADVANCED,
                description: "Worked in group projects. I know how to resolve conflicts, use branches, make pull requests etc."
            },
            {
                name: "Figma",
                startedLearningDate: "2023-09",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "I can create simple designs."
            },
            {
                name: "Golang",
                startedLearningDate: "2023-02",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "Got basic knowledge of lower level programming. Created a ant simulation using Golang."
            },
            {
                name: "Scala",
                startedLearningDate: "2021-02",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "Learned Functional programming. Made programms using Akka for concurrent programming."
            },
        ]
    },
]