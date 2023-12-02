import { createContext, useContext } from "react";
import { Project } from "../models/Project";

interface ToDoProjectContext {
    getSingle: (project_id: number) => Promise<Project>;
    create: (body: any) => Promise<Project>;
}

export const ProjectContext = createContext<ToDoProjectContext | undefined>(undefined)

export function ProjectProvider(props: any) {

    const value: ToDoProjectContext = {
        getSingle: async (project_id: number) => {
            const response = await fetch(`/projects/${project_id}`);

            return await response.json();
        },


        /**
        * BODY 
        * {
        *      project_title: string;
        *      id?: number;
        *      project_description?: string;
        *      project_due_date?: Date;
        *      project_created_on?: Date;
        *      project_completed_on?: Date;
        *      project_color?: singleColor;
        *      project_status?: status;
        * }
        */
        create: async (body: any) => {
            if (!Object.keys(body).includes("project_title")) {
                console.error("Malformed body! Body object must include project_title to create a project");
                throw new Error("Malformed body! Body object must include project_title to create a project");
            } 

            try {
                const response = await fetch('/projects/create', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    }, 
                    body: JSON.stringify(body)
                });

                return await response.json();
            } catch (err) {
                console.error(`Error in ProjectContext when creating item ${body.project_title}: ${err}`);
                throw new Error(`Error! ${err}`);
            }
            
        }
    }

    return (
        <ProjectContext.Provider value={value}>
            {props.children}
        </ProjectContext.Provider>
    )

}

export function useProjectContext() {
    const context = useContext(ProjectContext);

    if (context === undefined) {
        console.error("Context is undefined; Must be used within an <ProjectContext>")
        throw new Error("Context is undefined; Must be used within an <ProjectContext>")
    }

    return context;
}