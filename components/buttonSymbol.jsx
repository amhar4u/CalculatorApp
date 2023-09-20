import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const ButtonSymbol = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>
        {title}
    </Text>
   </TouchableOpacity>
  )
}

export default ButtonSymbol

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#E8F9D7',
        borderRadius:150,
        height:90,
        width:90,
        margin:5,
        alignItems:'center',
        justifyContent:'center',
        
    },
    buttonText: {
        color: 'black',  
        fontSize: 40,
        alignItems:'center',
      },
})