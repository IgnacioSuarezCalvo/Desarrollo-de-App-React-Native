import { StyleSheet, View } from 'react-native'
import  Header  from '../Components/Header'
import Categories from '../Components/Categories'


const Home = ({setCategorySelected}) => {
  return (
    <View>
      <Header title='Categorias' />
      <Categories setCategorySelected={setCategorySelected}/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({

})