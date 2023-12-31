import {View, Text, Button, StyleSheet} from 'react-native'

const CardProduct = ({item,onModal}) =>{

    return  <View style={styles.cardProduct}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text>{item.price} $</Text>
                <Text>{item.completed} </Text>
                <Button title='...' onPress={()=> onModal(item)}/>
            </View>
}

const styles = StyleSheet.create({
    cardProduct:{
        flexDirection:"row",
        padding:10,
        margin:10,
        justifyContent:"space-evenly",
        alignItems:"center",
        borderWidth:2,
        backgroundColor:"orange",
        borderColor:"blue",
        
      },

})

export default CardProduct