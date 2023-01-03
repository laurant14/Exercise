import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View } from 'react-native';
import { Center } from './src/components/Center';
import { Home } from './src/pages/Home';
import { Workout } from './src/pages/Workout';
import { Saved } from './src/pages/Saved';
import { Settings } from './src/pages/Settings';
import BottomTab from './src/BottomTab';

interface RoutesProps{}


const App: React.FC<RoutesProps> = ({}) => {
    return (
         <NavigationContainer>
             <BottomTab/>
        </NavigationContainer>
    );
}

export default App;