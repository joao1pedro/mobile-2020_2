import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native'

class AlbumDetail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <Text>{this.props.album.title}</Text>
            </View>
        );
    }
}
export default AlbumDetail;
