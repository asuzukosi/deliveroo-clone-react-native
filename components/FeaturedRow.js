import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { ArrowRightIcon } from "react-native-heroicons/outline"
import RestaurantCard from './RestaurantCard'
import axios from 'axios'

export default class extends Component {


  constructor(){
    super();
    this.state = {
      restaurants: []
    }
  }

  getRestaurantsFromAPI(){
    axios.get("http://127.0.0.1:3001/restaurants")
         .then(response=>{
          this.setState({restaurants : response.data})
         })
         .catch(error=>{
          console.log("could not fetch data due to => ", error)
         })
  }

  componentDidMount(){
    this.getRestaurantsFromAPI()

  }

  render() {
    return (
      <View >
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{this.props.title}</Text>
            <ArrowRightIcon className="pl-3" size={20} color="#00CCBB"/>
        </View>
        <Text className="text-xs text-gray-500 px-4">{this.props.description}</Text>
        <ScrollView horizontal 
                    contentContainerStyle={{paddingLeft:15}}
                    showsHorizontalScrollIndicator={false}
                    className="pt-4">
            {this.state.restaurants?.map(restaurant=>{
                return <RestaurantCard 
                navigation={this.props.navigation}
                key={restaurant.id}
                id={restaurant.id}
                imageUrl={restaurant.imageUrl} 
                title={restaurant.title}
                genre={restaurant.genre}
                address={restaurant.address}
                shortDescription={restaurant.shortDescription}
                dishes={restaurant.dishes}
                rating={restaurant.rating}
                long={restaurant.long}
                lat={restaurant.lat}
                />
            })}
        </ScrollView>
      </View>
    )
  }
}