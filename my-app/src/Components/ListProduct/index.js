import {View, Text, FlatList, Button, StyleSheet} from 'react-native'
import CardProduct from './CartProduct'

const ListProduct = ({products,onModal}) =>{

    return       <View style={styles.listContainer}>
                    <FlatList
                        data={products}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <CardProduct item = {item} onModal  = {onModal} />}
                    />
                </View>
}

const styles = Stylesheet.create({
    listContainer:{
        width:"100%",
        marginTop:20,
      },
})
export default ListProduct