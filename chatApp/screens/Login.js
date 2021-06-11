import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signin = () => {
    auth
      .signInWithEmailAndPassword(email, password)

      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      if (user) {
        navigation.replace("Chat");
      } else {
        navigation.canGoBack() && navigation.popToTop();
        // No user is signed in.
      }
    });
    return unsubscribe;
  }, []);
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter your email"
        label="Email"
        leftIcon={{ type: "material", name: "email" }}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="sign in" style={styles.button} onPress={signin} />
      <Button
        title="register"
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 200,
    margin: 10
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});
export default Login;
