import {Pressable, StyleSheet, Text, View, useWindowDimensions} from 'react-native'
import { colors } from '../Global/colors'
import { useEffect, useState } from 'react'
import {MaterialIcons} from '@expo/vector-icons'
import { deleteAllSession } from '../database'
import { useSelector, useDispatch } from 'react-redux'
import { clearUser } from '../Features/auth/authSlice'

const Header = ({title = 'Productos'}) => {
    const dispatch = useDispatch()
    const localId = useSelector(state => state.auth.value.localId )
    const{width,height}  = useWindowDimensions()
    const[lanscape,setLanscape] = useState(false)

    
    useEffect(()=>{
        if(width>height){
            setLanscape(true)
        } else{
            setLanscape(false)
        }
    },[width,height])

    const onLogout = () =>{
        deleteAllSession()
        dispatch(clearUser())
    }
    return (
        <View style ={lanscape ? styles.containerLandscape : styles.container}>
            <Text style ={styles.text}>{title}</Text>
            {localId && <Pressable onPress={onLogout} style={styles.logoutIcon}>
                <MaterialIcons name='logout' size={30} color="black" />
            </Pressable>}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.yellow1,
        width:'100%',
        height:80,
        justifyContent:'center',
        alignItems:'center'
    },
    containerLandscape:{
        backgroundColor:colors.yellow1,
        width:'100%',
        height:40,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:20,
        fontFamily:'Lato',
    },
    logoutIcon:{
      position:'absolute',
      right:10
    }

})