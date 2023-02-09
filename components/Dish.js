import { Text, View, TouchableOpacity, Image} from 'react-native'
import React, { Component, useState } from 'react'
import { MinusCircleIcon, PlusIcon} from 'react-native-heroicons/solid';
import { addToBasket, calculateBasketTotalPrice, removeFromBasket, selectBasketItem, selectBasketItemByRestaurantIdAndDishId } from '../features/basketSlice';
import { useDispatch, useSelector } from 'react-redux';


export default Dish = (props)=>{
    const dispatch = useDispatch()
    const myItems = useSelector((state) => selectBasketItemByRestaurantIdAndDishId(state, props.restaurantId, props.id))
    const items = useSelector(selectBasketItem)
    const [isPressed, setIsPressed] = useState(myItems.length>0)
    const [numOrders, setNumOrders]  = useState(myItems.length)
    const total =  useSelector(calculateBasketTotalPrice)

    const addDish=()=>{
        if(isPressed == false){
            setIsPressed(true)
        }
        setNumOrders(numOrders+1)
        dispatch(addToBasket(props))
    }

  const removeDish=()=>{
    if(numOrders>0){
        setNumOrders(numOrders-1)
        if(numOrders-1 == 0){
            setIsPressed(false)
        }
    }
    dispatch(removeFromBasket(props))
  }

  const showAddRemoveButtons=()=>{
    if(isPressed){
        return (
            <View>
                <View className="flex-row space-x-3 border-gray-400 pb-3">
                    <TouchableOpacity onPress={() => {removeDish()}}>
                        <MinusCircleIcon color={numOrders<1? "gray": "green"} opacity={0.5} size={30}/>
                    </TouchableOpacity>
                    <Text className="mt-1.5 text-bold text-gray-400">{myItems.length}</Text>
                    <TouchableOpacity onPress={()=>{addDish()}}>
                        <PlusIcon color={numOrders<1? "gray": "green"} opacity={0.5} size={30}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    
  }

    return (
        <TouchableOpacity onPress={()=>{addDish()}}className="bg-white p-4 border border-gray-200">
            <View className="flex-row">
                <View className="flex-1 pr-2">
                        <Text className="text-lg mb-1">{props.title}</Text>
                        <Text className="text-gray-500">{props.description}</Text>
                        <Text className="text-gray-400 mt-2">{props.price}</Text>
                </View>
                <View>
                    <Image 
                        style={{borderwidth: 1, 
                                borderColor: "#F3F3F4"}}
                        source={{uri: props.image}} 
                        className="h-20 w-20 p-4 bg-gray-300"/>
                </View>
            </View>
            { showAddRemoveButtons()}
        </TouchableOpacity>
    )
}
