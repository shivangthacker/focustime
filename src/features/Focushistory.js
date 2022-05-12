import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Colours } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';


export const FocusHistory = ({history}) => {

   if (!history || !history.length) return <Text style={styles.title}>Things we've focused on:</Text>;
const renderItem = ({ item }) => <Text style={styles.item}> - {item}</Text>; // Define renderItem which add detailes in item.

  return (
    <View style={styles.container}>
      <Text style={styles.title}> 'Things we've focused on:'' </Text>
       <FlatList data={history} renderItem={renderItem} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex:1,
  },
  item: {
    fontSize: fontSizes.md,
    color: Colours.white,
    paddingTop: spacing.sm
  },
  title: {
    color: Colours.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
});