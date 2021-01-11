import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal, Alert, ActivityIndicator } from 'react-native';


export const LoadMoreButton = () => {

    let [btnText, setBtnText] = useState('Load More')
    let [isLoading, setIsLoadign] = useState(false)

    const createAlert = () => {
        setIsLoadign(true)
        setBtnText('Loading')
        Alert.alert('Loading', '' , [
            {
                text: 'OK',
                onPress: () => {
                    setIsLoadign(false)
                    setBtnText('Load More')
                } 
            },
        ]);
    }

    return(
        <View style={styles.container}>
            <Pressable
                onPress={createAlert}
            >
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.btnText}>{btnText}</Text>
                    <ActivityIndicator 
                        animating={isLoading}
                        size="large"
                        color="#0000ff"
                    />
                </View>
            </Pressable>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    btnText: {
        color: 'blue'
    }
});