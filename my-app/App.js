 import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Buscar productos'/>
        <Button title="Add"/>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.cardProduct}>
          <Text>Fernet</Text>
          <Text>2500$</Text>
          <Button title='DEL'/>
        </View>
        <View style={styles.cardProduct}>
          <Text>Coca Cola</Text>
          <Text>2500$</Text>
          <Button title='DEL'/>
        </View>
        <View style={styles.cardProduct}>
          <Text>Gancia</Text>
          <Text>2500$</Text>
          <Button title='DEL'/>
        </View>
        <View style={styles.cardProduct}>
          <Text>Sprite</Text>
          <Text>2500$</Text>
          <Button title='DEL'/>
        </View>
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
    alignSelf:"stretch",
    justifyContent:"space-around",
    marginTop:40,
  },
  input:{
    width:250,
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
