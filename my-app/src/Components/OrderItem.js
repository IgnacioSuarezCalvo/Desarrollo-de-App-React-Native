import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { colors } from '../Global/colors'

const OrderItem = ({order}) => {
     
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text1}>{order.updateAt}</Text>
            <Text style={styles.text2}>Total: $ {order.total}</Text>
        </View>
        <Feather name='search' size={25} color="black" />

    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.blue3,
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
        fontWeight:"bold"
    },
    text2:{
        fontSize:15,
    }
})