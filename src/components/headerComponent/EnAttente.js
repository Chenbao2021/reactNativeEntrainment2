import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-ionicons';
import {styles, WIDTH} from '../../styles/headerStyles';
type Props = {
  nombre: Number,
};
export default function EnAttente(props: Props) {
  return (
    <View style={styles.header_left_second}>
      <Icon name="save" size={0.02 * WIDTH} color="yellow" />
      <View style={styles.text_container}>
        <Text style={styles.header_big_text}>{props.nombre}</Text>
        <Text style={styles.header_small_text}>en attente</Text>
      </View>
    </View>
  );
}
