import React from 'react';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

const Item = ({name, amount}) => (
    <TouchableOpacity style={styles.item}>
        <View>
            <Text style={styles.itemName}>{name[0].toUpperCase() + name.slice(1)}</Text>
        </View>
        <Text style={styles.itemName}>
            {amount}
        </Text>
    </TouchableOpacity>
);

export default function SelectedFood(props) {
    const { foods, hasChanged } = props;
    const renderItem = ({item}) => {
        return (<Item onPress={() => changeFood(item)}
                      style={styles.button}
                      name={item.name} amount={item.amount} />);
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
        marginTop: 10,
        height: '30%',
        width: '80%',
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
