import { View, Text ,Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Colors from '../Shared/Colors'
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';



export default function Login() {

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '310975068639-04mcbrftdgo7e74b408hv0puqfb6jeqc.apps.googleusercontent.com',
    expoClientId:'310975068639-ut1miehrb7i45v517qr2elileoil42n2.apps.googleusercontent.com'
   
  });

  return (
    <View>
      <Image source = {require('./../Assets/Images/login.png')}>
      </Image>
      <View style ={styles.container}>
        <Text style ={styles.welcomeText} > Welcome to Mobication </Text>
  
        <Text style={{textAlign:'center',
        marginTop:100, fontSize:20}} >Login/Signup</Text>
      <TouchableOpacity style={styles.button} onPress={()=>promptAsync()}>
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