// MyFlatListScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './shared/header';
import COLORS from '../theme/color';
import Footertab from './shared/footerTab';

const UpcomingCampScreen = ({ route }) => {
  const navigation = useNavigation();
  
  const data = [
    { id: '1', time: '17- March 2018, 10:00 AM - 5:25pm', name: 'DR usarat Shafiq' },
    { id: '2', time: '17- March 2018, 10:00 AM - 5:25pm', name: 'DR Gopi' },
    
    { id: '3', time: '17- March 2018, 10:00 AM - 5:25pm', name: 'DR Test' },
    
    { id: '4', time: '17- March 2018, 10:00 AM - 5:25pm', name: 'DR usarat' },
    
    
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={{ padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ flex: 1, color: '#000' }}>{item.time}</Text>
          <Icon name="star" size={20} style={{ marginRight: 10 }} color={COLORS.DARK_PRIMARY} />
          <Icon name="trash" size={20} color={COLORS.DARK_PRIMARY} />
        </View>
        <Text style={{ marginTop: 5 }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  const handleItemPress = (item) => {
    // Navigate to the new screen and pass the item data as a parameter
    navigation.navigate('CampDetails', { item });
  };

  return (
    <View style={{ flex: 1 }}>
    <Header title="Camp App" backgroundSource={require('../assets/bg.jpg')} showBackButton={true} onBackButtonClick={() => { console.log('Back button clicked!'); }} />
      <View style={{ margin: 20 }}>
        <View>
          <Text style={styles.title}>Upcoming Camps</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>

      <View style={{ margin: 20 }}>
        <View>
          <Text style={styles.title}>Past Camps</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
     <Footertab/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

export default UpcomingCampScreen;
