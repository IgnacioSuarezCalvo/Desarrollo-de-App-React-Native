import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
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

  return (
    <View style={styles.ItemDetailContainer}>
      <Header title="Detail"/>
      <Pressable style={styles.goBack} title='go back' onPress={()=>setProductDetailId(0)}> 
        <Text>Volver</Text>
    </Pressable>
      <Image
      style={styles.image}
      source={{uri:product.thumbnail}}
      resizeMode='cover'
      />
      <View style={styles.containerText}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.containerPrice}>
        <Text style={styles.price}>$ {product.price}</Text>
        <Pressable style={styles.buyNow}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </Pressable>
      </View>
      
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    ListCategoriesContainer:{
        width:"100%",
        flex:1,
        justifyContent:"start",
        alignItems:"center"
    },
    image:{
      width:'100%',
      height:300,
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
    }
    
})