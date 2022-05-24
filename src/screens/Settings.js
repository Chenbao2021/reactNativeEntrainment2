import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useDispatch, } from 'react-redux';
import { setBackgroundColor, setForm } from '../redux/setting';

export default function Settings() {
  const dispatch = useDispatch();
  // const {backgroundColor}=useSelector((state) => state.SettingReducer);
  return (
    <View style={styles.container}>
      <View style={styles.set_bg_color}>
        <Text style={styles.text_container}>Background Color :</Text>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setBackgroundColor('black'))}
        >
          <Text>Black</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setBackgroundColor('blue'))}
        >
          <Text>Blue </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setBackgroundColor('yellow'))}
        >
          <Text>Yellow</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setBackgroundColor('#2f4f4f'))}
        >
          <Text>Original</Text>
        </Pressable>
      </View>
      <View style={styles.set_bg_color}>
        <Text style={styles.text_container}>Emplacement :</Text>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setForm(1))}
        >
          <Text>Form 1</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setForm(2))}
        >
          <Text>Form 2</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setForm(3))}
        >
          <Text>Form 3</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{ backgroundColor: pressed ? 'grey' : 'white' }, styles.Pressable_container]}
          onPress={() => dispatch(setForm(4))}
        >
          <Text>Form 4</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  set_bg_color: {
    flexDirection: 'row',
  },
  text_container: {
    alignItems: 'center',
    flex: 0.2,
    margin: 15,
  },
  Pressable_container: {
    alignItems: 'center',
    flex: 0.2,
    margin: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  container: {
    flex: 1,
  }
})
