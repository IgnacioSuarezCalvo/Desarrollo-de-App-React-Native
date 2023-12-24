import { StyleSheet, View } from 'react-native'
import Categories from '../Components/Categories'
import Counter from '../Components/Counter'


const Home = ({navigation,route}) => {


  return (
    <View>
      <Counter/>
      <Categories navigation={navigation} route={route}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
 
})