import React from 'react';

import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';

import Routes from './src/routes';

import AppLoading from 'expo-app-loading';

export default function App() {
  const [fonstLoaded] = useFonts({
    Roboto_700Bold, Roboto_500Medium, Roboto_400Regular
  })

  if(!fonstLoaded){
    return <AppLoading/>
  }
  
  return (
    <Routes />
  );
}
