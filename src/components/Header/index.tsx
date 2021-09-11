import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';

export function Header() {
  return (
    <View style= {styles.container} >

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
  )
}