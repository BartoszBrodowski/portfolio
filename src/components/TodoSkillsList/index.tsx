'use client'

import { todoSkills } from "@/data/todo-skills.data";
import { FunctionComponent } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ToDoSkillsTable from "./ToDoSkillsTable";

interface ToDoSkillsListProps {
    
}

const tabs = ["frontend", "backend", "fullstack"];
 
const ToDoSkillsList: FunctionComponent<ToDoSkillsListProps> = () => {
    return (  
        <div id="skills" className="flex flex-col justify-center items-center gap-8 w-full h-screen pt-4">
            <div className="flex flex-col text-center gap-2">
                <h1 className="text-5xl font-bold">Skills</h1>
                <p className="text-md text-muted-foreground">I better start learning so I'm done by the end of the day...</p>
            </div>
            <Tabs defaultValue={tabs[0]} className="w-4/5 h-full">
                <TabsList className="grid w-full grid-cols-3 w-1/3">
                    {tabs.map((tab) => {
                        return (
                            <TabsTrigger value={tab}>{tab.charAt(0).toUpperCase() + tab.slice(1)}</TabsTrigger>
                        )
                    })}
                </TabsList>
                {todoSkills.map((field) => {
                    return (
                        <TabsContent value={field.name} className="w-full h-full">
                            <ToDoSkillsTable skills={field.skills} />
                        </TabsContent>
                    )
                })}
            </Tabs>
        </div>
    );
}
 
export default ToDoSkillsList;