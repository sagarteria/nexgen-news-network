import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { WebView } from 'react-native-webview';
import { initializeApp } from 'firebase';
import { getDatabase, ref, onValue, set } from 'firebase';
//import * as firebase from 'firebase';
import firestore from 'firebase';
//import YouTube from 'react-native-youtube';
//import { YouTubeStandaloneAndroid } from 'react-native-youtube';
import { services } from '../services/services';
import moment from 'moment'
export default function Wion() {
    const [newsData, setNewsData] = useState([])
    let newsDummyData = [
      {"link": "https://www.youtube.com/watch?v=3MDPtlPnYOY"},
      {"link": "https://www.youtube.com/watch?v=ZEcN1orB3ps"},
      {"link": "https://www.youtube.com/watch?v=l90aaVdyLUU"},
      {"link": "https://www.youtube.com/watch?v=Hvy1t5Zocy8"},
      {"link": "https://www.youtube.com/watch?v=EdU7ZFGzoSs"},
      {"link": "https://www.youtube.com/watch?v=Bl7eR1v7kkI"},
    ]
    useEffect(() => {
        services('general')
            .then(data => {
                //alert('data')
                setNewsData(newsDummyData);
            })
            .catch(error => {
                //alert(error)
            })
    }, [])

    // Initialize Firebase
    const firebaseConfig = {
      apiKey: 'AIzaSyDDOObrWaBzfk54aUVCo5lo6npRpH5DiSk',
      authDomain: 'nex-gen-news-network.firebaseapp.com',
      databaseURL: 'https://nex-gen-news-network-default-rtdb.firebaseio.com',
      projectId: 'nex-gen-news-network',
      storageBucket: 'nex-gen-news-network.appspot.com',
      messagingSenderId: '8872340006',
      appId: '1:8872340006:web:a0370c95acf892acc594e7',
      measurementId: 'G-34P3F3ZM6L',
    };

    //initializeApp(firebaseConfig);
    // firebase.firestore();

    console.log("called...")
    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={styles.contentContainer} height={850}>
                {newsData.length > 1 ? (
                    <FlatList
                        data={newsData}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.newsContainer}>
                                    <WebView
                                      bounces={false}
                                      originWhitelist={['*']}
                                      //allowsInlineMediaPlayback
                                      style={styles.webViewContainer}
                                      // mediaPlaybackRequiresUserAction={true}
                                      // mediaPlaybackRequiresUserAction={false}
                                      mediaPlaybackRequiresUserAction={false}
                                      //onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
                                      allowsFullscreenVideo={true}
                                      source={{ uri: item.link }}
                                    />                                    
                                </View>
                                <Divider my={2} bg="#e0e0e0" />
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.spinner}>
                        <Spinner color="danger.400" />
                    </View>
                )}
            </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    newsContainer: {
        padding: 10,
        //backgroundColor: '#35858B',
        //borderRadius: 5,
        //borderWidth: 1,
        //borderColor: '#fff',
        //paddingBottom: 10
    },
    title: {
        fontSize: 16,
        marginTop: 10,
        fontWeight: "600"
    },
    newsDescription: {
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20
    },
    date: {
        fontSize: 14,
        marginTop: 5,
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400
    },
    contentContainer: {
      paddingVertical: 20,
     // backgroundColor: 'black',
      paddingBottom: 20,
      //backgroundColor: '#35858B',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#fff',
    },
    webViewContainer: {
      height: 300
    }
});