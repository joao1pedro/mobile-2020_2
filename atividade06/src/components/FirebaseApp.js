import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import firestore from '@react-native-firebase/firestore';

export default class FirebaseApp extends Component {
  constructor(props){
    super(props)
    this.getUser()
    this.state = {name:'',curso:'', idade:null}
  }
  getUser = async () =>{
    const usersCollection = await firestore().collection('alunos')
    .doc('B4Phq5Xxj1gMysF1HtCq').get();
    
    this.setState({
        name:usersCollection._data.nome,
         curso:usersCollection._data.curso,
         idade:usersCollection._data.idade
    })
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
          Nome: {this.state.name}
          {"\n"}
          Curso: {this.state.curso}
          {"\n"}
          Idade: {this.state.idade}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});
