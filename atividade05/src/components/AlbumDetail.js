import React, { Component } from 'react';
import { Text, Button } from 'react-native'

import Card from './cards/Card'
import CardItem from './cards/CardItem'

class AlbumDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Card>
                <CardItem>
                    <Text> FOTO </Text>
                    <Text> {this.props.album.name} </Text>
                    <Text>  {this.props.album.artist} </Text>
                </CardItem>    
                <CardItem>
                    <Text> FOTO </Text>
                </CardItem> 
                <CardItem>
                    <Button title='Teste'/>
                </CardItem> 
            </Card>
        );
    }
}
export default AlbumDetail;
