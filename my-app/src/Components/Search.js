import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native'
import { colors } from '../Global/colors'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useState } from 'react'


const Search = ({keyword, setKeyword}) => {

    const [input,setInput] = useState("")
    const [error,setError] = useState("")

    const search = () =>{
      const expression = /.*[0-9].*/
      if(expression.test(input)){
        setError('No debe contener numeros')
      }else{
        setKeyword(input)
        }
      }
      
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder='Buscar producto' style={styles.textImput} value={input} onChangeText={(t)=>setInput(t)}/>
        <Pressable onPress={search}>
          <AntDesign name='search1' color='black' size={25} />
        </Pressable>
        <Pressable onPress={()=>{setKeyword('')}}>
          <Entypo name='circle-with-cross' color='black' size={25} />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorInput}>{error}</Text> : null}
  </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container:{
      backgroundColor:colors.yellow1,
      width:'100%',
    },
    containerInput:{
        width:"100%",
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    },
    textImput:{
      width:'65%',
      backgroundColor:colors.blue1,
      borderWidth:2,
      borderRadius:5,
      paddingHorizontal:10,
      paddingVertical:5,
      margin:10,
    },
    errorInput:{
      color:'red',
      paddingHorizontal:10,
    },
})