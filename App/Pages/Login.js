import { View, Text ,Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';



export default function Login() {

  return (
    <View>
      <Image source = {require('./../Assets/Images/login.png')}>
      </Image>
      <View style ={styles.container}>
        <Text style ={styles.welcomeText} > Welcome to Mobication </Text>
  
        <Text style={{textAlign:'center',
        marginTop:100, fontSize:20}} >Login/Signup</Text>
      <TouchableOpacity style={styles.button}>
      <Ionicons name="logo-google" size={24} 
      color="white" style={{marginRight:10}} />
        <Text style ={{color:Colors.white}}>Sign In with Google</Text>
      </TouchableOpacity>
      
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingTop:40,
        marginTop:-25,
        backgroundColor:'#fff',
        borderTopRightRadius:30,
        borderTopLeftRadius:30
    },
    welcomeText:{
        fontSize:35, 
        textAlign:'center',
        fontWeight:'bold',
    },
    button:{
        backgroundColor:Colors.primary,
        padding:10,
        margin:30,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    }
})