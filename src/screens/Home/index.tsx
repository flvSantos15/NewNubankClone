import React from 'react';
import {SafeAreaView} from 'react-native';
import { Header } from '../../components/Header/index'
import Main from '../../components/Main';

export function Home(){
  return (
    <SafeAreaView>
      <Header />
      <Main />
    </SafeAreaView>
  );
}
