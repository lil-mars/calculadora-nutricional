import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import SelectedFood from "./selectedFood";
export default function Options(props) {
    const {food, setResult} = props;
    const [foodList, setFoodList] = useState([]);
    const [hasChanged, setHasChanged] = useState(false);
    const [amount, setAmount] = useState(null);
    const [stats, setStats] = useState({
            // kcal, g, gr
            energy: 0, protein: 0, carbohydrates: 0,
            // mg, mg, mg
            calcium: 0, iron: 0, phosphorus: 0,
            // IU mg mg
            vitaminA: 0, vitaminB: 0, vitaminC: 0
        }
    );
    const calc = (amount, value) => {
        return amount * value / 100;
    };
    const addFood = () => {
        foodList.push({
            name: food.name,
            amount: amount
        });
        console.log(stats);
        stats.energy += calc(amount, food.energy);
        stats.protein += calc(amount, food.protein);
        stats.carbohydrates += calc(amount, food.carbohydrates);
        stats.calcium += calc(amount, food.calcium);
        stats.iron += calc(amount, food.iron);
        stats.phosphorus += calc(amount, food.phosphorus);
        stats.vitaminA += calc(amount, food.vitaminA);
        stats.vitaminB += calc(amount, food.vitaminB);
        stats.vitaminC += calc(amount, food.vitaminC);
        console.log(stats);
        setHasChanged(true);
        setResult(stats);
    };
    const removeFood = () => {
        setFoodList([]);
        setStats({
            // kcal, g, gr
            energy: 0, protein: 0, carbohydrates: 0,
            // mg, mg, mg
            calcium: 0, iron: 0, phosphorus: 0,
            // IU mg mg
            vitaminA: 0, vitaminB: 0, vitaminC: 0
        });
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                { food ? food.name[0].toUpperCase()+food.name.slice(1) : 'Selecciona comida:'}
            </Text>
            {food ? <Image style={{width: 90, height: 90}} source={{uri: food.image}}/> : <Text></Text>}
            <View style={styles.form}>
                <Text style={styles.text}>Gramos:  </Text>
                <TextInput style={styles.input}
                           onChange={(e)=>setAmount(e.nativeEvent.text)}/>
            </View>
            <View style={styles.form}>
                <TouchableOpacity onPress={addFood}>
                    <Text style={styles.button}>Agregar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={removeFood}>
                    <Text style={[styles.button, {backgroundColor: 'red'}]}>Reset</Text>
                </TouchableOpacity>
            </View>
            {hasChanged ? <SelectedFood foods={foodList} hasChanged={hasChanged}/> : <Text style={styles.text}>Agrega comidas!</Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      paddingLeft: 5
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    form: {
      flexDirection: 'row'
    },
    input: {
        height: 30,
        borderWidth: 1,
        width: '40%',
        color: 'white',
        textAlign: 'center',
        marginTop: 8
    },
    button:{
        backgroundColor:'#00363a',
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        padding: "2%",
        fontSize: 15,
        shadowRadius: 10,
        width: '100%',
        height: 30,
        marginTop: '5%'
    }
});
