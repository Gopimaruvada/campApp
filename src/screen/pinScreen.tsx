import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, Keyboard } from 'react-native';
import style from '../theme/style';
const PinScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handlePinChange = (value) => {
    // Limit pin to 4 digits
    if (/^\d{0,4}$/.test(value)) {
      setPin(value);
    }
  };

  const handlePinSubmit = () => {
    navigation.navigate('upComing');
    setPin('');
  };

  const handleForgotPassword = () => {
    // Navigate to the Forgot Password screen (replace with your screen name)
    navigation.navigate('ForgotPasswordScreen');
  };

  const handlePinPress = () => {
    // Clear the PIN when clicking on the input
    setPin('');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg.jpg')} style={styles.image} />
      <View style={styles.pinContainer}>
        <Text style={styles.pinLabel}>Enter Your 4 digit password number in the system</Text>
        <View style={styles.pinInputContainer}>
  {Array.from({ length: 4 }).map((_, index) => (
    <View key={index} style={styles.pinDigitContainer}>
      <TextInput
        style={styles.pinDigit}
        keyboardType="numeric"
        maxLength={1}
        secureTextEntry
        value={pin[index]}
        onFocus={handlePinPress} // Clear the PIN on input focus
        onChangeText={(value) => handlePinChange(value)}
      />
      <View style={styles.pinUnderline} />
    </View>
  ))}
</View>
      </View>
      <TouchableOpacity style={style.btnPrimary} onPress={handlePinSubmit}>
        <Text style={style.btnPrimary}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordLink}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    image: {
      width: '100%',
      height: 200,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    pinContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    pinLabel: {
      fontSize: 18,
      marginBottom: 10,
    },
    pinInputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    pinDigitContainer: {
      marginHorizontal: 5,
      alignItems: 'center',
    },
    pinDigit: {
      fontSize: 24,
      fontWeight: 'bold',
      width: 24,
      textAlign: 'center', 
    },
    pinUnderline: {
      borderBottomWidth: 2,
      width: 20,
      marginVertical: 5,
    },
    submitButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    submitButtonText: {
      color: 'white',
      fontSize: 18,
    },
    forgotPasswordLink: {
      marginTop: 10,
      color: 'blue',
      textDecorationLine: 'underline',
    },
  });

export default PinScreen;
