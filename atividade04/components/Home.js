import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>Atividade 04</Text>
                <Button
                    title="Cadastro"
                    onPress={() => this.props.navigation.navigate('Cadastro')}
                />
                <Button
                    title="IMC"
                    onPress={() => this.props.navigation.navigate('IMC')}
                />
                <Button
                    title="Sobre"
                    onPress={() => this.props.navigation.navigate('Sobre')}
                />
            </View>
        )
    }
}

