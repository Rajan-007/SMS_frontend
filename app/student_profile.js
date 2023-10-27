
import { View, Text,Image ,ScrollView, Button} from 'react-native'
import React, { useState } from 'react'
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';



export default function Student_profile() {
 
  return (
    <View className='max-h-full min-h-full relative '>
      <View className=''>
        <Image className=' w-full h-64 ' source={require('../assets/profile_pg.png')} />        
      </View>
      <View className='absolute  h-32 w-72   mt-40 z-30 mx-12 flex flex-1 flex-row justify-center'>
      <View className='flex flex-1 flex-row justify-center rounded-2xl bg-[#f4f4f4cc] '>
        <Image className='h-20 w-20 rounded-full bottom-24 absolute ' source={require('../assets/rajan_sq.jpg')}></Image>
        <View className='flex flex-column justify-center mt-4'>
          <Text className='text-center text-xl font-bold'>R.Rajan</Text>
          <Text className='text-[#868686] text-lg font-semibold'>110820104037</Text>
        </View>
      </View>

      </View>
      <View className='bg-[#ffffff] absolute w-full h-full mt-48 rounded-3xl'>
      
        <View className=' mt-28 flex flex-row justify-around bg-[#f4f4f4] px-3 py-4 mx-2 rounded-2xl shadow-xl shadow-slate-800'>
          <View className='w-28 h-28 bg-white rounded-[40px] flex flex-col justify-center items-center shadow-xl shadow-slate-800/80 '>
            <Text className='font-bold'>76</Text>
            <Text className=''>joining</Text>
          </View>
          <TouchableOpacity className='w-28 h-28  bg-[#a6ff7d93] rounded-[40px]  border border-[#fff] '>
           <View className='flex flex-col justify-center items-center  shadow-xl shadow-slate-800/80'>
            <View className='h-5 w-5 mt-5 rounded-full bg-[#1ff71b]'></View>
            <Text className='mt-4 font-semibold'>Active</Text>  
           </View>
          </TouchableOpacity>
          <View className='w-28 h-28 bg-white rounded-[40px] flex flex-col justify-center items-center  '>
            <Text className='font-bold'>CSE</Text>
            <Text className=''> Branch</Text>
          </View>
        </View>
       <View className='mt-10 mb-4 flex flex-row justify-center shadow-xl'>
        <TouchableOpacity className='bg-[#ffffff] rounded-full h-16 w-16 flex flex-row justify-center items-center  shadow-2xl shadow-slate-800/80 '>
          <Text className=' text-4xl '>+</Text>
        </TouchableOpacity>
       </View>
       <View className=' flex flex-row justify-around mt-4 mx-4'>
          <TouchableOpacity className='shadow-2xl shadow-slate-800/80  rounded-full'>
            <Link href='https://github.com/Rajan-007' className='rounded-full  bg-white  font-semibold p-3'>
            <Text className='rounded-full'>Github</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity className='shadow-2xl shadow-slate-800/80  rounded-full'>
            <Link href='Semesters' className='rounded-full  bg-white  font-semibold p-3'>
            <Text className='rounded-full'>Semesters</Text>
            </Link>
          </TouchableOpacity>
          <TouchableOpacity className='shadow-2xl shadow-slate-800/80 rounded-full'>
            <Text className='rounded-full bg-white  font-semibold p-3'>Details</Text>
          </TouchableOpacity>
       </View>
       <View className='flex flex-row justify-around mt-10  '>
            <TouchableOpacity className=' border flex flex-row justify-around rounded-xl p-2 w-60 '>
              <Text className='font-semibold '>Extract PDF</Text>
              <Image className='flex flex-row items-center h-5 w-5 ' source={require('../assets/external-link.png')}></Image>
            </TouchableOpacity>
          </View>
      </View>
    </View>
  )
} 