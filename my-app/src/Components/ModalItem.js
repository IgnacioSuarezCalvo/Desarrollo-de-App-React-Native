import {Modal, View, Text, Button, StyleSheet} from "react-native"

const ModalItem = ({product,visible,onModal,onDelete}) =>{

    return  <Modal
              visible={visible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿Queres borrar este objeto?</Text>
                        <Text style={styles.modalText}>{product.title}</Text>
                        <Button title='Confirmar' onPress={onDelete}/>
                        <Button title='Cerrar' onPress={()=>onModal(false)}/>
                    </View>
                </View>
            </Modal>
}

const styles  = StyleSheet.create({
    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
      },
      modalContent:{
        width:"80%",
        borderWidth:2,
        padding:5,
        gap:10
      },
      modalText:{
        textAlign:"center"
      }

})
export default ModalItem