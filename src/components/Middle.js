// @flow
//Version 15h05
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';

import Icon from 'react-native-ionicons';
import type { Node } from 'react';
import { setInterval } from 'react-native/Libraries/Core/Timers/JSTimers';

import dayjs, { Dayjs } from 'dayjs';

import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import { useDispatch, useSelector } from 'react-redux';

import { WIDTH } from '../styles/constants';
// import { setCC } from '../redux/actions';
import { setCC } from '../redux/action_reducers';
import { setPlatFinished, deleteOrder, addOrder, setUrgent, setColorStatus } from '../redux/orders';
import { addOrderHistory, setPlatNotFinished, deleteOrderStory } from '../redux/ordersStory';

import type { OrderType, CommandeType } from '../flowType/flowTypeObject'

import Total from '../screens/Total';

const iconSmall = 0.02 * WIDTH;

type PropsProduit = {
  id: number,
  index: number,
  order: OrderType,
  finished: boolean,
  product: {name: string, finished:boolean, pieces:number },
}
function Product(props: PropsProduit) {
  const dispatch = useDispatch();

  const checkfinished = () => {
    if (!props.order.orderfinished) {
      dispatch(setPlatFinished({ orderId: props.order.id, platIndex: props.index }));
      dispatch(setPlatNotFinished({ orderId: props.order.id, platIndex: props.index }))
    }
  }

  return (
    <Pressable
      style={[{ borderWidth: 1, borderColor: 'black', margin: 5, padding: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: props.finished ? 'grey' : 'white' }]}
      onPress={() => { checkfinished() }}
    >
      <Text
        style={{ textDecorationLine: props.finished ? 'line-through' : 'none' }}
      >
        { props.product.name }
      </Text>
      <Text
        style={{ textDecorationLine: props.finished ? 'line-through' : 'none' }}
      >
        { props.product.pieces }
      </Text>
    </Pressable>
  )
}

function CommandeSection(props:CommandeType) {
  const { form } = useSelector((state) => state.SettingReducer)
  return (
    <View style={{ flex: (form === 2 || form === 1) ? 0.9 : undefined, backgroundColor: 'white' }}>
      <ScrollView>
        {props.order.plats.map((p, idx) => (
          <Product product={p} id={props.order.id} finished={p.finished} index={idx} order={props.order} key={`${ props.order.id },${ idx}`} />
        ))}
      </ScrollView>
    </View>
  );
}

function Commande({ data: order }) {
  const dispatch = useDispatch();
  const { form } = useSelector((state) => state.SettingReducer)
  return (
    <View style={[{ backgroundColor: form === 3 ? '#2f4f4f' : 'white', }, form === 4 ? styles.commandeForme4 : styles.commande]}>
      <View style={[{ backgroundColor: order.colorStatus === 3 ? 'red' : (order.colorStatus === 2 ? 'orange' : 'green') }, styles.commande_head]}>
        <View style={styles.commande_head_container}>
          <View style={styles.commande_head_top}>
            <Icon name="refresh" size={0.015 * WIDTH} />
            <Text style={styles.commande_head_time}>{dayjs(order.time).format('HH:mm')}</Text>
            <View style={styles.commande_head_top_left}>
              <Icon name="md-timer" size={iconSmall} />
              <Text style={styles.font_small}>00:05:35</Text>
            </View>
            <Pressable onPress={() => dispatch(setUrgent({ orderId: order.id }))}>
              <Icon name="notifications-outline" size={iconSmall * 1.2} color={order.urgent ? 'black' : 'white'} />
            </Pressable>
          </View>
          <View style={styles.commande_head_bottom}>
            <View style={styles.commande_head_left_bottom}>
              <Icon name={order.iconName} size={iconSmall} />
              <Text style={styles.font_small}>{order.mode}</Text>
            </View>
            <Text style={styles.font_small}>id commande</Text>
            <Text style={styles.font_small}>nom Client</Text>
          </View>
        </View>
      </View>
      <CommandeSection titre="PLATS" iconName="nutrition" order={order} />
    </View>
  );
}

