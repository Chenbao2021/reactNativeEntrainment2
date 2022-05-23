// @flow
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StyleSheet, Pressable, } from 'react-native';
import React from 'react';
import type { Node } from 'react';
import Icon from 'react-native-ionicons';
import { WIDTH } from '../styles/constants';
// import { setMiddle_Section } from '../redux/actions';
// eslint-disable-next-line camelcase
import { setMiddle_Section } from '../redux/action_reducers';
import { updatePlat, reseatPlat, } from '../redux/total';

type optionProps = {
  description: string,
  icon: string,
  page: string,
};
function Option(props: optionProps): Node {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.ordersReducer)
  const sumTotal = () => {
    dispatch(reseatPlat())
    orders.map((order) => order.plats.map((plat) => {
      dispatch(updatePlat(plat))
    }))
  }
  // const {ms}=useSelector(state=>state.userReducer);
  const { ms } = useSelector(state => state.ccReducer);
  const setPress = () => {
    if (props.page === 'Total') {
      sumTotal();
    }
    dispatch(setMiddle_Section(props.page));
  }
  return (
    <Pressable onPress={setPress}>
      <View
        style={[
          styles.option,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderTopColor: props.page === ms ? 'green' : 'gray',
          },
        ]}
      >
        <Icon
          name={props.icon}
          size={0.04 * WIDTH}
          color={props.page === ms ? 'green' : 'gray'}
        />
        <Text
          style={[
            styles.option_text,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              color: props.page === ms ? 'green' : 'gray',
            },
          ]}
        >
          {props.description}
        </Text>
      </View>
    </Pressable>
  );
}

export default function Foot():any {
  const { number, } = useSelector(state => state.ccReducer);
  return (
    <View style={styles.foot_container}>
      <View style={styles.foot_container}>
        <Option
          description="Commandes actives"
          icon="md-save"
          page="md-save"
        />
        <Option
          description="Historique"
          icon="md-sync"
          page="md-sync"
        />
        <Option
          description="Total"
          icon="alert"
          page="Total"
        />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 0.5, backgroundColor: 'white', borderRadius: 20, }}>
        <Text style={{ fontSize: 20, }}>
          encore
          {' '}
          {number}
          {' '}
          commandes
          {' '}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // option_no_active: {
  //   borderTopColor: 'green',
  //   color: 'green',
  // },
  // option_active: {
  //   borderTopColor: 'grey',
  //   color: 'grey',
  // },
  option_text: {
    fontSize: 0.01 * WIDTH,
  },
  option: {
    width: 0.15 * WIDTH,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0.005 * WIDTH,
    borderTopWidth: 2,
  },
  foot_container: {
    flex: 1,
    flexDirection: 'row',
  },
});
