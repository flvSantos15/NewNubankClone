import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ModalUser from '../ModalUser/index'
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles'
import Modal from 'react-native-modal';

const Header = () => {
  const [ isButtonEyeOpen, setIsButtonEyeOpen ] = useState(false)
  
  const [ isModalUserVisible, setIsModalUserVisible ] = useState(false)

  const handleModalUserOpen = () => {
    setIsModalUserVisible(true)
    console.log('Abrir modal')
  }

  const handleModalUserClose = () => {
    setIsModalUserVisible(!isModalUserVisible)
    alert('fechar modal')
  }
  
  const handleButtonClickEyeOpen = () => {
    console.log('Botao clicado')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>

        <TouchableOpacity style={styles.containerUser}>
          <AntDesign name="user" size={24} color="#fff" onClick={handleModalUserClose}/>
        </TouchableOpacity>

        <View style={styles.containerPlus}>

          <TouchableOpacity onPress={handleButtonClickEyeOpen}>
            <Ionicons name="eye" size={24} color="#fff" />
            {/* <Ionicons name="eye-off" size={24} color="black" /> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="help-circle" size={24} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity>
            <MaterialCommunityIcons name="email-plus-outline" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.containerText}>Olá, Flávio Santos</Text>

      <View>
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
      
    </View>
  );
}

export default Header;
