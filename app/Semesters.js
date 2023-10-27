import React from 'react';
import { View, Text, TextInput, Image ,TouchableOpacity,ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from "expo-router";

export default function Semesters() {
  return (
    <ImageBackground source={require('../assets/newspaper.png')} resizeMode='cover' className='h-full w-full' >
        <View className='flex flex-1 flex-col items-center '>
            <Text className='text-[#fff] font-bold text-3xl mt-10 underline underline-offset-1 shadow-2xl shadow-slate-950/95 '>Semesters</Text>
            <View className='flex flex-1 flex-col justify-around items-center'>
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 mt-8'>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 1</Text>
                    </Link>
                </TouchableOpacity>               
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 '>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 2</Text>
                    </Link>
                </TouchableOpacity>               
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 '>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 3</Text>
                    </Link>
                </TouchableOpacity>               
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 '>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 4</Text>
                    </Link>
                </TouchableOpacity>               
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 '>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 5</Text>
                    </Link>
                </TouchableOpacity>               
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 '>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 6</Text>
                    </Link>
                </TouchableOpacity>               
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 '>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 7</Text>
                    </Link>
                </TouchableOpacity>               
                <TouchableOpacity className='bg-white  rounded-2xl p-4 px-12 mb-8'>
                    <Link href='Results' className=''>
                        <Text className=' text-black text-xl font-semibold '>Semester - 8</Text>
                    </Link>
                </TouchableOpacity>               
                
            </View>
        </View>
        <StatusBar style='auto' />
    </ImageBackground>
    ) 
}