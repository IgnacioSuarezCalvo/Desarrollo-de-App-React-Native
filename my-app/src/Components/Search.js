import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import { colors } from '../Global/colors'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useState } from 'react'


const Search = ({keyword, setKeyword}) => {

    const [input,setInput] = useState("")

  return (
    <View style={styles.ListCategoriesContainer}>
    <TextInput placeholder='Buscar producto' style={styles.textImput} value={input} onChangeText={(t)=>setInput(t)}/>
    <Pressable onPress={()=>{setKeyword(input)}}>
      <AntDesign name='search1' color='black' size={25} />
    </Pressable>
    <Pressable onPress={()=>{setKeyword('')}}>
      <Entypo name='circle-with-cross' color='black' size={25} />
    </Pressable>
  </View>
  )
}

export default Search

const styles = StyleSheet.create({
    ListCategoriesContainer:{
        width:"100%",
        backgroundColor:colors.yellow1,
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

    }
})