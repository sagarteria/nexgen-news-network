import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { NativeBaseProvider, FlatList, ScrollView, Divider, Image, Spinner } from 'native-base';
import { services } from '../services/services';
import moment from 'moment'
export default function All() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('general')
            .then(data => {
                //alert('data')
                setNewsData(data)
            })
            .catch(error => {
                //alert(error)
            })
    }, [])
    return (
        <NativeBaseProvider>
            <ScrollView contentContainerStyle={styles.contentContainer} height={850}>
                {newsData.length > 1 ? (
                    <FlatList
                        data={newsData}
                        renderItem={({ item }) => (
                            <View>
                                <View style={styles.newsContainer}>
                                    <Image
                                        width={550}
                                        height={250}
                                        resizeMode={"cover"}
                                        source={{
                                            uri: item.urlToImage,
                                        }}
                                        alt="Alternate Text"
                                    />
                                    <Text style={styles.title}>
                                        {item.title}
                                    </Text>
                                    <Text style={styles.date}>
                                        {moment(item.publishedAt).format('LLL')}
                                    </Text>
                                    <Text style={styles.newsDescription}>
                                        {item.description}
                                    </Text>
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
    }
});