import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View } from 'react-native';
import { Center } from './src/Center';
import { Home } from './src/pages/Home';
import { Workout } from './src/pages/Workout';

interface RoutesProps{}

const Stack = createStackNavigator();


const App: React.FC<RoutesProps> = ({}) => {
    return (
         <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Workout" component={Workout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;