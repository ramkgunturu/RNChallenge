// This code defines a functional component called 'NoResult'
// that renders an image inside a View.
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Images } from "@Themes";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

export default function NoResult() {
  return (
    <View sytle={styles.container}>
      <Image style={styles.imageStyle} source={Images.noresult} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: responsiveWidth(90),
    resizeMode: "contain",
  },
});
