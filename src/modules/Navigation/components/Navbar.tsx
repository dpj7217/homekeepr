import { Button, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialIcons } from '@expo/vector-icons';
import { ToDoScreen } from '../../ToDo/pages';

const Tab = createMaterialBottomTabNavigator();

  
function HomeScreen({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HOME SCREEN</Text>
        <Button
            title="Go To ToDos"
            onPress={() => navigation.navigate('ToDo')}
        />
        </View>
    )
}

function CalendarScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OrderScreen</Text>
        <Button
            title="Go Home"
            onPress={() => navigation.navigate('Home')}
        />
        </View>
    )
}

function BudgetScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OrderScreen</Text>
        <Button
            title="Go Home"
            onPress={() => navigation.navigate('Home')}
        />
        </View>
    )
}

function SettingScreen({navigation}) {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Settins Screen</Text>
            <Button
                title="Go Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}
  

export function Navbar() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            shifting={true}
            barStyle={{backgroundColor: "tomato", height: 85}}
        >
            <Tab.Screen 
                name="Budget"
                component={BudgetScreen}
                options={{
                    tabBarLabel: "Budget",
                    tabBarIcon: ({color}) => (<MaterialIcons name="attach-money" color={color} size={26}/>),
                }}
            />
            <Tab.Screen 
                name="Calendar"
                component={CalendarScreen}
                options={{
                    tabBarLabel: "Calendar",
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name="calendar" color={color} size={26}/>),
                }}
            />
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({color}) => (<MaterialCommunityIcons name="home" color={color} size={26}/>),
                }}
            />
            <Tab.Screen 
                name="ToDo"
                component={ToDoScreen}
                options={{
                    tabBarLabel: "To Do",
                    tabBarIcon: ({color}) => (<MaterialIcons name="fact-check" color={color} size={26}/>),
                }}          
            />
            <Tab.Screen 
                name="Settings"
                component={SettingScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarIcon: ({color}) => (<MaterialIcons name="settings" color={color} size={26}/>),
                }}          
            />
        </Tab.Navigator>
    )
}