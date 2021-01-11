import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Header } from './components/header';
import { Article } from './components/article';
import { LoadMoreButton } from './components/loadMoreButton';
import { StyleSheet, Text, View, Modal, ScrollView, Button, TextInput } from 'react-native';

export default function App() {

    let [isVisable, setIsVisable] = useState(false)
    let [userName, setUserName] = useState("")
    var text = ""

    const toggleModal = (isVisable) => {
        console.log("Show modal")
        setIsVisable(!isVisable)
    }

    const updateUserName = (text) => {
        console.log(text)
        setUserName(text)
        setIsVisable(false)
    }

  return (
    <View style={styles.container}>

            <Modal
                transparent
                visible={isVisable}
            >
                <View style={styles.modalWrapper}>
                    <View style={styles.modalView}>
                        <Text>Enter Name</Text>
                        <TextInput 
                            placeholder="Enter name here"
                            onChangeText={(value) => text = value}
                        />
                        <View style={{flexDirection: 'row'}}>
                            <Button 
                                title="Back"
                                onPress={() => toggleModal(isVisable)}
                            />
                            <Button
                                title="Submit"
                                onPress={() => updateUserName(text)} 
                            />
                        </View>
                    </View>
                </View>
           </Modal>


        <Header
            userName={userName}
            showNameModal={toggleModal}
        />
        <ScrollView style={{...styles.articlesScrollView, flexGrow: 1}}>
            <Text style={{ fontSize: 30, fontWeight: 'bold', margin: 20 }}>Today's Highlights</Text>
            <Article 
                title="First Article"
            />
            <Article 
                title="Another Article"
            />
            <Article 
                title="Another Article"
            />
           <LoadMoreButton />
        </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
    articlesScrollView: {
        height: '80%'
    },
    modalView: {
        height: 200,
        width: 200,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    modalWrapper: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(1, 1, 1, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
