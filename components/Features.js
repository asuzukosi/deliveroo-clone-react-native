import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import FeaturedRow from './FeaturedRow'

export default class Features extends Component {
  render() {
    return (
      <ScrollView showsHorizontalScrollIndicator={false} className="mb-10">
        <FeaturedRow 
                navigation={this.props.navigation}
                title="Offers near you!" 
                description="this is a sample description"/>
        <FeaturedRow 
                navigation={this.props.navigation}
                title="Featured" 
                description="this is a sample description"/>
      </ScrollView>
    )
  }
}