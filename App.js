import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View, Button} from 'react-native';
import {foods} from './app/src/data/food';
import {LinearGradient} from 'expo-linear-gradient';
import FoodList from "./app/components/foodList";
import Options from "./app/components/options";
import Result from "./app/components/result";

export default function App() {
    foods.sort((a, b) => (a.name > b.name) ? 1 : -1);
    const [selectedFood, setSelectedFood] = useState(null);
    const [canCalc, setCanCalc] = useState(false);
    const [ result, setResult ] = useState({
        // kcal, g, gr
        energy: 0, protein: 0, carbohydrates: 0,
        // mg, mg, mg
        calcium: 0, iron: 0, phosphorus: 0,
        // IU mg mg
        vitaminA: 0, vitaminB: 0, vitaminC: 0
    });

    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#00363a', '#006064', '#428e92']}
                style={{
                    height: '100%',
                }}
            >
                <Text style={styles.title}>Calculadora Nutricional</Text>
                <View style={styles.body}>
                    <FoodList style={styles.list} setSelectedFood={setSelectedFood}/>
                    <Options style={styles.options} setResult={setResult} food={selectedFood}/>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title='Calcular' color='#00363a' onPress={() => setCanCalc(!canCalc) }>
                    </Button>
                </View>
                <View style={styles.end}>
                    <Result result={result} canCalc={canCalc}/>
                </View>
            </LinearGradient>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: '6%',
        alignSelf: 'center'
    },
    body: {
        height: '45%',
        flexDirection: 'row',
    },
    itemName: {
        color: 'white',
        fontSize: 33
    },
    buttonContainer: {
        marginTop: 10,
        width: '40%',
        paddingLeft: 10
    }
});
