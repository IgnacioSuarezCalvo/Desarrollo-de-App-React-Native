import { StyleSheet, Text, View } from 'react-native'


const ItemDetail = () => {
  return (
    <View style={styles.ItemDetailContainer}>
      <Text>ItemDetail</Text>
    </View>
  )
}

export default ItemDetail

const styles = StyleSheet.create({
    ListCategoriesContainer:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})