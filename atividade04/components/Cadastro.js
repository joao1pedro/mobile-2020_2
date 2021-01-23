import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
import Perfil from './Perfil'

export default class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = { nome: null, idade: null, email: null }
    }

    render() {
        return (
            <View >
                <TextInput
                    style={{ height: 40 }}
                    placeholder='Digite o nome'
                    onChangeText={(nome) => this.setState({ nome })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder='Digite a idade'
                    onChangeText={(idade) => this.setState({ idade })}
                />
                <TextInput
                    style={{ height: 40 }}
                    placeholder='Digite o email'
                    onChangeText={(email) => this.setState({ email })}
                />

                <Button
                    title="Ok"
                    onPress={
                        () => this.props.navigation.navigate('MeuPerfil', { nome: this.state.nome, idade: this.state.idade, email: this.state.email })
                    }
                />
            </View>
        )
    }
}