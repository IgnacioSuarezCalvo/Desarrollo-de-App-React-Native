import { StyleSheet, Text, View, Image, Pressable, useWindowDimensions } from 'react-native'
import { useEffect, useState } from 'react'
import  Header  from '../Components/Header'
import allProduct from '../Data/products.json'
import GoBack from '../Components/GoBack'
import { colors } from '../Global/colors'


const ItemDetail = ({productDetailId, setProductDetailId}) => {
  const [product,setProduct] = useState({});

  useEffect(()=>{
    const productFinded = allProduct.find(product => product.id === productDetailId)
    setProduct(productFinded)
  },[productDetailId])

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
    <View style={styles.ItemDetailContainer}>
      <Header title="Detail"/>
      <Pressable style={styles.goBack} title='go back' onPress={()=>setProductDetailId(0)}> 
        <Text>Volver</Text>
    </Pressable>

    <View styles={lanscape ? styles.contentTLandscape : styles.Content }>
        <Image
        style={lanscape ? styles.contentImageLandscape : styles.image}
        source={{uri:product.thumbnail}}
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
    goBack:{
      width:'100%',
      backgroundColor:colors.yellow1,
      padding:10,
      paddingStart:40,
    },
    containerText:{
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
      flexDirection:'row',
      paddingHorizontal:5,
      paddingVertical:5,
      gap:5,
    },
    contentImageLandscape:{
      width:"20%",
      height:150,
    },
    contentTextLandscape:{
      width:'30%',
      flexDirection:'column',
    },
    contentPriceLandscape:{
      width:'30%',
      flexDirection:'column',
    },
})