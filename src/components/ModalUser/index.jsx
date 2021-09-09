import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const ModalUser = () => {
  const [ isModalUserVisible, setIsModalUserVisible ] = useState(false)

  const handleModalUserOpen = () => {
    setIsModalUserVisible(true)
    console.log('Abrir modal')
  }

  const handleModalUserClose = () => {
    setIsModalUserVisible(false)
    console.log('fechar modal')
  }
  
   return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isModalUserVisible}
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
  )
}

export default ModalUser;
