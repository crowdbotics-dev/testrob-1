import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {// Handle login logic here
  };

  const handleSignup = () => {// Handle signup logic here
  };

  const handleForgotPassword = () => {// Handle forgot password logic here
  };

  return <ImageBackground source={{
    uri: "https://tinyurl.com/42evm3m3"
  }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image source={require("./CB Static BG.png")} style={styles.avatar} />
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Email" keyboardType="email-address" autoCapitalize="none" marginBottom={32} />
        <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Password" secureTextEntry marginBottom={32} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>;
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center"
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 32
  },
  button: {
    width: "80%",
    height: 40,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  },
  forgotPasswordText: {
    color: "#007AFF",
    textDecorationLine: "underline"
  }
});
export default LoginScreen;