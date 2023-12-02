import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Project as ProjectModel } from '../models/Project';
import { FontAwesome } from '@expo/vector-icons';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useState } from 'react';
import ToDoList from './ToDoList';


interface ProjectComponentProps {
    project: ProjectModel
}


export function Project(props: ProjectComponentProps) {

    const[isActive, setIsActive] = useState(false);

    const handleOnPress = (id: number) => {
        setIsActive(!isActive);
    }

    return (
        <View style={ isActive ? styles.parent_container_active : styles.parent_container_inactive }>
            <View style={{ flex: 1}}>
                <Pressable onPress={() => handleOnPress(props.project.id)} >
                    <View style={ isActive ? styles.child_container_active : styles.child_container_inactive}> 
                        <FontAwesome 
                            name={props.project.project_icon as keyof typeof FontAwesome.glyphMap}
                            size={30}
                            style={styles.iconLeft}
                        />
                        <Text
                            numberOfLines={1}
                            ellipsizeMode='tail'
                            style={{
                                fontFamily: `${props.project.project_fontFamily}`,
                                ...styles.title
                            }}
                        >
                            {props.project.project_title}
                        </Text>

                        { isActive ? <FontAwesomeIcon icon={faCaretDown} size={30} style={styles.iconRight} /> : <FontAwesomeIcon icon={faCaretRight} size={30} style={styles.iconRight}/> }
                    </View>
                </Pressable>
            </View>
            { isActive ?
                <View style={{ flex: 5 }}>
                    <ToDoList project_id={props.project.id}/>
                </View> 
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    child_container_active: {
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    child_container_inactive: {
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    parent_container_active: {
        border_radius: 10,
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'column'
    },
    parent_container_inactive: {
        borderRadius: 10,
        flexDirection: 'column'
    },
    iconLeft: {
        marginLeft: 15,
        flex: 1,
    },
    iconRight: {
        marginRight: 5,
        flex: 1
    },
    title: {
        fontSize: 35,
        flex: 6,
    }
})