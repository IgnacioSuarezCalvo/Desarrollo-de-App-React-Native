import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Button, FlatList, Modal, VirtualizedList } from 'react-native';
import uuid from 'react-native-uuid';


import ModalItem from './src/Components/ModalItem';
import AddItem from './src/Components/AddItem';
import ListProduct from './src/Components/ListProduct';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [newTitleProduct,setNewTitleProduct] = useState("")
  const [newPriceProduct,setNewPriceProducts] = useState("")
  const [modalVisible,setModalVisible] = useState(false)
  const [productSelected,setProductSelected] = useState({})

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

  return (

    <View style={styles.container}>

      <Header title='titulo'/>

      <AddItem
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
      onCompleted = {handleCompletedProduct}
      />  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
    marginTop:4,
  },
});
