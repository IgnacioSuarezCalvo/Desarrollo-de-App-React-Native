import {useState } from 'react'
import { StyleSheet, Image, View} from 'react-native'
import AddButton from '../Components/AddButton'


const ImageSelector = ({navigation}) => {

    const [image,setImage] = useState("")
    const pickImage = () => {}
    const confirmImage = () => {}


  return (
    <View style={styles.container}>
       <Image
            source={image ? { uri: image } : require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'

        />
        <AddButton title="Tomar foto" onPress={pickImage} />
        <AddButton title="Confirm photo" onPress={confirmImage} />
    </View>
  )
}


export default ImageSelector


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    },
    text:{


    }
})