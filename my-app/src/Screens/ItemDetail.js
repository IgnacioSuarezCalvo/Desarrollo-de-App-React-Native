import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import { useSelector} from 'react-redux'

const ItemDetail = ({route}) => {
  
  const{width,height}  = useWindowDimensions()
  const[lanscape,setLanscape] = useState(false)
  const images = product.images ? product.images : []
  const product = useSelector((state)=>state.shop.value.productSelected)

  useEffect(()=>{
      if(width>height){
          setLanscape(true)
      } else{
          setLanscape(false)
      }
  },[width,height])

  return (
    <View style={styles.ItemDetailContainer}>
    <View style={lanscape ? styles.contentTLandscape : styles.Content }>
        <Image
        style={lanscape ? styles.contentImageLandscape : styles.image}
        source={{uri:images[2]}}
        resizeMode='cover'
        />
      <View style={ lanscape ? styles.contentDescriptionLandscape : styles.Description}>
          <View style={ lanscape ? styles.contentTextLandscape : styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
          </View>

          <View style={ lanscape ? styles.contentPriceLandscape : styles.containerPrice}>
            <Text style={styles.price}>$ {product.price}</Text>
            <Pressable style={styles.buyNow}>
              <Text style={styles.buyNowText}>Buy Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
      
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    ListCategoriesContainer:{
        width:"100%",
        flex:1,
        alignItems:"center",
    },
    Content:{
      width:"100%",
      alignItems:"center",
    },
    image:{
      width:'100%',
      height:200,
    },
    Description:{
      width:'100%',
    },
    containerText:{
      width:'100%',
      gap:15,
      paddingHorizontal:5,
      paddingVertical:15,
    },
    containerPrice:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      marginVertical:10,
    },
    title:{
      alignItems:'center',
      justifyContent:'space-around',
      fontSize:20,
      fontWeight:'bold',
    },
    price:{
      fontSize:30,
    },
    buyNow:{
      backgroundColor:colors.yellow1,
      paddingVertical:10,
      paddingHorizontal:10,
      borderRadius:5
    },
    contentTLandscape:{
      width:'100%',
      flexDirection:'row',
      alignItems:'center',
      
    },
    contentDescriptionLandscape:{
      flexDirection:'column',
      paddingHorizontal:5,
      paddingVertical:5,
      gap:30,
      alignItems:'center',
      
    },
    contentImageLandscape:{
      marginTop:20,
      width:"40%",
      height:250,
    },
    contentTextLandscape:{
      width:'100%',
      flexDirection:'column',
      
    },
    contentPriceLandscape:{
      width:'30%',
      flexDirection:'row',
      
      
    },
})