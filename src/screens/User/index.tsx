import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'

export function User(){
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity>
        <AntDesign name="close" size={24} color="black" onPress={() => navigation.goBack()}/>
      </TouchableOpacity>
      
      <Text>User</Text>
    </View>
  );
}

