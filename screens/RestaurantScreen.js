import { Text, ScrollView, Image, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { ArrowLeftIcon, MapPinIcon, ChevronRightIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'
import Dish from '../components/Dish'
import Basket from '../components/Basket'


export default class RestaurantScreen extends Component {
  // componentDidMount(){
  //   console.log(this.props)
  // }

  render() {
    return (
      <>
      <Basket/>
      <ScrollView>
        <View>
          <Image source={{ uri: this.props.route.params.imageUrl}}
                className="w-full h-56 bg-gray-300 p-4"/>

          <TouchableOpacity className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full" onPress={()=>{this.props.navigation.goBack()}}>
          <ArrowLeftIcon color="green" size={20} opacity={0.5}/>
          </TouchableOpacity>
          </View>
            <View className="bg-white">
              <View className="px-4 pt-4">
                <Text className="text-3xl font-bold">{this.props.route.params.title}</Text>
                <Text className="mt-2 text-gray-500 text-xs ml-1">{this.props.route.params.shortDescription}</Text>
                <View className="flex-row space-x-3 my-1">
                  <View className="flex-row items-center space-x-3">
                    <StarIcon color="green" size={22} opacity={0.5}/>
                    <Text className="text-xs text-gray-500 pt-1">
                      <Text className="text-green-500">{this.props.route.params.rating}</Text> . {this.props.route.params.genre}
                    </Text>
                  </View>
                  <View className="flex-row space-x-1">
                    <MapPinIcon color="green" size={22} opacity={0.5}/>
                    <Text className="pt-1 text-xs text-gray-500">Nearby . {this.props.route.params.address}</Text>
                  </View>
                <View>
              </View>
            </View>
          </View>
          <TouchableOpacity className="flex-row space-x-2 p-3 border-y border-gray-300">
            <QuestionMarkCircleIcon color="green" size={15} opacity={0.6}/>
            <Text className="text-gray-500 text-xs flex-1">Have a food allergy?</Text>
            <ChevronRightIcon color="green" size={15} opacity={0.6}/>
          </TouchableOpacity>
        </View>

        <View className="pb-36">
          <Text className="font-bold text-xl pt-6 ml-2 pl-2 text-gray-600">
            Menu
          </Text>
          {this.props.route.params.dishes.map(dish =>{
            return <Dish 
                        restaurantId={this.props.route.params.id}
                        id={dish.id}
                        title={dish.title}
                        key={dish.id}
                        description={dish.description}
                        image={dish.image}
                        price={dish.price}
                        />
          })}
        </View>
      </ScrollView>
      </>
    )
  }
}