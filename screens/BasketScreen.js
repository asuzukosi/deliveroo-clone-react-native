import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasketTotalPrice, removeFromBasket, selectBasketItem } from '../features/basketSlice'
import { getGroupedItems } from '../features/basketSlice'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { XCircleIcon } from 'react-native-heroicons/outline'
import axios from 'axios'

export default function BasketScreen() {
  const [restaurants, setRestaurants] = useState([])
  const groupedItems = useSelector(getGroupedItems)
  const dispatch  = useDispatch()
  const navigation = useNavigation()
  const basketTotalPrice = useSelector(calculateBasketTotalPrice)

  const getRestaurants = () =>{
    axios.get("http://127.0.0.1:3001/restaurants")
         .then(response=>{
          setRestaurants(response.data)
         })
         .catch(error=>{
          console.log("could not fetch data due to => ", error)
         })
  }

  useEffect(getRestaurants)

  const getBasketItems = () =>{
    groupedItems.map(itemObject => {
      console.log("item onew bjects are : ", itemObject)
      return <View className="flex-row item-center space-x-3 bg-white py-2 px-5" key={itemObject.item.id + "" + itemObject.item.restaurantId}>
          <Image source={{uri: itemObject.item.image}} className="h-12 w-12 rounded-full"/>
          <Text className="flex-1">{itemObject.item.title}</Text>
          <Text className="text-gray-500"> $ {itemObject.item.price}</Text>
          <TouchableOpacity className="text-green-300 text-xs" onPress={()=>{dispatch(removeFromBasket(itemObject.item))}}>
            <Text>Remove</Text>
          </TouchableOpacity>
      </View>
    })}
  
  const getRestaurantName = (restaurantId) => {
    for (let index = 0; index < restaurants.length; index++) {
        if(restaurants[index].id === restaurantId){
          return restaurants[index].title
        }
      
    }

    return "not found"
  }
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mb-3 bg-gray-100">
        <View className="p-5 border-b border-green-300 bg-white shadow-xs" >
          <Text className="text-lg font-bold text-center text-gray-600">Basket</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.goBack()}} className="rounded-full bg-gray-100 absolute top-1 right-5">
            <XCircleIcon color="green" size={50} opacity={0.5}/>
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center space-x-4 px-4 py-3 bg-whiter">
        <Image source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVtGeqGtYScSfvcGpj8SJlTWDuzyVl3k6HQ&usqp=CAU"
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"/>
        <Text className="flex-1">Deliver in 50 - 75 minutes</Text>
        <TouchableOpacity>
            <Text className="text-green-300">Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView className="divide-y divide-gray-200">
        {groupedItems.map(itemObject => {
          return <View className="flex-row item-center space-x-1 bg-white py-2 px-5" key={itemObject.item.id + "" + itemObject.item.restaurantId}>
                    <Text className="mt-4 text-sm text-gray-400">{itemObject.count} X </Text>
                    <Image source={{uri: itemObject.item.image}} className="h-12 w-12 rounded-full"/>
                    <View className="flex-row item-center space-x-3 bg-white py-2 px-5 mt-2 flex-1" >
                    <View className="flex-1">
                      <Text className="text-bold">{itemObject.item.title}</Text>
                        <Text className="text-gray-500 text-xs">{getRestaurantName(itemObject.item.restaurantId)}</Text>
                      </View>
                    <Text className="text-gray-500">{itemObject.item.price}</Text>
                    <TouchableOpacity onPress={()=>{dispatch(removeFromBasket(itemObject.item))}}>
                      <Text className="text-green-300 text-xs"> Remove</Text>
                    </TouchableOpacity>
                    </View>
                    
                  </View>
        })}
      </ScrollView>
      <View className="p-5 bg-white mt-5 space-y-4">
        <View className="flex-row justify-between">
          <Text className="text-gray-400">
            Subtotal
          </Text>
          <Text className="text-gray-400">
            $ {basketTotalPrice}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-400">
            Delivery Fee
          </Text>
          <Text className="text-gray-400">
            $ 5.00
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text >
            Order Total 
          </Text>
          <Text className="font-extrabold">
            $ {basketTotalPrice + 5}
          </Text>
        </View>
        
        <TouchableOpacity onPress={()=> navigation.navigate("PreparingOrderScreen")} className="rounded-lg p-4 bg-green-300" disabled={groupedItems.length < 1}>
          <Text className="text-center font-bold text-lg text-white"> Place Order </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    
  )
}