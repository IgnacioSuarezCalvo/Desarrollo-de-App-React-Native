import { StyleSheet, Text, View } from 'react-native'
import { Header } from 'react-native/Libraries/NewAppScreen'


const Home = () => {
  return (
    <View>
      <Header title='Categories'/>
      <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})