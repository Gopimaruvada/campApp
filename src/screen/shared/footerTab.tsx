import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import COLORS from '../../theme/color';

const Footertab = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => {
          navigation.navigate('accountTab');
        }}>
        <Icon name="user" size={25} color={COLORS.DARK_PRIMARY}></Icon>
        <Text style={styles.tabText}>Account</Text>
      </TouchableOpacity>
      {/* Add more TouchableOpacity components for additional tabs if needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white', // Customize the background color
    height: 60, // Adjust the height as needed
    borderTopWidth: 1, // Optional: Add a border at the top
    borderTopColor: COLORS.DARK_PRIMARY, // Optional: Customize the border color
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    marginTop: 5, // Adjust the spacing between icon and text
    color: COLORS.DARK_PRIMARY, // Customize the text color
  },
});

export default Footertab;
