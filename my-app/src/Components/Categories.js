import { FlatList, StyleSheet, Text, View } from 'react-native'
import categories from '../Data/categories.json'

const Categories = ({}) => {
  return (
    <View>
        <FlatList
            data={categories}
            keyExtractor={item => item}
            renderItem={({item})=> <View><Text>{item}</Text></View>}
    
        />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})