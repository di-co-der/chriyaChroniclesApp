import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("Logging in with:", email, password);
    navigation.navigate("(tabs)"); // Navigate to Tabs
  };

  return (
    <LinearGradient
      colors={["#4A90E2", "#9013FE"]}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center px-5">
        <Text className="text-4xl font-bold text-white mb-5">
          Welcome Back
        </Text>

        <Text className="text-base text-gray-100 text-center mb-5">
          Please add your email address and password
        </Text>

        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-4 text-lg mb-5 bg-white"
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          className="w-full h-12 border border-gray-300 rounded-lg px-4 text-lg mb-5 bg-white"
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity
          className="w-full bg-black py-3 rounded-lg items-center mb-5"
          onPress={handleLogin}
        >
          <Text className="text-white text-lg font-bold">Login</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
