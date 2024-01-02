import { AdvanceLevel } from "@/enums/advance-level.enum";

export interface Skill {
    name: string;
    startedLearningDate: string;
    advancementLevel: AdvanceLevel;
    description: string;
}