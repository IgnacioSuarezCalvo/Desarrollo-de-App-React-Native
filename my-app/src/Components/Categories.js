import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../Data/categories.json'
import CategoriesItem from './CategoriesItem'

const Categories = ({}) => {
  return (
    <View>
        <FlatList
            style={styles.CategoriesContainer}
            data={categories}
            keyExtractor={item => item}
            renderItem={({item})=> <CategoriesItem category={item}/>}
    
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    CategoriesContainer:{
        width:"100%",
        
    }
})