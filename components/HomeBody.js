import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Categories from './Categories'
import Features from './Features'

export default class HomeBody extends Component {
  render() {
    return (
      <ScrollView className="bg-gray-100 mb-40">
        <Categories navigation={this.props.navigation} />
        <Features navigation={this.props.navigation}/>
      </ScrollView>
    )
  }
}