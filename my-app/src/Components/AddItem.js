import {View, TextInput, Button, StyleSheet} from "react-native"

const AddItem = ({valueTitle,valuePrice,onChangeTitle,onChangePrice,addProduct}) =>{

    return      <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Producto" value={valueTitle} onChangeText={(t)=> onChangeTitle(t)}/>
                    <TextInput style={styles.input} placeholder="Precio" value={valuePrice} onChangeText={(t)=> onChangePrice(t)}/>
                    <Button title="Add" onPress={addProduct}/>
                </View>
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        alignItems:"center",
        alignSelf:"stretch",
        justifyContent:"space-around",
        marginTop:15,
        
      },
      input:{
        width:140,
        borderWidth:2,
        paddingHorizontal:10,
        paddingVertical:2,
        borderColor:"blue",
      },
      
})

export default AddItem