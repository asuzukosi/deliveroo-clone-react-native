import { Text, TouchableOpacity, Image, View } from 'react-native'
import React, { Component } from 'react'
import { MapPinIcon } from "react-native-heroicons/outline"
import { StarIcon } from "react-native-heroicons/solid"
import { useNavigation } from '@react-navigation/native'


export default class RestaurantCard extends Component {

  // constructor(props){
  //   super(props);
  //   this.state = {

  //   }
  // }

  render() {
    return (
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate("RestaurantScreen", {title: this.props.title, 
                                                                                    id: this.props.id, 
                                                                                    imageUrl: this.props.imageUrl,
                                                                                    genre: this.props.genre,
                                                                                    address: this.props.address,
                                                                                    shortDescription: this.props.shortDescription,
                                                                                    dishes: this.props.dishes,
                                                                                    rating: this.props.rating,
                                                                                    long: this.props.long,
                                                                                    lat: this.props.lat
                                                                                    })}} 
                        className="bg-white mr-4 shadow">
        <Image source={{uri: this.props.imageUrl}} className="h-36 w-64 rounded-sm"/>
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{this.props.title}</Text>
            <View className="flex-row itmes-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22}/>
                <Text className="p-1 text-gray-500 text-xs">
                    <Text className="text-green-500">{this.props.rating}</Text> . {this.props.genre}
                </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <MapPinIcon size={22} color="green" opacity={0.5}/>
                <Text className="text-xs p-1 text-gray-500">Nearby . {this.props.address} </Text>
            </View>
        </View>
      </TouchableOpacity >
    )
  }
}