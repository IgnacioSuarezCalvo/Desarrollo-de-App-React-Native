import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../Global/colors'
import { removeItem } from '../Features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const products = useSelector((state)=> state.shop.value.productSelected)

  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{item.title}</Text>
            <Text style={styles.text2}>{item.brand}</Text>
            <Text style={styles.text2}>Cantidad: {item.quantity} Precio $ {item.price}</Text>
        </View>
        <Entypo onPress={()=> dispatch(removeItem(products))} name='trash' size={25} color="black"/>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.blue1,
        margin:10,
        padding:10,
        height:100,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:5,
        borderWidth:2,
    },
    textContainer:{
        width:"70%",
        gap:5,
    },
    text1:{
        fontSize:19,
        color:colors.white1,
    },
    text2:{
        fontSize:15,
        color:colors.white1,
    }
})