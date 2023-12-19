import { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar} from 'react-native';
import { useFonts } from 'expo-font';
import uuid from 'react-native-uuid';


import ModalItem from './src/Components/ModalItem';
import AddItem from './src/Components/AddItem';
import ListProduct from './src/Components/ListProduct';
import  Header  from './src/Components/Header';
import Categories from './src/Components/Categories';
import Home from './src/Screens/Home';
import ItemListCategories from './src/Screens/ItemListCategories';
import ItemDetail from './src/Screens/ItemDetail';
import { colors } from './src/Global/colors';

export default function App() {

  const [newTitleProduct,setNewTitleProduct] = useState("")
  const [newPriceProduct,setNewPriceProducts] = useState("")
  const [modalVisible,setModalVisible] = useState(false)
  const [productSelected,setProductSelected] = useState({})
  const [productDetailId,setProductDetailId] = useState(0)
  const [categorySelected,setCategorySelected] = useState("")
  const [products,setProducts] = useState([])

  const handleAddProduct = () => {

    const newProduct ={
      id:uuid.v4(),
      title:newTitleProduct,
      price:newPriceProduct,
      completed:"Falta Completar"
    }

    setProducts(current => [...current,newProduct])
    setNewTitleProduct("")
    setNewPriceProducts("")
  }

  const handleModal = (item) =>{
    setProductSelected(item)
    setModalVisible(true)
  }

  const handleDeleteProduct = () =>{
    setProducts(current =>current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }

  const handleCompletedProduct = () =>{
    const index = products.findIndex(item => item === productSelected)
    products[index].completed = "Completado"
    setModalVisible(false)
  }

  const [fontLoaded] = useFonts({
    Josefin:require("./assets/Fonts/JosefinSans-Italic-VariableFont_wght.ttf"),
    Lato:require("./assets/Fonts/Lato-Regular.ttf")
  })

 

  if(!fontLoaded) return null

  

  return (
    <>
      <StatusBar
      backgroundColor={colors.yellow1}
      barStyle='default'
      />
      <SafeAreaView style={styles.container}>

        {categorySelected ? 
          productDetailId !=0 ?
              <ItemDetail productDetailId={productDetailId} setProductDetailId={setProductDetailId}/>
            
            :
              <ItemListCategories 
              category={categorySelected} 
              setCategorySelected={setCategorySelected}
              setProductDetailId={setProductDetailId}
              />
              
        :
        <Home setCategorySelected={setCategorySelected}/> 

        }

        {/* <AddItem
        valueTitle = {newTitleProduct}
        valuePrice = {newPriceProduct}
        onChangeTitle = {setNewTitleProduct}
        onChangePrice = {setNewPriceProducts}
        addProduct = {handleAddProduct}
        />

        <ListProduct
        products = {products}
        onModal = {handleModal}
        />

        <ModalItem
        product = {productSelected}
        visible = {modalVisible}
        onModal = {handleModal}
        onDelete = {handleDeleteProduct}
        setModalVisible = {setModalVisible}
        onCompleted = {handleCompletedProduct}
        /> */}
      
    
        
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    flex: 1,
    justifyContent: 'start',
  },
});
