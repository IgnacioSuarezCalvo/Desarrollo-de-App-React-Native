import { Pressable, StyleSheet, Text } from 'react-native'
import { colors } from '../Global/colors'
import {useDispatch } from 'react-redux'
import {setProductsFilteredByCategory} from "../Features/Shop/shopSlice"

const CategoriesItem = ({category,navigation,route}) => {
  const dispatch = useDispatch()
  return (
    <Pressable style={styles.CategoriesItemContainer} onPress={()=> {
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate('Category',{category})
      }} >
      <Text style={styles.CategoriesItemText}>{category}</Text>
    </Pressable>
  )
}

export default CategoriesItem

const styles = StyleSheet.create({
  CategoriesItemContainer:{
    width:"96%",
    backgroundColor:colors.blue1,
    margin:8,
    padding:8,
    alignItems:"center",
    justifyContent:"center",
    elevation:10,
    
  },
  CategoriesItemText:{
    padding:2,
  }
})