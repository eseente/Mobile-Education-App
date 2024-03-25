import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Pages/Home';
import CourseDetails from '../Pages/CourseDetails';


const Stack = createNativeStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="home" component={Home} ></Stack.Screen>
        <Stack.Screen name="course-detail" component={CourseDetails} ></Stack.Screen>
    </Stack.Navigator>
  )
}