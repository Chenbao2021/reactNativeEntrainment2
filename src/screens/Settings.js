import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useDispatch, useSelector, } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setBackgroundColor, setForm, setIp } from '../redux/setting';

function Button(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      style={({ pressed }) => [styles.Pressable_container, { backgroundColor: pressed ? 'yellow' : 'white' }]}
      onPress={() => { navigation.navigate('Home'); props.dispatch(props.feature(props.id)) }}
    >
      <Text style={{ backgroundColor: props.current === props.id ? 'yellow' : undefined }}>{props.title}</Text>
    </Pressable>
  )
}
export default function Settings() {
  const dispatch = useDispatch();
  const { backgroundColor, form, ip } = useSelector((state) => state.SettingReducer)
  const onIp = (event) => { dispatch(setIp(event)) }

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text_container}>Background Color :</Text>
        <Button title="Black" id="black" dispatch={dispatch} feature={setBackgroundColor} current={backgroundColor} />
        <Button title="Blue" id="blue" dispatch={dispatch} feature={setBackgroundColor} current={backgroundColor} />
        <Button title="Yellow" id="yellow" dispatch={dispatch} feature={setBackgroundColor} current={backgroundColor} />
        <Button title="Original" id="#2f4f4f" dispatch={dispatch} feature={setBackgroundColor} current={backgroundColor} />
      </View>
      <View style={styles.row}>
        <Text style={styles.text_container}>Emplacement :</Text>
        <Button title="Form 1" id={1} dispatch={dispatch} feature={setForm} current={form} />
        <Button title="Form 2" id={2} dispatch={dispatch} feature={setForm} current={form} />
        <Button title="Form 3" id={3} dispatch={dispatch} feature={setForm} current={form} />
        <Button title="Form 4" id={4} dispatch={dispatch} feature={setForm} current={form} />
      </View>
      <View style={styles.row}>
        <Text style={styles.text_container}>Ip :</Text>
        <TextInput style={styles.input_container} onChangeText={onIp} value={ip} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  input_container: {
    borderWidth: 1,
    borderColor: 'black',

    width: '50%',
    paddingHorizontal: 10,
    marginHorizontal: 100,
  },
  text_container: {
    alignItems: 'center',
    flex: 0.2,
    margin: 15,
  },
  Pressable_container: {
    alignItems: 'center',
    flex: 0.2,
    paddingVertical: 5,
    margin: 15,
    borderWidth: 2,
    borderColor: 'black',
  },
  container: {
    flex: 1,
  }
})
