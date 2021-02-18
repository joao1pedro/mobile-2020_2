import React, { Component } from 'react';
import { Text, Image, View } from 'react-native'

import Card from './cards/Card'
import CardItem from './cards/CardItem'
import MyButton from './MyButton'

export default class AlbumDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Card>
                <CardItem>
                    <View style={{ marginLeft: 10, marginRight: 10 }}>
                        <Image style={{ width: 50, height: 50 }}
                            source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/images/ramones-ramones.jpg' }} />
                    </View>
                    <View style={{ justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{this.props.album.name}</Text>
                        <Text>{this.props.album.artist}</Text>
                    </View>
                </CardItem>
                <CardItem style={{ justifyContent: 'center' }}>
                    <Image style={{ width: 300, height: 300 }}
                        source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.album.image }} />
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={
                            () => {
                                this.props.navigation.navigate('MyModal')
                            }
                        }
                    >
                    Ver músicas
                    </MyButton>
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={() => alert(this.props.album.name)}
                    >
                    Me compre!
                    </MyButton>
                </CardItem>
            </Card>
        );
    }
}
