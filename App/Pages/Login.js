import { View, Text ,Image } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View>
      <Image source = {require('./../Assets/Images/login.png')}>
      <Text style ={styles.welcomeText} >Welcome to </Text>
      </Image>
    </View>
  )
}

const styles = StyleSheet.create({
    welcomeText:{
        fontSize:35, 
        textAlign:'center',
        fontWeight:'bold',
        paddi
    }
})