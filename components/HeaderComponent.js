import { Component } from 'react';
import {View, Image, Text, TextInput } from 'react-native'
import { UserIcon, ChevronDownIcon, MagnifyingGlassIcon, AdjustmentsVerticalIcon} from "react-native-heroicons/outline";


class Sample extends Component {
    render(){
        return (
            <View className="bg-white pt-5">
                <View className="flex-row pb-3 items-center mx-4 flexspace-x-2">
                    <Image
                    source={{uri: "https://links.papareact.com/wru"}}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
                    <View className="flex-1 pl-2">
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                        <Text className="font-bold text-xl space-x-2">
                            Current Location 
                            <ChevronDownIcon className="pl-3" size={20} color="#00CCBB"/>
                        </Text>
                    </View>
                    <UserIcon size={35} color="#00CCBB"/>
                </View>
                <View className="flex-row items-center space-x-3 pb-3 mx-4">
                    <View className="flex-row space-x-3 flex-1 bg-gray-300 p-3">
                        <MagnifyingGlassIcon size={20} color="gray"/>
                        <TextInput
                            placeholder="Restaurants and cuisines"
                            keyboardType="default"/>
                    </View>
                    <AdjustmentsVerticalIcon size={20} color="#00CCBB"/>
                </View>
            </View>
        )
    }
}

export default Sample