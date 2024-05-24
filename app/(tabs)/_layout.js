import { Tabs } from "expo-router";
import React from "react";
import {
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={24} color="#7CB9E8" />
            ) : (
              <AntDesign name="home" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarLabel: "Calendar",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="calendar" size={24} color="#7CB9E8" />
            ) : (
              <AntDesign name="calendar" size={24} color="black" />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarLabelStyle: { color: "#7CB9E8" },
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="#7CB9E8"
              />
            ) : (
              <MaterialCommunityIcons
                name="account-details"
                size={24}
                color="black"
              />
            ),
        }}
      />
    </Tabs>
  );
}
