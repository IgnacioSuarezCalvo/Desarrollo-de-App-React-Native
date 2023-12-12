import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../Data/categories.json'
import CategoriesItem from './CategoriesItem'

const Categories = ({setCategorySelected}) => {
  return (
    <View style={styles.container}>
        <FlatList
            style={styles.container}
            data={categories}
            keyExtractor={item => item}
            renderItem={({item})=> <CategoriesItem setCategorySelected={setCategorySelected} category={item}/>}
    
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container:{
      width:'100%',

    },
})