import {View, Text} from 'react-native';
import { ToDoItem as ToDoItemModel } from '../models/ToDoItem';

interface ToDoItemProps {
    item: ToDoItemModel,
}

export function ToDoItem(props: ToDoItemProps) {
    return (
        <View>
            <Text>Name: {props.item.item_title}</Text>
        </View>
    )
}