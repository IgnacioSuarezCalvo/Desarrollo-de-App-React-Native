import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import { colors } from '../Global/colors';
import { Entypo } from '@expo/vector-icons'
import OrderStack from './OrderStack';
import TabIcon from '../Components/TabIcon';


const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown:false,
          tabBarShowLabel:false,
          tabBarStyle: styles.tabBar
        }}
      >
        <Tab.Screen 
          name="ShopStack" 
          component={ShopStack} 
          options={{
            tabBarIcon:({focused}) => <TabIcon icon="shop" label="Productos" focused={focused}/>
          }}
        />

        <Tab.Screen 
          name="CartStack" 
          component={CartStack} 
          options={{
            tabBarIcon:({focused}) => <TabIcon icon="shopping-cart" label="Carrito" focused={focused}/>
          }}

        />
        <Tab.Screen 
          name="OrderStack" 
          component={OrderStack} 
          options={{
            tabBarIcon:({focused}) => <TabIcon icon="list" label="Ordenes" focused={focused}/>
          }}
          
        />
      </Tab.Navigator>
    </NavigationContainer> 

  )
}

export default TabNavigation

const styles = StyleSheet.create({
  tabBar:{
    backgroundColor:colors.yellow1,
    elevation:4,
    position:'absolute',
    bottom:25,
    left:20,
    right:20,
    borderRadius:15,
    height:80,
  }
})