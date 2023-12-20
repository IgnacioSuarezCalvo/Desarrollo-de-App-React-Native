import { FlatList, StyleSheet, View } from 'react-native'
import categories from '../Data/categories.json'
import CategoriesItem from './CategoriesItem'

const Categories = ({navigation,route}) => {
  return (
    <View style={styles.container}>
        <FlatList
            style={styles.container}
            data={categories}
            keyExtractor={item => item}
            renderItem={({item})=> <CategoriesItem category={item} navigation={navigation} route={route}/>}

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