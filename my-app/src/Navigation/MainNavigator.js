import { NavigationContainer } from '@react-navigation/native'
import TabNavigation from "./TabNavigation"
import { useEffect, useState } from 'react'
import AuthStack from './AuthStack'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSession } from '../database'
import { setUser } from '../Features/auth/authSlice'


const MainNavigator = () => {
    const dispatch = useDispatch()
    const idToken = useSelector(state => state.auth.value.idToken)

    useEffect(()=>{
      (async ()=>{
        try{
          const sessionUser = await fetchSession()
          if(sessionUser.rows.length){
            const user = sessionUser.rows._array[0]
            dispatch(setUser(user))
          }
        } catch (error){
          console.log(error.message)
        }
      })()
    },[])

  return (
    <NavigationContainer>
        {idToken ? <TabNavigation/> : <AuthStack/>} 
        
    </NavigationContainer>
  )
}

export default MainNavigator

