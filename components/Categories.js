import { Text, ScrollView } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'
import axios from 'axios'

export default class Categories extends Component {
  constructor(){
    super();
    this.state = {
      categories: []
    }
  }
  getCategoriesFromAPI(){
    axios.get("http://127.0.0.1:3001/categories")
         .then(response =>{
          this.setState({categories: response.data})
         })
         .catch(error =>{
          console.log("failed to get categories due to error ", error)
         })
  }

  componentDidMount(){
    this.getCategoriesFromAPI()
  }
  render() {
    return (
      <ScrollView contentContainerStyle={{paddingHorizontal:15, paddingTop:10}}
                  horizontal showsHorizontalScrollIndicator={false}>

        {this.state.categories?.map( category =>{
          return <CategoryCard key={category.id} id={category.id} imageUrl={category.imageUrl} title={category.title}/>
        })}
      </ScrollView>
    )
  }
}