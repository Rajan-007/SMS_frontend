import React from 'react';
import { View, Text, TextInput, Image ,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons'
import { Link } from "expo-router";

export default function Login() {
  const handlePress = () => {
    console.log('Button Pressed');
  };

  return (
    <View className=" flex min-h-screen bg-[#ffffff]">
    <Image
          source={{
            uri:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4x4HNQCZuz5CzDnNj18egE_9HG7_36SKz4E3l42N-Yv32E0F4fjBOmCp5yX6O6u1TzdD6x-ahxXLnwUU3REh5oEE97ZSUmNrkfv6cxZN8dMgWRvO6x7Hr5XpQi3jl-IODwzWTIXeASunkjIEtrx7AoBfQ5UgzVUE2q2C4_w7CtUN87T43yKtR0nX4wR0/s262/Screenshot%202023-10-10%20205920.png"
          }}
          className='flex flex-row justify-end items-end ml-60 w-40 h-40' 
        />
        <View className='flex flex-1 flex-row absolute py-20 px-5 items-center h-32 w-32'>
      <Image
          source={{
            uri:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhQDjU2AmmTold6FwPX2r_AQdXctOYnn6HWfiXOCzsXliF-epqnn9lbnmajbFHbM2c1fABbNzMzD-8ZVnZYT0vgwo3IeXEcRvzA7qtY7Jhpt4TBgDRGBlBiBYH62Ir8dYZ5wQ05pqGZwPAwNNYtwLNhrCZfeBd1mQhJWFTlPPXw0S8GOBUAN5ulTFToZQ/s400/jec_logo.jpg"
          }}
          className='' style={styles.logo}
        />
    </View>
    <Text className='mt-10 px-8 text-5xl font-bold '>Login</Text>
    <Text className=' pl-8 text-lg '>Please sign in to continue </Text>
    <TextInput placeholder='Email id' className="w-80 border bg-slate-100 rounded-xl ml-10 mt-20 px-2 py-3 flex flex-row justify-center border-black" />
    <TextInput secureTextEntry placeholder='Password' className="w-80 bg-slate-100 border rounded-xl ml-10 mt-10 px-2 py-3 flex flex-row justify-center border-black" />
    <TouchableOpacity onPress={handlePress}>
      <View className=' pl-60 pt-6 '>
        <Link href='Home'>
            <Text className=' pl-60 pt-6 text-md font-bold  '>Forgot password ? </Text>
        </Link>
      </View>
    </TouchableOpacity>
    <TouchableOpacity className="ml-32 mt-10 " onPress={handlePress}>
    <View >
      <Link href="Home">
        <LinearGradient className="
        border-cyan-300 rounded-full border w-32"
          colors={['#44fdff', '#B2FFFA', '#f4f4f4']}
          style={styles.button}>
          <Text className='font-bold text-md text-[#07395c] '>Login</Text>
        </LinearGradient>
      </Link>
    </View>
    </TouchableOpacity>
    <View className='flex-1 flex-row justify-center items-end z-[1] mb-10'>
      <Text>Don't have an account ?</Text>
      
      <TouchableOpacity>
      <Link href='Signup'>
      <Text className='font-bold'>SignUp</Text>
      </Link>
      </TouchableOpacity>
    </View>
    <Image source={{
      uri:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9UBXJwZ9g5mM1BZOsm2s1fb48_PficJOVhpZAAUUTk_4wRdc1_9yFMGUmMEYNeqk_P8hScTuIY_DJbfL1TUdewEcm645fopvkjd34rQqcsMhTVLpnf_q3n_lB7khMdL0bEt42RarnAslfh-WMh0O4kyoGwyVuydgVZre_n-H5l6Z7WTKG_65gND3EdXo/s271/downside.png"
    }} className="w-56 h-44 p-0 bottom-[-40] absolute" style={styles.dec}
    />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  logo:{
    height:80,
    width:80,
    borderRadius:40
  },
  
};


