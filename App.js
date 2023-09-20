import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import Button from './components/button';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import ButtonSymbol from './components/buttonSymbol';
import ButtonAC from './components/buttonAC';

export default function App() {

const [expression,setExpression] = useState('');
const [result, setResult] = useState('');
const [error, setError] = useState(false);


const onClick = (value)=>{

    if (value === '='){
      try {
        const Answer = eval(expression);
        setResult(Answer.toString());
        setExpression('');
        setExpression(Answer);
        setResult('')

      } catch(error){
            setResult('Format Error');
            setError(true);
      }
     return;
    }
    else if (value === 'x'){
      setExpression((prevExpression) => prevExpression + '*');
      setError(false);
    }
    else if (value === 'AC'){
      setExpression('');
      setResult('');
      setError(false);
    }
    else if (value === 'Backspace'){
      setExpression((prevExpression) => prevExpression.slice(0,-1));
      setResult((prevResult) => prevResult.slice(0,-1));
      setError(false);
    }
    else {
      setExpression((prevExpression) => prevExpression + value);
      //setResult((prevResult)=> prevResult + value);
      setError(false);
    }

};



  return (
    <View style={styles.container}>
    
      <View style={styles.display}>
        
        <Text style={styles.expressionText}>{expression}</Text>
        <Text style={[styles.resultText, error && styles.errorText]}>{result}</Text>

      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          <ButtonAC title={'AC'} onPress={ () => onClick('AC')} />
          <ButtonSymbol title={'( )'} onPress={ () => onClick('( )')} />
          <ButtonSymbol title={'%'} onPress={ () => onClick('%')} />
          <ButtonSymbol title={'/'} onPress={ () =>onClick('/')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title={'7'} onPress={ () => onClick('7')} />
          <Button title={'8'} onPress={ () => onClick('8')} />
          <Button title={'9'} onPress={ () => onClick('9')} />
          <ButtonSymbol title={'x'} onPress={ () => onClick('x')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title={'4'} onPress={ () => onClick('4')} />
          <Button title={'5'} onPress={ () => onClick('5')} />
          <Button title={'6'} onPress={ () => onClick('5')} />
          <ButtonSymbol title={'-'} onPress={ () => onClick('-')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title={'1'} onPress={ () => onClick('1')} />
          <Button title={'2'} onPress={ () => onClick('2')} />
          <Button title={'3'} onPress={ () => onClick('3')} />
          <ButtonSymbol title={'+'} onPress={ () => onClick('+')} />
        </View>
        <View style={styles.buttonRow}>
          <Button title={'0'} onPress={ () => onClick('0')} />
          <Button title={'.'} onPress={ () => onClick('.')} />
          <Button title={<Ionicons name="ios-backspace" size={30} color="black" />} onPress={ () => onClick('Backspace')} />
          <ButtonSymbol title={'='} onPress={() => onClick('=')} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end', // Place buttons at the bottom of the screen
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginBottom:5,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Align buttons evenly in a row
    
  },
  display: {
    height: 350,
    width: '105%',
    backgroundColor: '#F9DDE1',
    position: 'absolute',
    top: 0, 
    borderTopLeftRadius: 0, 
    borderTopRightRadius: 0, 
    borderBottomLeftRadius: 30, 
    borderBottomRightRadius: 30, 
    padding:10,
  },
  expressionText: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: 'right',
    top:80,
  },
  resultText: {
    fontSize: 50,
    textAlign: 'right',
    top:80,
  },
  errorText: {
    color: 'red', 
    fontWeight:'bold',
    alignItems:'center',
    justifyContent:'center',
  },
});
