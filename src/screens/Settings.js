import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, } from 'react-redux';
import { setBackgroundColor } from '../redux/setting';

export default function Settings() {
  const dispatch = useDispatch();
  // const {backgroundColor}=useSelector((state) => state.SettingReducer);
  return (
    <View style={styles.set_bg_color}>
      <Pressable
        style={styles.Pressable_container}
        onPress={() => dispatch(setBackgroundColor('black'))}
      >
        <Text>Black</Text>
      </Pressable>
      <Pressable
        style={styles.Pressable_container}
        onPress={() => dispatch(setBackgroundColor('blue'))}
      >
        <Text>Blue </Text>
      </Pressable>
      <Pressable
        style={styles.Pressable_container}
        onPress={() => dispatch(setBackgroundColor('yellow'))}
      >
        <Text>Yellowww</Text>
      </Pressable>
      <Pressable
        style={styles.Pressable_container}
        onPress={() => dispatch(setBackgroundColor('#2f4f4f'))}
      >
        <Text>Original</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  set_bg_color: {
    flexDirection: 'row',
  },
  Pressable_container: {
    alignItems: 'center',
    flex: 0.2,
    margin: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
})
