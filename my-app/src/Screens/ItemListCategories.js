import { Button, FlatList, Pressable, StyleSheet, Text } from 'react-native'
import  Header  from '../Components/Header'
import Search from '../Components/Search'
import allProducts from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { useEffect, useState } from 'react'
import { colors } from '../Global/colors'
import GoBack from '../Components/GoBack'




const ItemListCategories = ({category , setCategorySelected, setProductDetailId}) => {

  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState(allProducts)

  useEffect(()=>{

    if(category){
      const productsCategory = allProducts.filter(product => product.category === category)
      const productsFiltered = productsCategory.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }else{
      const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
      setProducts(productsFiltered)
    }



    

  },[keyword])

  return (
    <>
      <Header/>
      <Search setKeyword={setKeyword}/>
      <Pressable style={styles.goBack} title='go back' onPress={()=>setCategorySelected('')}> 
        <Text>Volver</Text>
      </Pressable>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> <ProductItem item={item} setProductDetailId={setProductDetailId} />}
      />
    </>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
  container:{
    width:'100%',
  },
  goBack:{
    width:'100%',
    backgroundColor:colors.blue1,
    padding:10,
    paddingStart:40,
  },
  goBack:{
    width:'100%',
    backgroundColor:colors.yellow1,
    padding:10,
    paddingStart:40,
  }
})