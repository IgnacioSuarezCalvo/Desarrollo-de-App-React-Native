 import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native';
import uuid from 'react-native-uuid';

export default function App() {

  const [newTitleProduct,setNewTitleProduct] = useState("")
  const [newPriceProduct,setNewPriceProducts] = useState("")
  const [products,setProducts] = useState([])

  const handleAddProduct = () => {

    const newProduct ={
      id:uuid.v4(),
      title:newTitleProduct,
      price:newPriceProduct
    }

    setProducts(current => [...current,newProduct])
    setNewTitleProduct("")
    setNewPriceProducts("")
  }

  return (

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Producto" value={newTitleProduct} onChangeText={(t)=> setNewTitleProduct(t)}/>
        <TextInput style={styles.input} placeholder="Precio" value={newPriceProduct} onChangeText={(t)=> setNewPriceProducts(t)}/>
        <Button title="Add" onPress={handleAddProduct}/>
      </View>
      <View style={styles.listContainer}>
        {products.map(product =>  <View key={product.id} style={styles.cardProduct}>
                                    <Text style={styles.cardTitle}>{product.title}</Text>
                                    <Text>{product.price} $</Text>
                                    <Button title='DEL'/>
                                  </View>
        )}
      </View>
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
  inputContainer:{
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"stretch",
    justifyContent:"space-around",
    marginTop:40,
  },
  input:{
    width:140,
    borderWidth:2,
    paddingHorizontal:10,
    paddingVertical:2,
  },
  listContainer:{
    width:"100%",
    marginTop:20,
  },
  cardProduct:{
    flexDirection:"row",
    padding:10,
    margin:10,
    justifyContent:"space-evenly",
    alignItems:"center",
    borderWidth:4,
  },
});
