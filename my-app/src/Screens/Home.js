import { StyleSheet, View } from 'react-native'
import Categories from '../Components/Categories'


const Home = ({navigation,route}) => {


  return (
    <View>
      <Categories navigation={navigation} route={route}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})