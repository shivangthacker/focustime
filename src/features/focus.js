import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native'; //with platform attribute we can separate the paddings of android and ios mobile
import { TextInput } from 'react-native-paper';
import { colours } from '../utils/colors';
import { RoundedButton } from '../components/Roundedbutton';
import {spacing} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setsubject] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          style={styles.textinput}
          label="What would you like to focus on?"
          onChangeText={setsubject}
        />
        <View style={styles.button}>
          <RoundedButton  title="+" size={50} onPress={()=> addSubject(subject)}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  
  },
  button: {
    justifyContent: 'center',//it's work like gravity
  },

  textinput: {
    flex: 1,
    marginRight: spacing.sm,
  },

  inputcontainer: {
    padding: 25,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
});
