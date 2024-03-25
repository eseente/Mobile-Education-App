import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { AuthContext } from './App/Context/AuthContext';
import { useEffect, useState } from 'react';
import Home from './App/Pages/Home';
import Services from './App/Shared/Services';
import HomeNavigation from './App/Navigations/HomeNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const [userData,setUserData]=useState();
  useEffect(()=>{
    Services.getUserAuth().then(resp=>{
      console.log(resp);
      if(resp)
      {
        setUserData(resp)
      }
      else{
        setUserData(null)
      }
    })
  },[])
  return (
    <View style={{flex:1}}>
      <AuthContext.Provider 
      value={{userData,setUserData}}>
      <NavigationContainer>

        {userData?
          <HomeNavigation/>
        :<Login/>}
      </NavigationContainer>      

      </AuthContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
