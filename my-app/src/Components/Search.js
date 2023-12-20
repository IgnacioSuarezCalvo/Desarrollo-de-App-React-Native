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
      const removeItem = () =>{
        setInput('')
        setError('')

      }


      
  return (

  
    <View style={styles.container}>


      <View style={styles.containerInput}>
        <Pressable>
          <AntDesign name="arrowleft" size={24} color="black"  />
      
        </Pressable>
          <TextInput placeholder='Buscar producto'value={input} style={styles.textInputContainer} onChangeText={(t)=>setInput(t)}/>
          <Pressable onPress={search}>
            <AntDesign name='search1' color='black' size={30}/>
          </Pressable>
          <Pressable onPress={removeItem}>
            <Entypo name='circle-with-cross' color='black' size={30}/>
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
        justifyContent:'center',
        gap:5,
    },
    textInputContainer:{
      flexDirection:"row",
      width:'65%',
      backgroundColor:colors.white1,
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