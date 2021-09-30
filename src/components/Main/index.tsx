import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import styles from './styles'
import IconesArea from '../iconesArea';

export default function Main(){
  return(
    <View style={styles.container}>
      <View>
        <View style={styles.containerAmount}>
          <Text style={styles.containerAmountText}>Conta</Text>
          <AntDesign name="right" size={20} color="black" />
        </View>

        <View>
          <Text style={styles.AmountText}>R$ 2.587,00</Text>
        </View>

        <View>
          {/*Aqui sera um componente*/}
          <IconesArea />
        </View>

        <View>
          <TouchableOpacity style={styles.btnCard}>
            <AntDesign 
              name="creditcard" 
              size={24} 
              color="black"
              style={styles.btnCardCredit}
            />
            <Text style={styles.btnCardText}>Meus cartões</Text>
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  )
}