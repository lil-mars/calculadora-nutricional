import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Result(props) {
    const {result, canCalc} = props;
    if (canCalc)
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Energia:</Text>
                    <Text style={styles.text}>{result.energy.toFixed(1)} Kcal</Text>
                </View>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Proteina:</Text>
                    <Text style={styles.text}>{result.protein.toFixed(1)} g</Text>
                </View>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Carbohid: </Text>
                    <Text style={styles.text}>{result.carbohydrates.toFixed(1)} gr</Text>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Calcio: </Text>
                    <Text style={styles.text}>{result.calcium.toFixed(1)} mg</Text>

                </View>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Hierro: </Text>
                    <Text style={styles.text}>{result.iron.toFixed(1)} mg</Text>

                </View>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Fosforo:</Text>
                    <Text style={styles.text}>{result.phosphorus.toFixed(1)} mg</Text>

                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Vitamina A:</Text>
                    <Text style={styles.text}>{result.vitaminA.toFixed(1)} IU</Text>

                </View>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Vitamina B:</Text>
                    <Text style={styles.text}>{result.vitaminB.toFixed(1)} mg</Text>

                </View>
                <View style={styles.col}>
                    <Text style={[styles.text, styles.label]}>Vitamina C:</Text>
                    <Text style={styles.text}>{result.vitaminC.toFixed(1)} mg</Text>
                
                </View>

            </View>
        </View>
    );
    else {
        return (<View>

        </View>)
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: '10%',
        flexDirection: 'row',
        height: '50%',
        backgroundColor: '#006064',
        borderWidth: 1
    },
    text: {
        color: 'white',
        fontSize: 18
    },
    label: {
        fontWeight: 'bold'
    },
    row: {
        width: '33%',
        shadowRadius: 10,
        borderWidth: 1
    },

});
