import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { getGroupedItems } from '../features/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/outline'
import * as Progress from 'react-native-progress'
import MapView, { Marker } from 'react-native-maps'


export default function Delivery() {
  const navigation = useNavigation()
  const groupedItems = useSelector(getGroupedItems)
  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={()=>{navigation.navigate("Home")}}>
                <XCircleIcon color="white" size={30}/>
            </TouchableOpacity>
            <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50">
            <View className="flex-row justify-between">
                <View>
                    <Text className="text-lg text-gray-500">
                        Estimated Arrival
                    </Text>
                    <Text className="text-4xl text-bold">
                        45 - 50 minutes
                    </Text>
                </View>
                <Image
                    source={{uri: "https://media1.giphy.com/media/gsr9MG7bDvSRWWSD1Y/giphy.gif?cid=6c09b952zuwueh0tm1zhmxcydegrybcvtevdijmoltgv0urk&rid=giphy.gif&ct=s"}}
                    className="h-26 w-26"
                />
            </View>
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
            <Text className="text-xs text-gray-400 mt-2">
                Your order is being prepard
            </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
            latitude: 55.67859,
            longitude : 74.34554,
            longitudeDelta: 0.005,
            latitudeDelta: 0.005,
        }}
        className="flex-1 mt-10 z-0"
        mapType='mutedStandard'
      >
        <Marker
            coordinate={{ latitude: 55.67859, longitude: 74.3455}}
            title = "Pickup Point"
            description = "Your pickup point" 
            identifier="origin"
            pinColor = "#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row h-28 items-center space-x-5">
        <Image
            source={{ uri: "https://links.papareact.com/wru"}}
            className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
            <Text className="text-lg">Sonny Sungha</Text>
            <Text className="text-gray-500">Your Rider</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  )
}