import { StyleSheet, View } from 'react-native'
import  Header  from '../Components/Header'
import Categories from '../Components/Categories'


const Home = () => {
  return (
    <View>
      <Header title='Categorias'/>
      <Categories/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})