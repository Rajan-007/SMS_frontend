
import { View, Text,Image ,ScrollView} from 'react-native'
import React from 'react'
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


  const onPress = text => {
//     if(text){
//     const newData = masterDataSource.filter(
//      function (item) {
//         const itemData = item.title 
//           ? item.title.toUpperCase()  
//           : ''.toUpperCase();   
    
//        const textData = text.toUpperCase(); 
//        return itemData.indexOf(textData) > -1;
//       }
//      );
//     setFilteredDataSource(newData);
//      setSearch(text);
//   } else { 
//      setFilteredDataSource(masterDataSource); 
//      setSearch(text);   
// }
};

export default function Students() {
  return (
    <View className='max-h-full min-h-full'>
      <View className=''>
        <Image className=' w-96 h-48 mx-1' source={require('../assets/bg-home.png')} />
        <Text className='absolute px-6 py-2  font-bold border border-slate-200 rounded-b-2xl ml-36 bg-white'>Students</Text>
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
        <Link href='Student_profile' className='mt-12'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-2xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-8 text-2xl w-80 pt-2'>Rajan R</Text>
                <Text className='font-semibold text-xl w-80  text-[#939393] '>110820104037</Text>
                <Image className='h-[150] w-[155] ml-44 mt-6 absolute  rounded-l-[9999px] rounded-br-[8899px] object-cover' source={require('../assets/rajan_sq.jpg')} />
                <View className='mt-8 ml-2 flex flex-row h-screen space-x-2'>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-2 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome  name='facebook' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='linkedin' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='twitter' size={20}></FontAwesome>
                  </Link>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
        <Link href='Student_profile' className='mt-6'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-2xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-8 text-2xl w-80 pt-2'>Rajan R</Text>
                <Text className='font-semibold text-xl w-80  text-[#939393] '>110820104037</Text>
                <Image className='h-[150] w-[155] ml-44 mt-6 absolute  rounded-tl-full rounded-bl-[7999px] rounded-br-[7999px] object-cover' source={require('../assets/rajan_sq.jpg')} />
                <View className='mt-8 ml-2 flex flex-row h-screen space-x-2'>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-sky-500 flex flex-row justify-center w-[30px] h-[30px] pl-2 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome  name='facebook' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='linkedin' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='twitter' size={20}></FontAwesome>
                  </Link>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
        <Link href='Student_profile' className='mt-6'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-2xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-8 text-2xl w-80 pt-2'>Rajan R</Text>
                <Text className='font-semibold text-xl w-80  text-[#939393] '>110820104037</Text>
                <Image className='h-[150] w-[155] ml-44 mt-6 absolute  rounded-l-[9999px] rounded-br-[8899px] object-cover' source={require('../assets/rajan_sq.jpg')} />
                <View className='mt-8 ml-2 flex flex-row h-screen space-x-2'>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-2 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome  name='facebook' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='linkedin' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='twitter' size={20}></FontAwesome>
                  </Link>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
        <Link href='Student_profile' className='mt-6'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-2xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-8 text-2xl w-80 pt-2'>Rajan R</Text>
                <Text className='font-semibold text-xl w-80  text-[#939393] '>110820104037</Text>
                <Image className='h-[150] w-[155] ml-44 mt-6 absolute  rounded-l-[9999px] rounded-br-[8899px] object-cover' source={require('../assets/rajan_sq.jpg')} />
                <View className='mt-8 ml-2 flex flex-row h-screen space-x-2'>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-2 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome  name='facebook' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='linkedin' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='twitter' size={20}></FontAwesome>
                  </Link>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          </Link>
        <Link href='Student_profile' className='mt-6 mb-44'>
            <TouchableOpacity>
            <View  className='bg-[#EFEFEF] h-56 w-84 px-3  mx-3 rounded-2xl'>
              <View className='px-2 '>
                <Text className=' font-semibold mt-8 text-2xl w-80 pt-2'>Rajan R</Text>
                <Text className='font-semibold text-xl w-80  text-[#939393] '>110820104037</Text>
                <Image className='h-[150] w-[155] ml-44 mt-6 absolute  rounded-l-[9999px] rounded-br-[8899px] object-cover' source={require('../assets/rajan_sq.jpg')} />
                <View className='mt-8 ml-2 flex flex-row h-screen space-x-2'>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-2 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome  name='facebook' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='linkedin' size={20}></FontAwesome>
                  </Link>
                  <Link href='https://twitter.com/Aravinth_Rajan_?t=xYjUzvz7LHy-w5IhzQC_Tg&s=09' className='bg-black text-[#00A7E2] flex flex-row justify-center w-[30px] h-[30px] pl-1 py-1 mr-1 rounded-[20px]'>
                    <FontAwesome name='twitter' size={20}></FontAwesome>
                  </Link>
                </View>
              </View>
            </View>
            </TouchableOpacity>
          </Link>

        </ScrollView>
      </View>
    </View>
  )
} 