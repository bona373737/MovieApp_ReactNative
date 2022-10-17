import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';


import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = ()=>setReady(true);

  if(!ready){
    return <AppLoading onFinish={onFinish}/>
  }
  return (
    null
  );
}

const styles = StyleSheet.create({

});
