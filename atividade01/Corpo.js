import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

import Pic from './myImage.jpg'

export default class Corpo extends Component {
    render() {
        return (
            <Image source={Pic} style={{width: 190, height: 200}}/>
        );
    }

}