import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// const LotsOfStyles = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.red}>just red</Text>
//       <Text style={styles.bigblue}>just bigblue</Text>
//       <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//       <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#333333',
//   },
//   bigblue: {
//     color: 'blue',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
//   red: {
//     color: 'red',
//   },
// });

// export default LotsOfStyles;

// const FixedDimensionsBasics = () => {
//   return (
//     <View>
//       <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}/>
//       <View style={{width: 100, height: 100, backgroundColor: 'steelblue'}}/>
//       <View style={{width: 150, height: 150, backgroundColor: 'powderblue'}}/>
//     </View>
//   );
// }

// export default FixedDimensionsBasics;

// const FlexDimensionsBasics = () => {
//   return (
//     <View style={{flex: 1}}>
//       <View style={{flex: 1, backgroundColor: 'skyblue'}}/>
//       <View style={{flex: 2, backgroundColor: 'steelblue'}}/>
//       <View style={{flex: 3, backgroundColor: 'powderblue'}}/>
//     </View>
//   );
// }
// export default FlexDimensionsBasics;

const PercentageDimensionsBasics = () => {
  return (
    <View style={{height: '100%'}}>
      <View style={{height: '15%', backgroundColor: 'skyblue'}}/>
      <View style={{height: '55%', backgroundColor: 'steelblue'}}/>
      <View style={{height: '30%', backgroundColor: 'powderblue'}}/>
    </View>
  );
}