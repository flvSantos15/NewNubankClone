import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Main(){
  return(
    <View>
      <View>
        <View>
          <Text>Conta</Text>
          <AntDesign name="right" size={24} color="black" />
        </View>
        <View>
          <Text>R$ 2.587,00</Text>
        </View>

        <View>
          <Text>Icones</Text>
        </View>

        <View>
          <TouchableOpacity>
            <Text>Meus cartões</Text>
          </TouchableOpacity>
        </View>
      </View>

      
    </View>
  )
}