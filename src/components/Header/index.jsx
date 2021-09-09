import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles'

const Header = () => {
  const [ isButtonEyeOpen, setIsButtonEyeOpen ] = useState(false)
  
  const [ modalUserVisible, setModalUserVisible ] = useState(false)

  const handleModalUserOpen = () => {
    setModalUserVisible(true)
    console.log('Abrir modal')
  }
  
  const handleButtonClickEyeOpen = () => {
    console.log('Botao clicado')
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>

        <TouchableOpacity style={styles.containerUser}>
          <AntDesign name="user" size={24} color="#fff" onClick={handleModalUserOpen}/>
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
      
    </View>
  );
}

export default Header;
