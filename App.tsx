import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View } from 'react-native';
import { Center } from './src/components/Center';
import { Home } from './src/pages/Home';
import { Workout } from './src/pages/Workout';
import { Saved } from './src/pages/Saved';
import { Settings } from './src/pages/Settings';

interface RoutesProps{}

const Stack = createStackNavigator();


const App: React.FC<RoutesProps> = ({}) => {
    return (
         <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Workout" component={Workout} />
                <Stack.Screen name="Saved" component={Saved} />
                <Stack.Screen name="Settings" component={Settings} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;