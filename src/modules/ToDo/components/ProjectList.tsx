import { Button, FlatList, Text, View } from 'react-native';
import { Project } from '../models/Project';
import { Project as ProjectComponent } from './Project';

interface projectListProps {
    projectList: Project[] 
}

export function ProjectList(props: projectListProps) {
    

    
    return (
        <FlatList
            data={props.projectList}
            renderItem={({item}) => <ProjectComponent project={item}/>}
            style={{ 
                top: 20,
                marginRight: 5,
                marginLeft: 5,
                borderRadius: 10,
                backgroundColor: "#e8e6e6"
            }}
        />
    )
}