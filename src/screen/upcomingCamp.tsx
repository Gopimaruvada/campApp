// MyFlatListScreen.js

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './shared/header';
import COLORS from '../theme/color';
import Footertab from './shared/footerTab';
import { TouchableOpacity } from 'react-native-gesture-handler';

const UpcomingCampScreen = ({route}) => {
  const navigation = useNavigation();

  const data = [
    {
      title: 'Upcoming Events',
      data: [
        '17- March 2018, 10:00 AM - 5:25pm',
        '17- March 2018, 10:00 AM - 5:25pm',
        '17- March 2018, 10:00 AM - 5:25pm',
      ],
    },
    {
      title: 'Past Events',
      data: [
        '17- March 2018, 10:00 AM - 5:25pm',
        '17- March 2018, 10:00 AM - 5:25pm',
        '17- March 2018, 10:00 AM - 5:25pm',
      ],
    },
  ];

  const handleItemPress = item => {
    // Navigate to the new screen and pass the item data as a parameter
    navigation.navigate('CampDetails', {item});
  };

  return (
    <SafeAreaView>
      <View>
        <Header
          title="Camp App"
          backgroundSource={require('../assets/bg.jpg')}
          showBackButton={true}
          onBackButtonClick={() => {
            console.log('Back button clicked!');
          }}
        />
      </View>
      <SectionList
  sections={data}
  keyExtractor={(item, index) => item + index}
  renderItem={({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.item}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ flex: 1, color: '#000' }}>{item}</Text>
          <Icon name="star" size={20} style={{ marginRight: 10 }} color={COLORS.DARK_PRIMARY} />
          <Icon name="trash" size={20} color={COLORS.DARK_PRIMARY} />
        </View>
        <Text style={{ marginTop: 5 }}>DR Mehta</Text>
      </View>
    </TouchableOpacity>
  )}
  renderSectionHeader={({ section: { title } }) => (
    <Text style={styles.header}>{title}</Text>
  )}
/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 5,
    marginHorizontal:15
  },
  header: {
    fontSize: 20,
    marginHorizontal:15,
    paddingVertical: 5,
  },
  title: {
    fontSize: 18,
  },
});

export default UpcomingCampScreen;
