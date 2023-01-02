import React from "react";
import { Button, Text } from "react-native";
import { Center } from "../components/Center";



export const Saved: React.FC = ({ navigation }) => {
    return (
      <Center>
        <Text>
          I am saved workouts screen
        </Text>
        <Button title = "Go to Home" onPress={() => {
          navigation.navigate('Home');
        }} 
        />
    </Center>
    )
  }