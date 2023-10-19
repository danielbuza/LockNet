import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { NavigationProp } from "@react-navigation/native";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const LandingPage = ({ navigation }: RouterProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/icon.png")} //change to ur logo, i dont have file
        style={styles.logo}
      />
      <Text style={styles.text}>
        Remember meaningful events and make meaningful connections.
      </Text>
      <Button onPress={() => navigation.navigate("Login")} title="Continue" />
    </View>
  );
};
export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logo: {
    width: 198, // Adjust the width and height as needed
    height: 86,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    margin: 20,
    //fontStyle: 'Urbanist',
    marginVertical: 60,
  },
  button: {
    backgroundColor: "transparent",
    padding: 10,
    borderRadius: 5,
    flexDirection: "row", // Arrange children in a row
    alignSelf: "flex-end",
    marginTop: 50,
  },
  buttonText: {
    color: "#0047FF",
    fontSize: 26,
  },

  arrowImage: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
});
