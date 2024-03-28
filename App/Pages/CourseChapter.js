import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import Colors from '../Shared/Colors';

export default function CourseChapter() {
    const navigation=useNavigation();
    const param=useRoute().params;
    const [chapter, setChapter]=useState([])
    const [run,setRun]=useState(false);
    const [currentIndex,setCurrentIndex]=useState(0);
    let chapterRef;

    useEffect(()=>{
        console.log(param)
        setChapter(param.courseContent)//Content farklı olabilir buna bak sonra
    },[])

    const onClickNext=(index)=>{
        setRun(false)
        try{
            chapterRef.scrollToIndex({animated:true,index:index+1})  
        }
        catch(e)
        {   
            console.log(e);
            navigation.goBack()    
        }
    }

  return (
    <View style={{padding:20,paddingTop:50,flex:1}}>
    <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-sharp" size={24} color="black" />
    </TouchableOpacity>
    <FlatList
    data={chapter}
    horizontal={true}
    pagingEnabled
    ref={(ref)=>{
        chapterRef=ref
    }}
    renderItem={({item, index})=>[
        <View style={{width:Dimensions.get('screen').width*0.85,
        marginRight:15,padding:10}}>
            <Text style={{fontSize:18,fontWeight:'bold'}}>{item.name}</Text>
            <Text>{item.description}</Text>
            {item.input!=''?
               <View>
               <View  style={{backgroundColor:Colors.black,
                padding:20,borderRadius:10}}>
                    <Text style={{color:Colors.white}}>{item.input}</Text>
                </View>
                <TouchableOpacity style={{backgroundColor:Colors.primary,width:60,
                padding:5,borderRadius:5,
                marginTop:10,display:'flex',flexDirection:'row'
                }} onPress={()=>setRun(true)}>
                     <Ionicons name="play-circle" size={20}
             color={Colors.white} />
                    <Text style={{textAlign:'center',marginLeft:5, color:Colors.white}}>Run</Text>
                </TouchableOpacity>
                </View>:null}
               {run? <View style={{marginTop:15}}>
                    <Text style={{fontWeight:'bold',}} >Output</Text>
                    <View style={{backgroundColor:Colors.black,
                padding:20,borderRadius:10,marginTop:10}}>
                    <Text style={{color:Colors.white}}>
                        {item.output}</Text>
                </View>
                </View>:null}
               {index+1!=chapter.length? <TouchableOpacity 
                onPress={()=>onClickNext(index)} 
                    style={{backgroundColor:Colors.primary,
                padding:10,borderRadius:7,position:'absolute',bottom:0,
                width:'110%'}}>
                        <Text style={{textAlign:'center',color:Colors.white}}>Next</Text>
                </TouchableOpacity>:
                <TouchableOpacity 
                onPress={()=>onClickNext(index)} 
                    style={{backgroundColor:Colors.green,
                padding:10,borderRadius:7,position:'absolute',bottom:0,
                width:'110%'}}>
                        <Text style={{textAlign:'center',color:Colors.white}}>Finish</Text>
                </TouchableOpacity>}
        </View>
    ]}
    />


    </View>
  )
}