import { StyleSheet } from 'react-native'
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../Screens/Cart';

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
          initialRouterName='Home'
          screenOptions={
            ({route})=>{
              return {
                header : ()=> <Header title='Carrito'/>
                }          
              }
            }
    >

        <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})