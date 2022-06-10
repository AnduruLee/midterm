import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [numberText1, setNumberText1] = useState('');
  const [numberText2, setNumberText2] = useState('');
  const [numberText3, setNumberText3] = useState('');
  const [message, setMessage] = useState('');

 
 


  function calcSum() {
    const number = parseInt(numberText1)
    const number2 = parseInt(numberText2);
      if (number, number2) {
      const sum = number + number2;
       setMessage(sum.toString());
    } else {
      setMessage('Invalid input.');
    }
  }

  return (
    <View style={styles.container}>
      <View style={(styles.boxContainer)}>
        <Text style={{ fontSize: 35, color: 'gold'}}>IS657 Midterm</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',}}>
        <Text style={styles.title}>Number 1[10 to 20]: </Text>
        <TextInput style={styles.textInput} onChangeText={setNumberText1}/>
      </View> 
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',}}>
        <Text style={styles.title}>Number 2[100 to 200]: </Text>
        <TextInput style={styles.textInput2} onChangeText={setNumberText2}/>
      </View> 
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'space-between',}}>
        <Pressable style={styles.pressable} onPress={calcSum} >
          <Text style={styles.calculate}>CALCULATE SUM</Text>
        </Pressable> 
        <Text style={styles.result}>{message}</Text>
        
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 1,
    borderColor: 'teal',
    backgroundColor: 'teal',
    width: 400,
    height: 200,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 50
  },
  title: {
    fontSize: 20,
    // fontWeight: 'bold',
  },
  result: {
    fontSize: 14,
    marginLeft: 170,
    borderWidth: 1,
    height:40,
    borderWidth: 1,
    padding: 10,
    width: 120,
    marginVertical: 10,
    marginLeft: 164
  },
  calculate: {
    color: 'white',
  },
  pressable: {
    marginVertical:10,
    borderWidth:2,
    borderColor: 'deepskyblue',
    padding: 5,
    backgroundColor: 'deepskyblue'
  },
  textInput: {
    height:40,
    borderWidth: 1,
    padding: 10,
    width: 120,
    marginVertical: 10,
    marginLeft: 100,
    maxLength: 2,
  },
  textInput2: {
    height:40,
    borderWidth: 1,
    padding: 10,
    width: 120,
    marginVertical: 10,
    marginLeft: 78,
    maxLength: 3,
  },
});
