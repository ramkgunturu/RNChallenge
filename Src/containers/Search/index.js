// imports necessary modules and components,
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Keyboard,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Images, Colors } from "@Themes";
import { NoResult, PincodeCard, Loading } from "@components";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import Services from "@Services";
import constants from "@constants";
import styles from "./styles";

export default function Search() {
  // Declare state variables
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [textinput, setTextInput] = useState("");
  const [noResult, setNoResult] = useState(false);

  // Function to fetch data from API
  const fetchData = () => {
    resetData();
    setLoading(true);
    Services(constants.SEARCH_API_POST + textinput, "GET")
      .then((response) => {
        if (
          response[0].PostOffice != null &&
          response[0].PostOffice.length > 0
        ) {
          setData(response[0].PostOffice);
          setLoading(false);
        } else {
          setLoading(false);
          setNoResult(true);
        }
      })
      .catch((error) => {
        // Alert to show error if any
        alert(error);
      });
  };

  // Function to reset data when search is cleared
  const resetData = () => {
    setData([]);
    setNoResult(false);
  };

  // Function to render each item in the FlatList
  const renderItem = ({ item, index }) => {
    return (
      <PincodeCard
        key={item.name}
        name={item.Name}
        pinCode={item.Pincode}
        branchType={item.BranchType}
        state={item.State}
        country={item.Country}
      />
    );
  };
  // Search component rendering
  return (
    // Adjusts keyboard offset and behavior based on platform
    <KeyboardAvoidingView
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? responsiveHeight(11) : 0} // adjust this value as needed
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled
    >
      <View style={styles.container}>
        <View style={{ flex: 0.9 }}>
          <View style={styles.viewStyle}>
            <View
              style={[styles.viewTextInputStyle, { flex: textinput ? 0.9 : 1 }]}
            >
              <TextInput
                autoFocus={true} // Set autoFocus to true to show the cursor automatically
                style={styles.input}
                placeholder={"Find pincode by city name"}
                placeholderTextColor={Colors.grey}
                returnKeyType="done"
                value={textinput}
                onChangeText={setTextInput}
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>
            {textinput ? (
              // A cancel or search button that shows depending on if text input is present
              <TouchableOpacity
                style={styles.viewTextInputImageStyle}
                onPress={() => {
                  setTextInput("");
                  resetData();
                }}
              >
                <Image style={styles.imageStyle} source={Images.cancel} />
              </TouchableOpacity>
            ) : (
              <View style={styles.viewTextInputImageStyle}>
                <Image style={styles.imageStyle} source={Images.search} />
              </View>
            )}
          </View>

          {loading ? (
            // Renders a component conditionally, displaying either a loading spinner.
            // FlatList with data if text input has been entered and data is available,
            Loading()
          ) : textinput && data.length > 0 ? (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => item.Name}
              style={{ marginBottom: responsiveWidth(6) }}
              showsVerticalScrollIndicator={false}
            />
          ) : (
            // View with a 'NoResult' component if there is no data available or the text input is empty.
            <View style={styles.noResultViewStyle}>
              {noResult ? NoResult() : null}
            </View>
          )}
        </View>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              // The function dismisses the keyboard and fetches data, otherwise it displays an alert message prompting the user to enter a city name
              if (textinput != "") {
                Keyboard.dismiss();
                fetchData();
              } else {
                alert("Please enter the city name to begin your search.");
              }
            }}
          >
            <Text style={styles.text}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
