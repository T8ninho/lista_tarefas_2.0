import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Animated } from 'react-native';
import IconC from 'react-native-vector-icons/AntDesign'

export default class FabButton extends Component {

    animation = new Animated.Value(0);

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5,
            useNativeDriver: true,
        }).start();

        this.open = !this.open;
    }

    

 render(){
    const formStyle = {
        transform: [
            { scale: this.animation },
            {
                translateY: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -60]
                })
            }
        ]
    }
    const coracaoStyle = {
        transform: [
            { scale: this.animation },
            {
                translateY: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -120]
                })
            }
        ]
    }

    const temasStyle = {
        transform: [
            { scale: this.animation },
            {
                translateY: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -180]
                })
            }
        ]
    }
    
    const rotation = {
        transform: [
            {
                rotate: this.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "45deg"],
                })
            }
        ]
    }
    return (
        <View style={[styles.container, this.props.style]}>
            <TouchableWithoutFeedback onPress={this.props.Temas}>
                <Animated.View style={[styles.button, styles.submenu, temasStyle]}>
                    <IconC name="isv" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.props.Concluidas}>
                <Animated.View style={[styles.button, styles.submenu, coracaoStyle]}>
                    <IconC name="heart" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.props.NovoItem}>
                <Animated.View style={[styles.button, styles.submenu, formStyle]}>
                    <IconC name="form" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={this.toggleMenu}>
                <Animated.View style={[styles.button, styles.menu, rotation]}>
                    <IconC name="plus" size={24} color="#FFF" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
       );
 }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute'
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 10,
        shadowColor: '#00213B',
        shadowOffset: {
            height: 10,
        }
    },
    menu: {
        backgroundColor: '#00213B'
    },
    submenu: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#00213B'
    }
})