import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../Global/colors'

const TabIcon = ({icon,label,focused}) => {
  return (
    <View style={styles.container}>
        <Entypo name={icon} size={40} color={focused ? "white" : "grey"} />
        <Text style={{...styles.text,...{color:focused ? "white" : "grey"}}}>{label}</Text>
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({
    container:{
        alignItems:"center"

    },
    text:{
        color:colors.white1,
    }
})