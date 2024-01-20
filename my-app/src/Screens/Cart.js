import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import CartItem from '../Components/CartItem'
import { colors } from '../Global/colors'
import { useSelector } from 'react-redux'
import { usePortOrdersMutation } from '../App/services/shopServices'


const Cart = () => {
    const cart = useSelector(state => state.cart.value)
    const [triggerPostOrder] = usePortOrdersMutation()

  return (
    <View style={styles.container}>
        <FlatList
            data={cart.items}
            keyExtractor={item=>item.id}
            renderItem={({item})=><CartItem item={item}/>}
        />
        <View style={styles.confirmContainer}>
            <Pressable onPress={()=>triggerPostOrder(cart)}>
                <Text style={styles.text}>Confirmar</Text>
            </Pressable>
            <Text style={styles.text}>$ {cart.total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom:130,
        
    },
    confirmContainer:{
        backgroundColor:"grey",
        padding:25,
        flexDirection:'row',
        justifyContent:"space-between"
    },
    text:{
        color:colors.white1
    }
})