function Commandes() {
  const [xPosition, setXPosition] = useState(0);
  const [xTotal, setXTotal] = useState(0);

  const { orders } = useSelector((state) => state.ordersReducer)
  const dispatch = useDispatch();

  const { form } = useSelector((state) => state.SettingReducer)

  const handleScroll = async () => {
    dispatch(setCC(Math.trunc((xTotal - xPosition) / 220 - 4)))
  }

  useEffect(() => {
    orders.forEach((order) => {
      if ((order.plats.filter((p) => !p.finished).length === 0)) {
        dispatch(addOrderHistory({ order }));
        dispatch(deleteOrder({ orderId: order.id }));
      }
    })
    handleScroll();
  })

  useEffect(() => {
    const timeCurrent = (new Date()).getTime();
    orders.forEach((order) => {
      let colorStatus = order.colorStatus;
      setInterval(() => {
        if (colorStatus < 3) {
          colorStatus += 1;
          const timeOrder = (new Date(order.time)).getTime();
          const ecart = timeCurrent - timeOrder;
          if (ecart > 350000000) { dispatch(setColorStatus({ orderId: order.id, updateColor: 3 })) }
          else if (ecart > 600000) { dispatch(setColorStatus({ orderId: order.id, updateColor: 2 })) }
        }
      }, 1000)
    })
  }, [])
  const takeForm = () => {
    if (form === 1) return styles.commandes1;
    else if (form === 2) return styles.commandes2;
    else if (form === 3) return styles.commandes3;
    else if (form === 4) return styles.commandes4;
  }
  return (
    <ScrollView onContentSizeChange={(width,) => { 
        setXTotal(width), 
        dispatch(setCC(Math.trunc((xTotal - xPosition)/220 - 4)))}} 
        horizontal={true} 
        onScroll={(even) => setXPosition(even.nativeEvent.contentOffset.x)}
        onScrollEndDrag={(even) => handleScroll(even)}
        onMomentumScrollEnd={(even) => handleScroll(even)}
        >
        <Text>{orders[0].colorStatus}</Text>
      {/* <View style={form === 1 ? styles.commandes1 : styles.commandes2}> */}
      <View style={takeForm()}>
        {orders.map((p, idx) => (
            p.urgent === true ?
            <Commande data={p} commande_index={idx} key={Math.random()} />
            :<View key={idx}></View>
        ))}
        {orders.map((p, idx) => (
            p.urgent === false ?
            <Commande data={p} commande_index={idx} key={idx} />
            :<View key={idx}></View>
        ))}
      </View>

    </ScrollView>
  );
}

function Historique() {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.ordersStoryReducer)
  useEffect(() => {
    orders.forEach((order) => {
      if ((order.plats.filter((p) => !p.finished).length !== 0)) {
        dispatch(addOrder({ order }))
        dispatch(deleteOrderStory({ orderId: order.id }));
      }
    })
  })
  return (
    <ScrollView>
      <View style={styles.commandes2}>
        {orders.map((p, idx) => (
          <Commande data={p} commande_index={idx} key={idx} />

        ))}
      </View>

    </ScrollView>
  );
}

export default function Middle(): Node {
  const { ms } = useSelector(state => state.ccReducer);
  return (
    <View style={styles.middle_container}>
      {ms === 'md-save' ? <Commandes /> : <View />}
      {ms === 'Total' ? <Total /> : <View />}
      {ms === 'md-sync' ? <Historique /> : <View />}
    </View>
  );
}

const styles = StyleSheet.create({
  commande_head_bottom: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  commande_head_top_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commande_head_left_bottom: {
    flex: 0.7,
    width: '85%',
    borderRadius: 0.01 * WIDTH,
    flexDirection: 'row',
    backgroundColor: 'grey',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  commande_head_top: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commande_head_container: {
    flex: 1,
  },
  commande_head: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 15,
    minHeight: 60,
    maxHeight: 60,
  },
  commande_head_time: {
    fontSize: 0.02 * WIDTH,
  },
  commande: {
    flex: 1,
    width: 230,
    minHeight: 280,
    maxHeight: 500,
    margin: 0.003 * WIDTH,
    borderRadius: 20,
  },
  commandeForme4: {
    width: 230,
    minHeight: 100,
    maxHeight: 500,

    // backgroundColor: 'white',
    margin: 0.003 * WIDTH,
    borderRadius: 20,
  },
  font_small: {
    fontSize: 0.01 * WIDTH,
    color: 'black',
  },
  commandes4: {
    flex: 1,
    flexWrap: 'wrap',
  },
  commandes2: {
    flex: 1,
    flexWrap: 'wrap',
  },
  commandes1: {
    flex: 1,
    flexDirection: 'row',
  },
  commandes3: {
    flex: 1,
    flexDirection: 'row',
  },
  middle_container: {
    flex: 1,
    marginBottom: 0.005 * WIDTH,
  },
})
