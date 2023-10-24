import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavigationProp } from "@react-navigation/native";
import MyAccount from "./MyAccount";

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: RouterProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate("Inside", { screen: "My Account" });
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      alert("Check your email!");
    } catch (error: any) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/LandingLogo.png')}
        style={styles.logo}
      />
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          style={styles.loginBox}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.loginBox}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Pressable style={styles.button} onPress={signIn}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

            <Button title="Create Account" onPress={signUp} />
            <View style={styles.horizontalLineContainer}>
        <View style={styles.line} />
        <Text style={styles.loginText}>Login with</Text>
        <View style={styles.line} />
      </View>
          </>
          
        )}
      </KeyboardAvoidingView>
      <Text style={styles.disclaimerText}>
        Your justified text here. This text will be aligned to justify the content for better readability. It will adjust based on the content.
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 100, // Add margin to shift components lower // sort out the grey top
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    backgroundColor: "#fff",
  },
  loginBox: {
    backgroundColor: 'white',
    borderStyle: 'solid',
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 10, // Increased padding to add space
    borderRadius: 15,
    width: 295,
    height: 45, // Increased height to create more space
    marginVertical:5,
    alignSelf:'center'
  },
  
  logo: {
    width: 198,
    height: 86,
    marginVertical: 30,
  },
  loginText: {
    color: 'gray',
    fontSize: 14,

  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    width: 295,
    height: 56,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 15,
  },
  horizontalLineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 40, // Increased margin for more space
  },
  disclaimerText: {
    textAlign: 'justify',
    marginVertical: 20, // Increased margin for more space
    marginHorizontal: 80,
  },
  

});
