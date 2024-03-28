import { View, Text,Image, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../Shared/Colors';
import CourseContent from '../Components/CourseContent';


export default function CourseDetails() {
  const param=useRoute().params;
  const [course, setCourse]=useState([])
  const navigation=useNavigation();
  useEffect(()=>{
      setCourse(param.courseData)
      console.log(param.courseData)
  },[param])
  
  return (
    <View style={{padding:20, paddingTop:30}}> 
    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
    </TouchableOpacity>
      <View>
          <Text style={{fontSize:20,
          fontWeight:'bold'}}>{course.name}</Text>
          <Text style={{color:Colors.gray}}>By Mobication</Text>
          <Image source={{uri:course.image}} 
          style={{height:150,marginTop:10,borderRadius:10}}/>
          <Text style={{marginTop:10, fontWeight:'bold', fontSize:16}}>About Course</Text>
          <Text numberOfLines={4} 
          style={{color:Colors.gray}}>{course.description}</Text>
      </View>
      <CourseContent course={course}/>    
    </View>
  )
}