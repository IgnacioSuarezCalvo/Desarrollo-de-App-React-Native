import { FlatList, StyleSheet, View } from 'react-native'
import  Header  from '../Components/Header'
import Search from '../Components/Search'
import allProducts from '../Data/products.json'




const ItemListCategories = () => {
  return (
    <>
      <Header/>
      <Search/>
      <FlatList
        data={allProducts}
        keyExtractor={item => item.id}
        renderItem={({item})=><View>
                                <Text>{item.title}</Text>
                              </View>}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
    

})