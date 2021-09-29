import React from 'react';
import {SafeAreaView} from 'react-native';
import { Header } from '../../components/Header/index'
import Main from '../../components/Main';

interface HomeProps {}

export function Home({}: HomeProps){
  return (
    <SafeAreaView>
      <Header />
      <Main />
    </SafeAreaView>
  );
}
