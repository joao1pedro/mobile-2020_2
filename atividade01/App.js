import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Disciplina from './Disciplina';

export default class App extends Component {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Cabecalho
            aluno="João Pedro Oliveira Santiago"
            curso="Engenharia da Computação"
          />

          <Corpo
          />

          <Disciplina
            disciplina="Projeto de Interface e Desenvolvimento Mobile"
          />
          <Disciplina
            disciplina="Equações Diferenciais Ordinárias"
          />
          <Disciplina
            disciplina="Física I"
          />
          <Disciplina
            disciplina="Fundamentos de Banco de Dados"
          />
          <Disciplina
            disciplina="Inteligência Artificial"
          />
        </View>
      </>


    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

