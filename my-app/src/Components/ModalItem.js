import {Modal, View, Text, Button, StyleSheet} from "react-native"

const ModalItem = ({product,visible,onDelete,onCompleted, setModalVisible}) =>{

    return  <Modal
              visible={visible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>Tenes este objeto seleccionado</Text>
                        <Text style={styles.modalText}>{product.title}</Text>
                        <Button title='Borrar' onPress={onDelete}/>
                        <Button title='Volver al menu' onPress={()=>setModalVisible(false)} />
                        <Button title='Completado' onPress={onCompleted}/>
                    </View>
                </View>
            </Modal>
}

const styles  = StyleSheet.create({
    modalContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        
      },
      modalContent:{
        width:"80%",
        borderWidth:2,
        padding:5,
        gap:10,
      },
      modalText:{
        textAlign:"center",
        color:"black",
      },
})
export default ModalItem