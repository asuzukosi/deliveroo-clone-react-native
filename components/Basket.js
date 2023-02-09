import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { calculateBasketTotalPrice, selectBasketItem } from '../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

export default function Basket(props) {
  const totalBasketPrice = useSelector(calculateBasketTotalPrice)
  const items = useSelector(selectBasketItem)
  const navigation = useNavigation()

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={()=>{navigation.navigate("BasketScreen", props)}}className="mx-5 p-4 flex-row rounded-lg space-x-1 items-center bg-green-200">
        <Text className="font-extrabold text-white text-lg bg-green-300 py-1 px-2">
            {items.length}
        </Text>
        <Text>View Basket</Text>
        <Text className="text-lg text-white font-extrabold">${totalBasketPrice}</Text>
      </TouchableOpacity>
    </View>
  )
}