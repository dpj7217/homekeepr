import { useContext, createContext, useState, useEffect } from "react";
import { ToDoItem } from "../models";
import { status } from '../../Shared/models';
import { openDatabase } from "react-native-sqlite-storage";

const toDoItemsList: ToDoItem[] = [
    {"id":1,"item_title":"Methyl Salicylate, Menthol and Capsaicin","item_description":"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":2,"parent_item_id":1},
    {"id":2,"item_title":"ALOE VERA LEAF","item_description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":9,"parent_item_id":1},
    {"id":3,"item_title":"dextran 70 and hypromellose 2910","item_description":"Sed ante. Vivamus tortor. Duis mattis egestas metus.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":9,"parent_item_id":1},
    {"id":4,"item_title":"Alcohol","item_description":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":3,"parent_item_id":1},
    {"id":5,"item_title":"minoxidil","item_description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":2,"parent_item_id":1},
    {"id":6,"item_title":"Avobenzone, Homosalate, Octisalate, Octocrylene, Oxybenzone","item_description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":2,"parent_item_id":1},
    {"id":7,"item_title":"Pyrithione Zinc","item_description":"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":1,"parent_item_id":1},
    {"id":8,"item_title":"Phenylephrine Tannate and Chlorpheniramine Tannate","item_description":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":7,"parent_item_id":1},
    {"id":9,"item_title":"SALICYLIC ACID","item_description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":10,"parent_item_id":1},
    {"id":10,"item_title":"LIDOCAINE HYDROCHLORIDE and EPINEPHRINE","item_description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.","item_completed_date":new Date(),"item_created_date":new Date(),"item_due_date":new Date(),"item_status":status.created,"subtasks": [],"list_id":6,"parent_item_id":1}
]


interface ToDoItemContext {
    getAll: (list_id: number) => ToDoItem[];
    createItem: (body: any) => Promise<ToDoItem>;
    updateStatus: (id: number) => Promise<ToDoItem>;
    deleteItem: (id: number) => Promise<ToDoItem>;
    undoDeleteItem: (item: ToDoItem) => Promise<ToDoItem>;
    healthCheck: () => void;
}

// const parseJSON = (response: Response) => {
//     return response.text().then((text: string) => {
//         return text ? JSON.parse(text) : [];
//     });
// } 


export const ItemContext = createContext<ToDoItemContext | undefined>(undefined);

export function ItemProvider(props: any) {

    // id: number;
    // item_title: string;
    // item_description: string;
    // item_completed_date: Date;
    // item_created_date: Date;
    // item_due_date: Date;
    // item_status: status = status.created;
    // subtasks: ToDoItem[] = [];
    // list_id: number; // store parent project id 
    // parent_item_id: number = 0; // store parent item id IF ITEM IS A SUBTASK


    var value: ToDoItemContext = {

        healthCheck: () => {
            console.log('Item Context working');
        },

        getAll: (list_id: number) => {

            const itemsForList = toDoItemsList.filter((value) => value.list_id === list_id)

            return itemsForList;


            // const db = openDatabase({name: 'items.db', location: 'default'});

            // try {
            //     const query = `CREATE TABLE IF NOT EXISTS to_do_items (
            //         id INTEGER NOT NULL,
            //         item_title TEXT NOT NULL,
            //         item_description TEXT NOT NULL, 
            //         item_completed_date TEXT NOT NULL,
            //         item_created_date TEXT NOT NULL,
            //         item_due_date TEXT NOT NULL,
            //         item_status INTEGER NOT NULL,
            //         list_id INTEGER NOT NULL
            //     )`;
            //     await db.executeSql(query);

            //     const getQuery = `SELECT * from to_do_items`;

            //     const result = await db.executeSql(getQuery);

            //     const items = [];

            //     result.forEach((result) => {
            //         for (let i = 0; i < result.rows.length; i++) {
            //             items.push(result.rows.item(i));
            //         }
            //     })

            //     return items;
            // }
            // catch (err) {
            //     console.log(err)
            //     throw Error('could not get items');
            // }
            // //return await response.json();

            // return [];
        },

        updateStatus: async (id: number) => {
            try {
                const response = await fetch(`/items/update/status/${id}`)
                return await response.json();
            } catch (err) {
                console.error(`Error in ItemContext when updating status on item with id "${id}"`);
                throw new Error(`Error! ${err}`);
            }
        },

        /**
        * BODY: 
        * { 
        *      item_title: string;
        *      list_id: number;
        *      item_description?: string;
        *      item_completed_date?: Date;
        *      item_created_date?: Date;
        *      item_due_date?: Date;
        *      item_status?: status;
        *      subtasks?: ToDoItem[];
        *      parent_item_id?: number;
        *  } 
        */
        createItem: async (body: any) => {
            if (!Object.keys(body).includes("item_title") || !Object.keys(body).includes("list_id")) {
                console.error(`Error! Malformed body. Provided: "${JSON.stringify(body)}"`);
                throw new Error(`Error! Malformed body. Provided: "${JSON.stringify(body)}"`);
            }

            try {
                const response = await fetch('/items/create', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    }, 
                    body: JSON.stringify(body)
                });

                return await response.json();
            } catch (err) {
                console.error(`Error in ItemContext when creating item ${body.item_title}`);
                throw new Error(`Error! ${err}`);
            }
        },

        deleteItem: async (id: number) => {
            try {
                const response = await fetch(`/items/delete/${id}`, {
                    method: "DELETE"
                });

                return await response.json();
            } catch (err) {
                console.error(`Error in ItemContext when creating item with id: ${id}`);
                throw new Error(`Error! ${err}`);
            }
        },

        undoDeleteItem: async (item: ToDoItem) => {
            try { 
                const response = await fetch('/items/create', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    body: JSON.stringify(item)
                });

                return await response.json();
            } catch (err) {
                console.error(`Error in ItemContext when creating item with id: ${item.id}`);
                throw new Error(`Error! ${err}`);
            }
        }, 



    }

    return (
        <ItemContext.Provider value={value}>
            { props.children }
        </ItemContext.Provider>
    )
}

export function useItemContext() {
    const context = useContext(ItemContext);

    if (context === undefined) {
        throw new Error("Context is undefined; Must be used within an <ItemContext>")
    }

    return context;
}