import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

class CardItem extends Component {
    render() {
        return (
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    }
});

export default CardItem;


