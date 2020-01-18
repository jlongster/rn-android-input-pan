import React, { useRef, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from 'react-native/Libraries/NewAppScreen';

function TestScreen() {
  let inputRef = useRef();
  let [focused, setFocused] = useState();

  function press() {
    inputRef.current.focus();
    // setFocused(true);
    // setTimeout(() => setFocused(false), 5000);
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <View style={{ backgroundColor: '#c53030', height: 55 }}>
        <Text>header</Text>
      </View>

      <ScrollView
        keyboardDismissMode="interactive"
        keyboardShouldPersistTaps="always"
        style={{ backgroundColor: '#d0d0d0' }}
      >
        <View
          style={{
            backgroundColor: '#718096',
            width: 30,
            height: 340,
            margin: 10
          }}
        ></View>
        <TextInput defaultValue="TextInput: press me" style={{ borderWidth: 1, borderColor: 'black', margin: 5 }} />

        <View
          style={{
            backgroundColor: '#718096',
            width: 30,
            height: 500,
            margin: 10
          }}
        ></View>
      </ScrollView>
    </View>
  );
}

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <TestScreen />
    </>
  );
}

export default App;
