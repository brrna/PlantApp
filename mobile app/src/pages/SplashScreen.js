import React from 'react'
import { ActivityIndicator, View } from 'react-native'

const SplashScreen = () => {
  return (
    <View style={{flex:1,justifyContent:"center",backgroundColor:"white"}}>
        <ActivityIndicator size={"large"} color={"green"}/>
    </View>
  )
}

export default SplashScreen
