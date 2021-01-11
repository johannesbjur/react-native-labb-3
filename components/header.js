import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';


export const Header = ({userName, showNameModal}) => {

    let image = require('../assets/icon.png')

    if (userName) {
        image = require('../assets/user.png')
    }


    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hello {userName ? userName : 'Guest'}!</Text>

            <Pressable
                onPress={ () => showNameModal() } 
            >
               <Image
                    style={styles.profileImage}
                    source={image}
                />
            </Pressable>



       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        height: 100,
        backgroundColor: '#6d4493',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 20,

    },
    profileImage: {
        height: 80,
        width: 80,
        marginRight: 20,
        alignContent: 'center',
        borderRadius: 80
    },

});