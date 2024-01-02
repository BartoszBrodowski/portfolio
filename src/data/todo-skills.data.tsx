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
                startedLearningDate: "2021-08-01",
                advancementLevel: AdvanceLevel.ADVANCED,
                description: "Favorite tech to work with. Most advanced."
            },
            {
                name: "Angular",
                startedLearningDate: "2023-10-01",
                advancementLevel: AdvanceLevel.BEGINNER,
                description: "One project done using PrimeNG and RxJS",
            }
        ]
    }
]