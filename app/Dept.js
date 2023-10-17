
import { View, Text,Image ,ScrollView, Button} from 'react-native'
import React, { useState } from 'react'
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';



export default function Dept() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => currentYear - index); // Last 50 years


  return (
    <View className='max-h-full min-h-full'>
      <View className=''>
        <Image className=' w-96 h-48 mx-1' source={require('../assets/bg-dept.png')} />
        <Text className='absolute px-12 py-1 text-lg  font-bold border border-slate-300 rounded-b-2xl ml-[128px] bg-transparent '>CSE</Text>
        <View className="" >
        </View>
        
        <View className="absolute flex flex-row justify-center  mt-16 z-10" >
        
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View className='flex mb-[-3px]'>
        <Text className='text-center text-lg font-semibold' >Select year</Text>
        <Picker className=' bg-slate-200'
          selectedValue={selectedYear}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setSelectedYear(itemValue)}
        >
          {years.map((year, index) => (
            <Picker.Item key={index} label={year.toString()} value={year} />
          ))}
        </Picker>
      </View>
      <Text className='font-semibold bg-slate-200 px-2 py-2 rounded'>Selected Year: {selectedYear}</Text>
    </View>

      </View>
      </View>
      <View>
   
      </View>
      <View className='bg-[#ffffff] absolute w-full h-full mx-1 mt-40 rounded-3xl'>
      
        <ScrollView className='relative'>
          
          <Link href='Students' className='mt-12'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-4 text-4xl w-80 pt-2 text-[#343434]'>2020-2024</Text>
                <Text className='font-semibold mt-1 text-4xl w-80 pt-2 text-[#939393] '>CSE</Text>
                <Image className='h-[150] w-[175] ml-40 mt-12 absolute ' source={require('../assets/notebook1.png')} />
              </View>
             
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Students' className='mt-8'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-4 text-4xl w-80 pt-2 text-[#343434]'>2020-2024</Text>
                <Text className='font-semibold mt-1 text-4xl w-80 pt-2 text-[#939393] '>CSE</Text>
                <Image className='h-[150] w-[175] ml-40 mt-12 absolute ' source={require('../assets/notebook2.png')} />
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Students' className='mt-8'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-4 text-4xl w-80 pt-2 text-[#343434]'>2020-2024</Text>
                <Text className='font-semibold mt-1 text-4xl w-80 pt-2 text-[#939393] '>CSE</Text>
                <Image className='h-[150] w-[175] ml-40 mt-12 absolute ' source={require('../assets/notebook1.png')} />
              </View>
            </View>
            </TouchableOpacity>
          </Link>
          <Link href='Students' className='mt-8 mb-52'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-4 text-4xl w-80 pt-2 text-[#343434]'>2020-2024</Text>
                <Text className='font-semibold mt-1 text-4xl w-80 pt-2 text-[#939393] '>CSE</Text>
                <Image className='h-[150] w-[175] ml-40 mt-12 absolute ' source={require('../assets/notebook2.png')} />
              </View>
            </View>
            </TouchableOpacity>
          </Link>
        </ScrollView>
       
      </View>
    </View>
  )
} 