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
        backgroundColor:'dodgerblue',
        padding:20,
        borderRadius:150,
        height:70,
        width:70,
        alignItems:'center',
        margin:5,
    },
    buttonText: {
        color: 'white',  
        fontSize: 26,
        fontWeight:'bold'
      },
})