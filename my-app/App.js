 import { StyleSheet, Text, View, StatusBar, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput style={styles.input}/>
        <Button title="Add"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    
  }
});
