import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { ToDoItem as ToDoItemModel } from '../models/ToDoItem';
import { ToDoItem as ToDoItemComponent } from '../components';
import { useItemContext } from '../contexts';

interface ToDoListProps {
    project_id: number,
}



export default function ToDoList(props: ToDoListProps) {
    const itemContext = useItemContext();
    const [items, setItems] = useState(itemContext.getAll(props.project_id));

    return (
        <View style={{ borderRadius: 10, margin: 5 }}>
            { 
                items.map((value: ToDoItemModel) => {
                    console.log(`id: ${value.id}, title: ${value.item_title}, list: ${value.list_id}`)

                    return <ToDoItemComponent key={value.id} item={value}/>

                })

            }
            <Text>Hello I'm a todolist</Text>
        </View>
    )
}