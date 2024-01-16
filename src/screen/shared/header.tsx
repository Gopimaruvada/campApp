import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Header = ({ title, backgroundSource, showBackButton, onBackButtonClick }) => {
  return (
    <View style={styles.headerContainer}>
    
      <Image source={backgroundSource} style={styles.backgroundImage} />
      {showBackButton && (
       <TouchableOpacity onPress={onBackButtonClick} style={styles.backButton}>
       <Icon name="chevron-left" size={20} color="#000" />
     </TouchableOpacity>
      
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    position: 'relative',
    height: 150, // Set your desired height
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 70,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;
