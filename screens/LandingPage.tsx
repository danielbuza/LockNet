import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Pressable,
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
        source={require('../assets/LandingLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>
        Remember meaningful events and make meaningful connections.
      </Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
      <View style={styles.buttonContent}>
    <Text style={styles.buttonText}>continue</Text>
    <Image source={require('../assets/LandingPageArrow.png')} style={styles.arrowImage} />
      </View>
      </Pressable>
    </View>
  );
};
export default LandingPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Aligns content in the center horizontally
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 198,
    height: 86,
  },
  text: {
    fontSize: 40,
    margin: 20,
    textAlign: 'left',
    marginVertical: 60,
    color: 'black',
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end', // Aligns the button to the right
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
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

