import React from 'react';
import { View, Text, TextInput, Image ,TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";

export default function Results() {
  return (
    <View className=' bg-[#E4E4E4] h-full w-full ' >
      <Image source={require('../assets/classroom.png') } className='h-64 w-full' >

      </Image>
      
    </View>
  )
}