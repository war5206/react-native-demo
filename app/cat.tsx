// import React from 'react';
// import { Text, View, Image } from 'react-native';
// import { TextInput } from 'react-native-gesture-handler';

// interface CatProps { name: string; }

// const getFullName = (firstName: string, lastName: string): string => {
//   return firstName + ' ' + lastName;
// }

// const Cat = (props: CatProps) => {
//   return (
//     <View>
//       <Text>Hello I am your cat {props.name}</Text>
//       {/* <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//         defaultValue="You can type in me"
//       /> */}
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Image
//         source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
//         style={{width: 200, height: 200}}
//       />
//       <Text>Hello</Text>
//       <Cat name="Maru" />
//       <Cat name="Jellylorum" />
//     </View>
//   );
// }

// export default Cafe;
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const Cat = (props) => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}
      </Text>
      <Buttion
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
    </>
  );
}