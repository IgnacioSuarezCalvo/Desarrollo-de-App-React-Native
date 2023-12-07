import { StyleSheet, Text, View } from 'react-native'


const ItemListCategories = () => {
  return (
    <View style={styles.ListCategoriesContainer}>
      <Text>ItemListCategories</Text>
    </View>
  )
}

export default ItemListCategories

const styles = StyleSheet.create({
    ListCategoriesContainer:{
        width:"100%",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }

})