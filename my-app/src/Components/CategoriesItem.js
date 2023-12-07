import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../Global/colors'


const CategoriesItem = ({category}) => {
  return (
    <View style={styles.CategoriesItemContainer}>
      <Text style={styles.CategoriesItemText}>{category}</Text>
    </View>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
  CategoriesItemContainer:{
    width:"80%",
    marginHorizontal:"10%",
    backgroundColor:colors.blue1,
    margin:10,
    padding:10,
    justifyContent:"center",
    alignItems:"center",
    elevation:10,
  },
  CategoriesItemText:{

  }
})