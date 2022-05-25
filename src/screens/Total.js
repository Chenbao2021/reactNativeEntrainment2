import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
// import { updatePlat } from '../redux/total';
export default function Total(): React.FunctionComponent {
  const { totals } = useSelector((state) => state.totalReducer)
  return (
    <ScrollView>
      {
        totals.map((plats) => (
          <View key={plats.id} style={styles.container}>
            <Text>
              {' '}
              {plats.name}
              {' '}
            </Text>
            <Text>
              {' '}
              {plats.pieces}
              {' '}
            </Text>
          </View>
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 5,
    paddingVertical: 15,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    borderRadius: 30,
  },
})
