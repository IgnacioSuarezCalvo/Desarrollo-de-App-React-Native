import {StyleSheet, Text, View, useWindowDimensions} from 'react-native'
import { colors } from '../Global/colors'
import { useEffect, useState } from 'react'

const Header = ({title = 'Productos'}) => {

    const{width,height}  = useWindowDimensions()
    const[lanscape,setLanscape] = useState(false)
    useEffect(()=>{
        if(width>height){
            setLanscape(true)
        } else{
            setLanscape(false)
        }
    },[width,height])
    return (

        <View style ={lanscape ? styles.containerLandscape : styles.container}>

            <Text style ={styles.text}>{title}</Text>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.yellow1,
        width:'100%',
        height:90,
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
        marginTop:25,
        
    }

})