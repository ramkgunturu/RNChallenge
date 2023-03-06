// This code defines a functional component called 'Loading'
// that renders an ActivityIndicator inside a View.
import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#2196F3" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
