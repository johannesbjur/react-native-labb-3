import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native';


export const Article = ({title}) => {

    let textBody = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec blandit metus id tellus pulvinar, ut hendrerit mauris sollicitudin. Donec sapien erat, vehicula vitae congue vestibulum, lobortis sodales ante. Vestibulum id nisl nec tellus euismod malesuada non ac sem. Nunc mauris sapien, egestas quis volutpat non, vestibulum a diam. Proin dignissim commodo tortor, non aliquet orci fringilla vitae. Sed fermentum imperdiet ligula, sit amet auctor mauris condimentum nec. Duis non nunc gravida, dignissim augue nec, pellentesque arcu. Maecenas sed iaculis urna."

    return(
        <View style={styles.article}>
            <Text style={styles.title}>{title}</Text> 
            <Text style={styles.textBody}>{textBody}</Text>
        </View>
   ); 
}

const styles = StyleSheet.create({
    article: {
        backgroundColor: '#f4e9d3',
        padding: 20,
        margin: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    textBody: {
        fontSize: 15 
    }
});