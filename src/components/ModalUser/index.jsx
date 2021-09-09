import { useState } from 'react';
import Modal from 'react-native-modal';
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const ModalUser = () => {
  const [ isModalUserVisible, setiSModalUserVisible ] = useState(false)

  const handleModalUserOpen = () => {
    setModalUserVisible(true)
    console.log('Abrir modal')
  }

  const handleModalUserClose = () => {
    setModalUserVisible(false)
    console.log('fechar modal')
  }
  
  return (
    <View>
      <Modal
        isVisible={modalUserVisible}
        onRequestClose={handleModalUserClose}
      >
        <View>
          <Text>Modal Opened</Text>
          <TouchableOpacity>
            <AntDesign name="close" size={24} color="black" onClick={handleModalUserClose}/>
          </TouchableOpacity>
                
        </View>
      </Modal>
    </View>
  );
}

export default ModalUser;
