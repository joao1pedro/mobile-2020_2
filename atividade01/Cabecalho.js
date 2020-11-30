import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Cabecalho extends Component {
    render() {
        return (
            <View>
              <Text>
                Aluno: {this.props.aluno}
              </Text>
              <Text>
                Curso: {this.props.curso}
              </Text>
            </View>
          );
    }
}