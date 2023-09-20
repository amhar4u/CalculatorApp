import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/button';

export default function App() {
  return (
    <View style={styles.container}>
      
       <View style={styles.buttonRow}>
          <Button title={'7'} onPress={()=> console.log('press 1')} />
          <Button title={'8'} onPress={()=> console.log ('press 2')}/>
          <Button title={'9'} onPress={()=> console.log ('press 3')}/>
      </View> 
      <View style={styles.buttonRow}>
          <Button title={'4'} onPress={()=> console.log('press 1')} />
          <Button title={'5'} onPress={()=> console.log ('press 2')}/>
          <Button title={'6'} onPress={()=> console.log ('press 3')}/>
      </View>
      <View style={styles.buttonRow}>
          <Button title={'1'} onPress={()=> console.log('press 1')} />
          <Button title={'2'} onPress={()=> console.log ('press 2')}/>
          <Button title={'3'} onPress={()=> console.log ('press 3')}/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:10,
  
  },
  buttonRow:{
    backgroundColor :'black',
    flexDirection:'row',
  }
 
});
