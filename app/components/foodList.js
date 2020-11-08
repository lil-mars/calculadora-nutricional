import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Image, Text, TouchableOpacity} from "react-native";

import {LinearGradient} from 'expo-linear-gradient';
import {foods} from "../src/data/food";


const Item = ({name, image, onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.item} on>
        <View>
            <Text style={styles.itemName}>{name[0].toUpperCase() + name.slice(1)}</Text>
        </View>
        <Image style={{width: 30, height: 30}} source={{uri: image}}/>
    </TouchableOpacity>
);

export default function FoodList(props) {
    const { setSelectedFood } = props;
    const changeFood = (food) => {
        setSelectedFood(food);
    };
    const renderItem = ({item}) => {
        return (<Item onPress={() => changeFood(item)}
                      style={styles.button}
                      name={item.name} image={item.image} />);
    };

    return (
        <View style={styles.container}>
            <FlatList data={foods}
                      renderItem={renderItem}
                      keyExtractor={food => food.name}
                      style={styles.list}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        height: '100%'
    },
    list: {
        height: '100%',
        width: '100%',
    },
    item: {
        padding: 5,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        fontSize: 15,
        shadowRadius: 10,
        backgroundColor: '#006064',
        borderRadius: 5,
    },
    itemName: {
        color: 'white',
        alignContent: 'center'
    }
});
