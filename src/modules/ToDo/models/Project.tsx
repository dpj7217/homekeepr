import { colors, IModel, singleColor, status } from '../../Shared/models';

export class Project implements IModel{
    id: number;
    project_title: string;
    project_description: string;
    project_icon: string; // choose from fontAwesome pack
    project_due_date: Date;
    project_created_on: Date;
    project_completed_on: Date;
    project_color: singleColor;
    project_status: status = status.created;
    project_fontFamily: string = "Victor Mono"

    constructor(
        project_title: string,
        id?: number,
        project_due_date?: Date,
        project_description?: string,
        project_created_on?: Date,
        project_completed_on?: Date,
        project_color?: singleColor,
        project_status: status = status.created,
        project_icon?: string,
        project_fontFamily?: string
    ) {
        this.project_title = project_title;
        this.id = id ? id : 1;
        this.project_due_date = project_due_date ? project_due_date : new Date(0);
        this.project_description = project_description ? project_description : "";
        this.project_created_on = project_created_on ? project_created_on : new Date(0);
        this.project_completed_on = project_completed_on ? project_completed_on : new Date(0);
        this.project_color = project_color ? project_color : colors.light;
        this.project_status = project_status ? project_status : status.created;
        this.project_icon = project_icon ? project_icon : "inbox" // choose from fontAwesome pack 
        this.project_fontFamily = project_fontFamily ? project_fontFamily : "NotoSerif"
    }
}