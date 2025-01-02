import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";

const OnBoarding = () => {
  const navigation = useNavigation();
  const [showOnboarding, setShowOnboarding] = useState(true);

  if (showOnboarding) {
    return (
      <Onboarding
        onDone={() => setShowOnboarding(false)}
        onSkip={() => setShowOnboarding(false)}
        pages={[
          {
            backgroundColor: "white",
            image: <Image source={require("../assets/worktrack image.jpg")} className="w-36 h-36" />,
            title: "Welcome to WorkTrack",
            subtitle: "Simplifying Field Work for You",
          },
          {
            backgroundColor: "#6C6EF5",
            image: <Image source={require("../assets/worktrack image.jpg")} className="w-36 h-36" />,
            title: "Manage Tasks",
            subtitle: "Track your field tasks with ease.",
          },
          {
            backgroundColor: "#333333",
            image: <Image source={require("../assets/worktrack image.jpg")} className="w-36 h-36" />,
            title: "Stay Organized",
            subtitle: "Boost your productivity every day.",
          },
        ]}
      />
    );
  }

  return (
    <View className="flex-1 justify-center items-center bg-white">
      {/* Picture Section */}
      <Image
        source={require("../assets/worktrack image.jpg")}
        className="w-48 h-48 mb-5"
        resizeMode="contain"
      />

      {/* WorkTrack Title */}
      <Text className="text-2xl font-bold text-center mb-2">
        <Text className="text-[#6C6EF5]">Work</Text>
        <Text className="text-black">Track</Text>
      </Text>

      {/* Welcome Text */}
      <Text className="text-lg font-semibold text-gray-600 text-center mb-5">
        Simplifying Field Work
      </Text>

      {/* Button Section */}
      <TouchableOpacity
        className="bg-[#6C6EF5] py-3 px-6 rounded-lg"
        onPress={() => navigation.navigate("Login")}
      >
        <Text className="text-white text-base font-bold">Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OnBoarding;
