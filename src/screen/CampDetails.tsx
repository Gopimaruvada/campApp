import React from 'react';
import { View, Text } from 'react-native';
import Header from './shared/header';

const CampDetails = ({ route, navigation }) => {
  // Extract the item data from the route parameters
  const { item } = route.params;

  return (
    <View>
      <Header
        title="Camp App"
        backgroundSource={require('../assets/bg.jpg')}
        showBackButton={true}
        onBackButtonClick={() => {
            navigation.navigate('upComing');
        }}
      />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Camp Details</Text>
        <Text>Time: {item.time}</Text>
        <Text>Name: {item.name}</Text>
       
      </View>
    </View>
  );
};

export default CampDetails;
