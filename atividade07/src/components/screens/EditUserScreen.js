import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';

import MyButton from '../cards/MyButton'
import Card from '../cards/Card'
import CardItem from '../cards/CardItem'


export default class EditUserScreen extends Component {
    
    constructor(props){
        super(props)
        this.state = {name:this.props.route.params.name}
    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Text>Edit User</Text>
                </CardItem>
                <CardItem>
                <TextInput
                    onChangeText={(name) => this.setState({ name })}
                    value={this.state.name}
                />
                </CardItem>
                <CardItem>
                    <MyButton 
                        title='Update'
                        onPress={()=>alert(this.state.name)}
                        />
                    <MyButton 
                        title='Back' 
                        onPress={() => this.props.navigation.goBack()}/>
                </CardItem>

            </Card>

             
        )
    }
}