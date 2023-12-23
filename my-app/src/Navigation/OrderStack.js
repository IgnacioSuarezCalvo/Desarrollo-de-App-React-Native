import { StyleSheet } from 'react-native'
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Order from '../Screens/Order';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
          initialRouterName='Order'
          screenOptions={
            ({route})=>{
              return {
                header : ()=> <Header title='Ordenes'/>
                }          
              }
            }
    >

        <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  )
}

export default OrderStack

const styles = StyleSheet.create({})