// This code defines a functional component called 'PincodeCard'
// that renders a card-like View containing text elements for displaying
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Colors} from '@Themes';
export default function PincodeCard({
  name,
  pinCode,
  branchType,
  state,
  country,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.titleText}>Postal Address : </Text>
      <Text style={styles.text}>Name : {name}</Text>
      <Text style={styles.text}>Branch : {branchType}</Text>
      <Text style={styles.text}>State : {state}</Text>
      <Text style={styles.text}>Pincode : {pinCode}</Text>
      <Text style={styles.text}>Country : {country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.cardbgcolor,
    borderRadius: responsiveWidth(4),
    padding: responsiveWidth(4),
    marginBottom: responsiveWidth(4),
  },
  titleText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: 'bold',
    marginBottom: responsiveWidth(8),
  },
  text: {
    fontSize: responsiveFontSize(1.9),
    marginBottom: responsiveWidth(2),
  },
});
