import React from "react";
import { Button, Text } from "react-native";
import { Center } from "../src/components/Center";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../src/pages/Home";
import { Saved } from "../src/pages/Saved";
import { Settings } from "../src/pages/Settings";
import { Workout } from "../src/pages/Workout";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = 'Home' component= {Home}/>
            <Tab.Screen name = 'Saved' component= {Saved}/>
            <Tab.Screen name = 'Settings' component= {Settings}/>
            <Tab.Screen name = 'Workout' component= {Workout}/>
        </Tab.Navigator>
    );
}

export default BottomTab