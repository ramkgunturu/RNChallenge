import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "@Themes";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  pincodeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    width: "80%",
    fontSize: responsiveFontSize(2),
    textTransform: "capitalize",
    textAlign: "left",
    paddingVertical: responsiveWidth(1),
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: responsiveWidth(2),
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewStyle: {
    height: responsiveWidth(10),
    marginHorizontal: responsiveWidth(2),
    backgroundColor: "#EBEEEE",
    borderRadius: 10,
    flexDirection: "row",
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    justifyContent: "center",
  },
  viewTextInputStyle: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: responsiveWidth(2),
  },
  viewTextInputImageStyle: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: responsiveWidth(3),
    height: responsiveHeight(3),
    tintColor: Colors.themecolor,
    resizeMode: "contain",
  },
  noResultViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
