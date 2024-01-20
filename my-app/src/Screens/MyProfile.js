import { StyleSheet, View,Image } from 'react-native'
import AddButton from '../Components/AddButton'


const MyProfile = ({navigation}) => {
    // const localId = useSelector(state => state.auth.value.localId)
    // const {data} = useGetProfileImageQuery(localId)

  return (
    <View style={styles.container}>
        <Image
            source={require("../../assets/user.png")}
            style={styles.image}
            resizeMode='cover'
        />
        <AddButton title={"Add profile picture"} onPress={()=> navigation.navigate("ImageSelector")}/>
    </View>
  )
}


export default MyProfile


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        marginTop:20
    },
    image:{
        width:200,
        height:200
    }
})