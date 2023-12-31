import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title,onPress}) => {
  return (
   <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>
        {title}
    </Text>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#F9DDE1',
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