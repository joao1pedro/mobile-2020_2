import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import Card from './cards/Card';
import CardItem from './cards/CardItem';
import MyButton from './MyButton';

export default class ModalScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { tracks: [] };
    }
    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/' + this.props.route.params.tracks)
            .then(response => response.json())
            .then(responseJson => this.setState({ tracks: responseJson.tracks }))
    }
    renderList() {
        return (
            <FlatList
                data={this.state.tracks}
                renderItem={
                    ({ item }) => {
                        return (
                            <View>
                                <Text>
                                    ({item.duration}) - {item.title}
                                </Text>
                            </View>
                        );
                    }
                }
                keyExtractor={(index, item) => index + item}
            />
        );
    }
    render() {
        return (
            <Card>
                <CardItem>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>
                        .:: {this.props.route.params.name} ::.
                    </Text>
                </CardItem>
                <CardItem>
                    {this.renderList()}
                </CardItem>
                <CardItem>
                    <MyButton
                        onPress={
                            () => { this.props.navigation.goBack() }
                        }
                    >
                        Voltar
                    </MyButton>
                </CardItem>
            </Card>
        );
    }
}
