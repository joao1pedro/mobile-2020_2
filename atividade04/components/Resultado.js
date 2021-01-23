import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import IMCMsg from './IMCMsg'

export default class Perfil extends Component {
    render() {
        const peso = this.props.route.params.peso
        const altura = this.props.route.params.altura
        const imc = peso / (altura ** 2)

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{ fontSize: 16 }}>
                    IMC: {imc}
                    {'\n'}
                    <IMCMsg
                        value={imc}
                    />
                </Text>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}