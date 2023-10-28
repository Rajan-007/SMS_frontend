
import { View, Text,Image ,ScrollView} from 'react-native'
import React from 'react'
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

const onPress = ()=>{
  console.log('search')
}
export default function Home() {
  return (
    <View className='max-h-full min-h-full'>
      <View className=''>
        <Image className=' w-96 h-48 mx-1' source={require('../assets/bg-home.png')} />
        <Text className='absolute px-6 py-2  font-bold border border-slate-200 rounded-b-2xl ml-36 bg-white'>Home</Text>
        <View className="absolute z-10 ml-16 mt-28" >
        <View className="w-64 h-[70px]  bg-white px-2 py-[9px] absolute flex flex-row justify-center gap-1  rounded-3xl">
        <TextInput placeholder='Search...                    ' className="w-44 underline text-lg   "  />
        <TouchableOpacity className=' pl-1 pt-2' >
          <FontAwesome name='search' size={32} onPress={onPress} className=''></FontAwesome>
        </TouchableOpacity>
        </View>
        </View>
      </View>
      <View className='bg-[#f8f8f8] absolute w-full h-full mx-1 mt-36 rounded-3xl'>
        <ScrollView className='relative'>
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3  mt-20 mx-4 rounded-2xl'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2'>Computer Science Engineering</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3  mt-4 mx-4 rounded-2xl'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2'>Information Technology</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3  mt-4 mx-4 rounded-xl'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2'>Textile Technology</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3  mt-4 mx-4 rounded-2xl'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2'>Electical & Electronics Engineering</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3  mt-4 mx-4 rounded-2xl'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2'>ECE</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3  mt-4 mx-4 rounded-2xl'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2'>Civil Engineering</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3  mt-8 mx-4 rounded-lg'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2 '>Mechanical Engineering</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          
          <Link href='Dept'>
            <TouchableOpacity>
            <View  className='bg-slate-200 h-52 w-88 px-3 mb-52 mt-8 mx-4 rounded-lg'>
              <View className=' p-2'>
                <Text className='font-bold text-2xl w-80 pt-2'>Aeronautical Engineering</Text>
                <Image className='h-36 w-36 ml-44 mt-16 absolute pr-2' source={require('../assets/teacher.png')} />
              </View>
              <View className='bg-white absolute rounded-3xl mt-24 ml-2 pb-4'>
                <Text className='mx-8 py-2 '>No.of Students</Text>
                <Text className='font-bold mx-16 text-2xl '>35</Text>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          
        </ScrollView>
      </View>
    </View>
  )
} 