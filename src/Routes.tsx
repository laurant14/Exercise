import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Text, View } from 'react-native';
import { Center } from './Center';

interface RoutesProps{}

const Stack = createStackNavigator();

function Home({ navigation }){
    return (
        <Center>
             <Text>
                I am home screen
            </Text>
            <Button title = "Go to Workout" onPress={() => {
                navigation.navigate('Workout');
            }} 
            />
        </Center>
    )
}

function Workout( {navigation} ){
    return (
        <Center>
             <Text>
                I am a workout screen
            </Text>
            <Button title = "Go to Home" onPress={() => {
                navigation.navigate('Home')
            }}
            />
        </Center>
    )
}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name = "Home" component = {Home} />
                <Stack.Screen name = "Workout" component = {Workout} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}