import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Sobre extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Sobre</Text>
                <Text style={{ fontWeight: "bold", fontSize: 14 }}> Oi, meu nome é João Pedro, 
                    curso Engenharia da Computação na Universidade Federal do Ceará - Campus Quixadá.
                </Text>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

