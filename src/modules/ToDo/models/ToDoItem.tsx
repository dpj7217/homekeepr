import { status } from '../../Shared/models';
import { IModel } from '../../Shared/models';

export class ToDoItem implements IModel {
    // databse properties
    id: number;
    item_title: string;
    item_description: string;
    item_completed_date: Date;
    item_created_date: Date;
    item_due_date: Date;
    item_status: status = status.created;
    subtasks: ToDoItem[] = [];
    list_id: number; // store parent project id 
    parent_item_id: number = 0; // store parent item id IF ITEM IS A SUBTASK


    // extra properties
    static next_id: number = 0;

    constructor(
        title: string, 
        completed_date: Date, 
        description: string, 
        list_id: number,
        item_created_date: Date,
        item_due_date: Date,
        id: number = 0,  // auto added in api
        subtasks: ToDoItem[] = [], 
        parent_item_id: number = 0,
    ) {
        this.id = id;
        this.item_title = title;
        this.item_completed_date = completed_date;
        this.item_description = description;
        this.subtasks = subtasks;
        this.list_id = list_id;
        this.item_created_date = item_created_date;
        this.item_due_date = item_due_date;

        if (parent_item_id !== 0) 
            this.parent_item_id = parent_item_id;
    }
}