import { FlatList, StyleSheet, View } from 'react-native'
import  Header  from '../Components/Header'
import Search from '../Components/Search'
import allProducts from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'




const ItemListCategories = () => {

  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState(allProducts)

  useEffect(()=>{
    const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
    setProducts(productsFiltered)

  },[keyword])

  return (
    <>
      <Header/>
      <Search setKeyword={setKeyword}/>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductItem item={item} />}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:'100%'
  }

})