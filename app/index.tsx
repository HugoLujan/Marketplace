import { Redirect } from "expo-router";
import { NativeWindStyleSheet } from "nativewind";
import React from "react";
import { View } from "react-native";

NativeWindStyleSheet.setOutput({
  default: "native",
});

function index() {
  return <Redirect href={"/(auth)/login"} />;
}
export default index;
