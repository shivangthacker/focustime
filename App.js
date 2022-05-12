import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native'; //with platform attribute we can separate the paddings of android and ios mobile
import Constants from 'expo-constants';
import { Colours } from './src/utils/colors';
import { Focus } from './src/features/focus';
import {Timer} from './src/features/Timer';
import {FocusHistory} from './src/features/Focushistory';

export default function App() {
  //export default means this file exports this one main thing.It exports fonction app. Function app is pull everything together
  
  const [currentSubject, setCurrentsubject] = useState();
   const [history, setHistory] = useState([]);
  console.log(currentSubject);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentsubject}  />
        <FocusHistory history = {history} />
        </>
      ) : (
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject) => { setHistory([...history, subject])}}
          clearSubject={() => setCurrentsubject(null)}
        />
      )}
    </SafeAreaView> //safe area creates automatically padding in ios mobile
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // flex fill whole screen of the app.
    backgroundColor: Colours.darkblue,
  },
});
