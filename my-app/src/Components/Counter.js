import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import  { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment, incrementByAmount } from '../Features/Shop/shopSlice'

const Counter = () => {
    // const count = useSelector((state)=>state.counter.value)
    // const [amount,setAmount] = useState(0)
    // const dispatch = useDispatch()

  return (
    <View>
        {/* <View style={styles.container}>
            <Button title='Incrementar' onPress={()=>dispatch(increment())} />
            <Text>{count}</Text>
            <Button title='Decrementar' onPress={()=>dispatch(decrement())}/>
        </View>
         <View style={styles.inputContainer}>
            <TextInput  style={styles.input} onChangeText={(t)=>setAmount(parseInt(t))}/>
            <Button title='agregar' onPress={()=>dispatch(incrementByAmount(amount))}/>
        </View> */}
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'space-around',
        alignItems:"center",
        margin:10
      },
      inputContainer:{
        gap:5
      },
      input:{
        borderWidth:2,
      }
})