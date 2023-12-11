import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const ProductItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    container:{
        width:'80%',
        backgroundColor:colors.blue1,
        marginHorizontal:'10%',
        margin:10,
        marginVertical:10,
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:5
    }
})