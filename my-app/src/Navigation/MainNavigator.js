import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from "./TabNavigation"
import { useState } from 'react'
import AuthStack from './AuthStack'
import { useSelector } from 'react-redux'


const MainNavigator = () => {

    const idToken = useSelector(state=>state.auth.value.idToken)

  return (
    <NavigationContainer>
        {idToken ? <TabNavigation/> : <AuthStack/>} 
        
    </NavigationContainer>
  )
}

export default MainNavigator

