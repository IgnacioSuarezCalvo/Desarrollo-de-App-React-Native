import { FlatList, StyleSheet, View } from 'react-native'
import CategoriesItem from './CategoriesItem'
import {useSelector, useDispatch} from 'react-redux'

const Categories = ({navigation,route}) => {
  const categories = useSelector((state) => state.shop.value.categories)
  const dispatch = useDispatch()
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