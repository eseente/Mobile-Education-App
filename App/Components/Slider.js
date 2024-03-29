import { View, Image, Dimensions, FlatList, SafeAreaView} from 'react-native'
import React, {useEffect, useState} from 'react'
import GlobalApi from '../Shared/GlobalApi';

export default function Slider() {
    const [slider,setSlider]=useState([])
    useEffect(()=>{
        getSlider();
      },[])
  
      const getSlider=async()=>{

        const result=(await GlobalApi.getSlider()).data;
        const resp=result.data.map((item)=>({
            id:item.id,
            name:item.attributes.name,
            image:item.attributes.image.data.attributes.url
        }))
        //console.log("SliderList",resp);
        setSlider(resp)
      }
  return (
    <View style={{marginTop:10}}>
        <FlatList
            data={slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            key={slider.id}
            renderItem={({item})=>(
                <View>
                    <Image source={{uri:item.image}}
                    style={{width:Dimensions.get('screen').width*0.67
                    ,height:150,borderRadius:10,marginRight:15, resizeMode: 'cover' }}
                    />
                </View>
                
            )}
        />
    </View>
  ) 
}