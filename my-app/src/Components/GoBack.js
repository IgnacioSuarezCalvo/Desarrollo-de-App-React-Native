import { StyleSheet, Text, Pressable } from 'react-native'
import { colors } from '../Global/colors'


const GoBack = ({setCategorySelected}) => {
  return (
    <Pressable style={styles.goBack} title='go back' onPress={()=>setCategorySelected('')}> 
        <Text>Volver</Text>
    </Pressable>
  )
}

export default GoBack

const styles = StyleSheet.create({
    goBack:{
        width:'100%',
        backgroundColor:colors.yellow1,
        padding:10,
        paddingStart:40,
      }
})