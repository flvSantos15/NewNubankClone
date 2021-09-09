import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import Home from './src/screen/Home/index'

export default function App() {
  const [ isModalUserVisible, setIsModalUserVisible] = useState(false)
  function handleModalUserOpen(){
    setIsModalUserVisible(true)
  }
  function handleModalUserClose(){
    setIsModalUserVisible(false)
  }
  return (
    <>
      <Home/>
      
      <StatusBar style="auto" />
    </>
  );
}
