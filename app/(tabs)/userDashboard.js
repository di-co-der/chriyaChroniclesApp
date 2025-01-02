import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserDashboard = () => {
  const tasks = [
    { id: "1", title: "Meeting with Team" },
    { id: "2", title: "Complete Design Review" },
    { id: "3", title: "Submit Project Proposal" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header */}
      <LinearGradient
        colors={["#6C63FF", "#9C63FF"]}
        className="flex-row justify-between items-center px-5 py-4"
      >
        <Text className="text-white text-lg font-bold">WorkTrack Dashboard</Text>
      </LinearGradient>

      {/* Main Content */}
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Welcome Section */}
        <View className="mb-5 items-center">
          <Text className="text-2xl font-bold text-gray-800">
            Welcome Back, User!
          </Text>
          <Text className="text-gray-500 mt-1">
            Here’s an overview of your day:
          </Text>
        </View>

        {/* Quick Action Cards */}
        <View className="flex-row flex-wrap justify-between mb-5">
          {[
            "Notice",
            "Apply for Leave",
            "Attendance",
            "Holiday",
            "Employee Detail",
            "Calendar",
            "Claim",
            "Assigned",
          ].map((title, index) => (
            <TouchableOpacity
              className="w-[45%] mb-4 rounded-lg overflow-hidden shadow"
              key={index}
            >
              <LinearGradient
                colors={["#FFFFFF", "#F0F0F5"]}
                className="py-6 items-center justify-center"
              >
                <Text className="text-center text-sm font-bold text-gray-700">
                  {title}
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ))}
        </View>

        {/* Task List */}
        <View>
          <Text className="text-lg font-bold text-gray-800 mb-3">
            Your Tasks
          </Text>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <View className="bg-white p-4 rounded-lg mb-3 shadow">
                <Text className="text-gray-800 text-sm">{item.title}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDashboard;
