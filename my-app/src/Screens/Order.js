import { FlatList, StyleSheet, Text, View } from 'react-native'
import allOrder from "../Data/order.json"
import OrderItem from '../Components/OrderItem'

const Order = () => {
  return (
    <FlatList
    data={allOrder}
    keyExtractor={item=>item.id}
    renderItem={({item})=><OrderItem order={item}/>}
    />
  )
}

export default Order

const styles = StyleSheet.create({})