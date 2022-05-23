import { View, Text, Pressable ,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { updatePlat } from '../redux/total';
import { updatePlat } from '../redux/total'

export default function Total(): React.FunctionComponent {
	const { totals } = useSelector((state) => state.totalReducer)
	return (
    <ScrollView>
			{
					totals.map((plats) => (
						<View key={plats.id} style={{backgroundColor: 'yellow', marginVertical: 20, flexDirection:'row', padding:10, justifyContent:'space-between'}}>
							<Text> {plats.name} </Text>
							<Text> {plats.pieces} </Text>
						</View>
					) 
					)
			}
    </ScrollView>
  )
}
