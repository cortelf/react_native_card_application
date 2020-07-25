import React from 'react'
import {View, Text, Button} from 'react-native'

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <Button onPress={() => {
            navigation.navigate('ScrollList')
        }} title="Scroll List"/> 
        <View style={{height: 30}} />
        <Button onPress={() => {
            navigation.navigate('PostPage')
        }} title="Post Page"/> 
      </View>
    );
}

export default HomeScreen;