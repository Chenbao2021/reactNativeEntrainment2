import { StyleSheet, Dimensions } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  // -----------Third Object-------------------//
  header_left_third: {
    flexDirection: 'row',
  },

  // -----------Second Object------------------//
  header_left_second: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  header_big_text: {
    fontSize: 0.02 * WIDTH,
  },
  header_small_text: {
    fontSize: 0.01 * WIDTH,
  },
  header_left: {
    flex: 0.35,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // ----------Container ---------- //
  text_container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginHorizontal: 5,
  },
  header_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
