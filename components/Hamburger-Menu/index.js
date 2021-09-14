import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";



const HamburgerMenu = () => {
    return (
        <View style={hamburgerStlye.navigator}>
           
            <Text style={hamburgerStlye.line}>bg</Text>
            <Text style={hamburgerStlye.line}>vdfvdv</Text>
            <Text style={hamburgerStlye.line}>cdscc</Text>
            
        </View>
    )
};


const hamburgerStlye = StyleSheet.create({
    navigator: {
        backgroundColor: "lightblue",
        width: 450,
        height: 150,
        position: "absolute",
        top: 0,
    },
    line: {
        position:"absolute",
        bottom: 0,
        right: 40,
        color: "red"

    }

})

export default HamburgerMenu;