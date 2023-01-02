import React from "react";
import { Button, Text } from "react-native";
import { Center } from "../components/Center";



export const Home: React.FC = ({ navigation }) => {
    return (
      <Center>
        <Text>
          I am home screen
        </Text>
        <Button title = "Go to Workout" onPress={() => {
          navigation.navigate('Workout');
        }} 
        />
        <Button title = "Go to Saved" onPress={() => {
          navigation.navigate('Saved');
        }} 
        />
        <Button title = "Go to Settings" onPress={() => {
          navigation.navigate('Settings');
        }} 
        />
    </Center>
    )
  }