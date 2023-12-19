import { StyleSheet, Text, View, Image, useWindowDimensions, Pressable } from 'react-native'
import { colors } from '../Global/colors'
import { useEffect } from 'react'


const ProductItem = ({item,setProductDetailId}) => {
  const {width} = useWindowDimensions()


  return (
    <Pressable style={styles.container} onPress={()=>setProductDetailId(item.id)}>
      <Text style={width>350 ? styles.text : styles.textMin } >{item.title} </Text>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri:item.thumbnail}}
      
      />
      <Text style={styles.text}>{item.title}</Text>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        width:'80%',
        backgroundColor:colors.blue1,
        marginHorizontal:'10%',
        margin:10,
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        gap:25,
    },
    text:{
      width:'60%',
      textAlign:'center',
      fontSize:20,
    },
    textMin:{
      width:'60%',
      textAlign:'center',
      fontSize:10,
    },
    image:{
      minWidth:80,
      minHeight:80,
      width:'30%'
    }
})