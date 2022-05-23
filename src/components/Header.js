// @flow
import { View, Text, Pressable, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import type { Node } from 'react';
import React from 'react';
import dayjs from 'dayjs';
import Icon from 'react-native-ionicons';
import { useNavigation } from '@react-navigation/native';
import EnCours from './headerComponent/EnCours';

export const WIDTH: number = Dimensions.get('window').width;

export default function Header():Node {
  const navigation = useNavigation();
  const { orders } = useSelector((state) => state.ordersReducer)
  const timeNow = new Date()
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <View style={styles.header_container}>
      <View style={styles.header_left}>
        {/* <View style={styles.header_left_first}>
          <Icon name="ios-beer" size={0.02 * WIDTH} color="white" />
          <Text style={styles.header_left_first_text}>CUISINE</Text>
        </View> */}
        <EnCours nombre={orders.length} />
      </View>
      <ScrollView style={styles.header_middle} horizontal>
        {
          orders.map((order, idx) => (
            <View style={{ flex: 1, alignItems: 'center', margin: 3, marginHorizontal: 10, minWidth: 100, borderWidth: 1, borderColor: 'color', backgroundColor: order.colorStatus === 3 ? 'red' : 'green' }} key={idx}>
              <Text>{dayjs(order.time).format('HH:mm')}</Text>
            </View>
          ))
        }
      </ScrollView>
      <View style={styles.header_right}>
        <Pressable
          onPress={() => navigation.navigate('Settings')}
        >

          <View>
            <Icon name="md-wine" size={0.02 * WIDTH} />
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // -----------Header left icon---------------//
  header_right: {
    backgroundColor: 'lightgrey',
    padding: 0.01 * WIDTH,
    borderRadius: 0.02 * WIDTH,
  },
  // -----------Third Object-------------------//
  // header_left_third: {
  //   flexDirection: 'row',
  // },

  // -----------Second Object------------------//
  // header_left_second: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // -----------First object-------------------//
  header_left_first_text: {
    fontSize: 0.02 * WIDTH,
    marginHorizontal: 10,
    color: 'white',
  },

  header_left_first: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  // -----------Header Left----------//
  // header_big_text: {
  //   fontSize: 0.02 * WIDTH,
  // },
  // header_small_text: {
  //   fontSize: 0.01 * WIDTH,
  // },
  header_left: {
    // flex: 0.35,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  header_middle: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  // ----------Container ---------- //
  // text_container: {
  //   flexDirection: 'row',
  //   alignItems: 'flex-end',
  //   marginHorizontal: 5,
  // },
  header_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
