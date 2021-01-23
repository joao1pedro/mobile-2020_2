import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class Perfil extends Component {
    render() {
        const nome = this.props.route.params.nome
        const idade = this.props.route.params.idade
        const email = this.props.route.params.email
        const img = { uri: 'https://cdn.pixabay.com/photo/2013/07/13/11/43/tux-158547_960_720.png' }
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={img}
                    style={{ width: 80, height: 80 }}
                />
                <Text style={{ fontSize: 16 }}>
                    Nome: {nome}
                    {'\n'}
                    Idade: {idade}
                    {'\n'}
                    Email: {email}
                </Text>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}