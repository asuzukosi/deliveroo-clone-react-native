import {Text, View, Image, SafeAreaView, TextInput, ScrollView} from "react-native"
import { Component } from "react"
import Header from "../components/HeaderComponent";
import HomeBody from "../components/HomeBody";

export default class HomeScreen extends Component {
    render(){
        return (
            <SafeAreaView className="bg-white pt-5">
                <Header navigation={this.props.navigation} />
                <HomeBody navigation={this.props.navigation} />
            </SafeAreaView>
            
        )
    }
}

