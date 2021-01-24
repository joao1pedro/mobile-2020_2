import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet, Text } from 'react-native'

export default class IMC extends Component {
    constructor(props) {
        super(props)
        this.state = { peso: null, altura: null }
    }

    render() {
        return (
            <View View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{fontSize: 20, padding: 10 , fontWeight: "bold"}}>
                    IMC
                </Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder='Digite o peso'
                    onChangeText={(peso) => this.setState({ peso })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder='Digite a altura'
                    onChangeText={(altura) => this.setState({ altura })}
                />
                <Button
                    title="Ok"
                    onPress={
                        () => this.props.navigation.navigate('Resultado', { peso: this.state.peso, altura: this.state.altura })
                    }
                />
            </View>
        )
    }
}