import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import firestore from '@react-native-firebase/firestore'

import MyButton from '../cards/MyButton'
import Card from '../cards/Card'
import CardItem from '../cards/CardItem'


export default class AddUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {name:''}
    }

    addUser = () => {
        firestore()
          .collection('users')
          .add({
            name: this.state.name
          })
          .then(() => {
            console.log('User added!');
          });
        this.props.navigation.navigate('ListUserScreen')
      }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>Add User</Text>
                </CardItem>
                <CardItem>
                <TextInput
                    onChangeText={(name) => this.setState({ name })}
                    placeholder='Enter name'
                />
                </CardItem>
                <CardItem>
                    <MyButton title='Add User' onPress={this.addUser}/>
                    <MyButton title='Back' onPress={() => this.props.navigation.goBack()}/>
                </CardItem>

            </Card>

             
        )
    }
}