import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../Shared/GlobalApi'
import { FlatList } from 'react-native';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function VideoCourseList() {

    const [videoList,setVideoList]=useState([]);
    const navigation=useNavigation();

    useEffect(()=>{
        getVideoCourse();
    },[])
    
    const getVideoCourse=async()=>{
      console.log("fonksiyona girdi")
        const resp=(await GlobalApi.getVideoCourse()).data;
        console.log("response datayı çekti")
        
        const result=resp.data.map((item)=>({
            id:item.id,
            name:item.attributes.title,
            description:item.attributes.description[0].children[0].text,
            image:item.attributes.image.data[0].attributes.url,
            Topic:item.attributes.VideoTopic
          }))

        console.log("result setlendi")
        setVideoList(result);
        console.log("Video Courses: "+ JSON.stringify(result)) 
    }
    const onPressCourse=(course)=>{
        
      navigation.navigate('course-detail',{courseData:course,
      courseType:'video'})
  }
  return (
    <View style={{marginTop:15}}>
        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:3}}>Video Course</Text>
     <FlatList
     data={videoList}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     renderItem={({item})=>(
        <TouchableOpacity onPress={()=>onPressCourse(item)}>
            <Image source={{uri:item.image}}
            style={{width:210,height:120,
            marginRight:10,borderRadius:7}} /> 
        </TouchableOpacity>

 
     )}
     />
    </View>
  )
}
