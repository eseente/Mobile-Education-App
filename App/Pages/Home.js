import { View, Text, Button } from 'react-native'
import React, {useContext, useEffect} from 'react'
import Services from '../Shared/Services'
import { AuthContext } from '../Context/AuthContext';
import WelcomeHeader from '../Components/WelcomeHeader';
import SearchBar from '../Components/SearchBar';
import GlobalApi from '../Shared/GlobalApi';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';
import Slider from '../Components/Slider'
import VideoCourseList from '../Components/VideoCourseList';
import CourseList from '../Components/CourseList';


export default function Home() {
    const {userData,setUserData}=useContext(AuthContext)

  return (
    <View style={{padding:20}}>
        <WelcomeHeader/>
        <SearchBar/>
        <Slider/>
        <VideoCourseList/>
        <CourseList type={'basic'} />
        <CourseList type={'advance'} />
    </View>
  )
}