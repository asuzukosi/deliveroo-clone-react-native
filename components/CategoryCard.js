import { Text, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'

export default class CategoryCard extends Component {
  
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <TouchableOpacity className="relative mr-2">
        <Image source={{uri: this.props.imageUrl }} className="h-20 w-30 rounded"/>
        <Text className=" buttom-1 left-1 font-bold">{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}